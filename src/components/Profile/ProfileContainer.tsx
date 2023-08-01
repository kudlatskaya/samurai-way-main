import {useEffect} from "react";
import Profile from "./Profile";
import {connect, useSelector} from "react-redux";
import {getProfileTC, getStatusTC, updateStatusTC} from "../../state/profileReducer";
import {RouteComponentProps, useParams, withRouter} from "react-router-dom";
import {AppStateType, useAppSelector} from "../../state/redux-store";
import {compose} from "redux";
import {UserIdType} from "../../state/authReducer";


type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}

type PhotosType = {
    small: string | null,
    large: string | null
}

export type ProfileType = {
    aboutMe: string | null,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: string | undefined,
    photos: PhotosType
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
}

type PathParamsType = {
    userId: string | undefined
}

type PropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

const ProfileContainer = (props: ProfileContainerPropsType) => {
    const params = useParams<{ userId: string }>();
    // const authUserId = useAppSelector(state => state.authReducer.userId)

    useEffect(() => {
        let userId = params.userId;
        if (!userId) {
            userId = `${props.authUserId}`

            if(!props.authUserId) {
                props.history.push('/login')
            }
        }
        props.getProfileTC(userId)
        props.getStatusTC(userId)
    }, [])

     // if (!isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <Profile {...props}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatusTC}/>
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
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC}),
    withRouter
)(ProfileContainer)
