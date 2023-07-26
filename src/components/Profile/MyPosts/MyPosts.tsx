import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "./MyPostsContainer";
import PostForm from "./PostForm";

type PropsType = {
    addPost: (post: string) => void,
    posts: PostType[],
}

const MyPosts: React.FC<PropsType> = (props) => {
    const {addPost, posts} = props;

    let myPostElements = posts.map(post => <MyPost key={post.id} message={post.message} likesCount={post.likesCount}/>);

    const sumbit = (post: string) => {
        addPost(post);
    }

    return (<>
            <p>My posts</p>
            <div>
                <p>New post</p>
                <PostForm submit={sumbit}/>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </>
    );
};

export default MyPosts;