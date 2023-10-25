import {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileTC,
    getStatusTC,
    PhotosType,
    savePhoto,
    saveProfile,
    updateStatusTC
} from "../../state/reducers/profileReducer";
import {RouteComponentProps, useParams, withRouter} from "react-router-dom";
import {AppStateType} from "../../state/redux-store";
import {compose} from "redux";
import {UserIdType} from "../../state/reducers/authReducer";
import {ProfileDataFormType} from "./ProfileDataForm/ProfileDataForm";


export type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}

export type ProfileType = {
    aboutMe: string | null,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number | undefined,
    photos?: PhotosType;
}

type MapStatePropsType = {
    profile: ProfileType,
    status: string,
    authUserId: UserIdType,
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfileTC: (userId: string) => void,
    getStatusTC: (userId: string) => void,
    updateStatusTC: (status: string) => void,
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataFormType | ProfileType) => void
}

type PathParamsType = {
    userId: string | undefined
}

type PropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

const ProfileContainer = (props: ProfileContainerPropsType) => {
    const params = useParams<{ userId: string }>();

    useEffect(() => {
        let userId = params.userId;

        if (!userId) {
            userId = `${props.authUserId}`

            if (!props.authUserId) {
                props.history.push('/login')
            }
        }
        props.getProfileTC(userId)
        props.getStatusTC(userId)
    }, [params.userId])

    // const saveProfile = (data: ProfileDataFormType | ProfileType) => {
    //     console.log(data)
    //     saveProfile(data as ProfileType)
    // }

    // if (!isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <Profile {...props}
                     isOwner={!!props.match.params.userId}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatusTC}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}/>
        </div>
    );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)
