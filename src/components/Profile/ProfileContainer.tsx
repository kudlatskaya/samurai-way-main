import {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, getStatusTC, updateStatusTC} from "../../state/profileReducer";
import {RouteComponentProps, useParams, withRouter} from "react-router-dom";
import {AppStateType} from "../../state/redux-store";
import {compose} from "redux";


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
    status: string
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

    useEffect(() => {
        let userId = params.userId;
        if (!userId) userId = '28736';
        props.getProfileTC(userId)
        props.getStatusTC(userId)
    }, [])

    return (
        <div>
            <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatusTC}/>
        </div>
    );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC}),
    withRouter
)(ProfileContainer)
