import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "./MyPostsContainer";
import PostForm from "./Post/PostForm";

type PropsType = {
    addPost: (post: string, title: string) => void,
    posts: PostType[],
}

const MyPosts: React.FC<PropsType> = (props) => {
    const {addPost, posts} = props;

    let myPostElements = posts.map(post =>
        <MyPost key={post.id} message={post.message} likesCount={post.likesCount} title={post.title}/>
    );

    const sumbit = (post: string, title: string) => {
        addPost(post, title);
    }

    return (<>
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