import {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "./MyPostsContainer";
import {useFormik} from "formik";

type FormDataType = {
    postText: string
}

// const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//
//     const onChangeHandler = () => {
//         props.changePost()
//     }
//
//     const onClickHandler = () => {
//         props.addPost()
//     }
//
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field name={'postText'} placeholder={"Post"} component={'input'} onChange={onChangeHandler}/>
//             </div>
//             <div>
//                 <button onClick={onClickHandler}>Add post</button>
//             </div>
//         </form>
//     );
// };

// const PostReduxForm = reduxForm<FormDataType>({form: 'post'})(PostForm)


type MyPostsPropsType = {
    updateNewPostText: (text: string) => void,
    addPost: () => void,
    posts: PostType[],
    newPostText: string,
}

type FormikErrorType = {
    post?: string
}

const MyPosts = (props: MyPostsPropsType) => {
    const {updateNewPostText, addPost, posts, newPostText} = props;

    const formik = useFormik({
        initialValues: {
            post: newPostText,
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.post) {
                errors.post = 'Required'
            }

            return errors
        },
        onSubmit: values => {
            updateNewPostText(values.post);
            addPost();
            formik.resetForm()
        },

    })

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
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <textarea placeholder={'Enter your post'}
                                  name={'post'}
                                  onChange={formik.handleChange}
                                  value={formik.values.post}/>
                    </div>

                    {formik.touched.post && formik.errors.post ?
                        <div style={{color: 'red'}}>{formik.errors.post}</div> : null}

                    <button type={'submit'}>Add post</button>
                </form>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </>
    );
};

export default MyPosts;