import ProfileInfo from "./ProfileInfo";
import {ActionType, PostType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profilePage: {
        posts: PostType[],
        newPostText: string,
    },
    dispatch: (action: ActionType) => void,
}

const Profile = (props: any) => {
    const { store } = props;

    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer />
        </main>
    );
};

export default Profile;