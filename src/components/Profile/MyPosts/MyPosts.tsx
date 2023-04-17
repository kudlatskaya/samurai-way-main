import {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "./MyPostsContainer";

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void,
    addPost: () => void,
    posts: PostType[],
    newPostText: string,
}

const MyPosts = (props: MyPostsPropsType) => {
    const { updateNewPostText, addPost, posts, newPostText } = props;

    let myPostElements = posts.map(post => <MyPost key={post.id} message={post.message} likesCount={post.likesCount}/>);

    let onClickAddPostHandler = () => {
        addPost();
    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
      updateNewPostText(text);
    }

    return (<>
            <p>My posts</p>
            <div>
                <p>New post</p>
                <textarea onChange={onChangePost} value={newPostText}/>
                <button onClick={onClickAddPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </>
    );
};

export default MyPosts;