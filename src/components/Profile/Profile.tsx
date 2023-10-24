import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import {ProfileDataFormType} from "./ProfileDataForm/ProfileDataForm";


type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataFormType | ProfileType) => void
}

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfilePropsType) => {

    return (
        <main>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </main>
    );
};

export default Profile;