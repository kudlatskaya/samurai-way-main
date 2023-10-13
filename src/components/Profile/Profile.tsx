import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profile: null | any
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </main>
    );
};

export default Profile;