import {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, useParams, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import AuthRedirect from "../../hoc/AuthRedirect";


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
    profile: ProfileType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfileTC: (userId: string) => void
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
        if (!userId) userId = '2';
        props.getProfileTC(userId)
    }, [])



    return (
        <div>
            <Profile {...props} profile={props.profile}/>
        </div>
    );
};

let AuthRedirectComponent = AuthRedirect(ProfileContainer)

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth
})

let ProfileContainerUrl = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfileTC})(ProfileContainerUrl);