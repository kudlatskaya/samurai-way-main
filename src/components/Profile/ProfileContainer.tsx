import {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, useParams, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {socialNetworkApi} from "../../api/social-network-api";


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
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userId: string | undefined
}

type PropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

const ProfileContainer = (props: ProfileContainerPropsType) => {
    const params = useParams<{ userId: string }>();
    // let userId = props.match.params.userId;
    let userId = params.userId;
    if (!userId) userId = '2';

    useEffect(() => {
        socialNetworkApi.getProfile(userId)
            .then(response => {
                props.setUserProfile(response.data);
            })
    }, [])

    return (
        <div>
            <Profile {...props} profile={props.profile}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile
})

let ProfileContainerUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerUrl);