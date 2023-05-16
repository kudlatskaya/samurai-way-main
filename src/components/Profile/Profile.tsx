import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: null | any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </main>
    );
};

export default Profile;