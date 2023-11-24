import React from 'react';
import {Post} from "./post/Post";
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";


export const MyPosts = ({posts, addPost, updatePostText, newPostText}) => {

  const post = posts.map((post, index) => <Post key={index} id={post.id} message={post.message}
                                                likesCount={post.likesCount}/>)


  const addPostHandler = (values) => {
    addPost(values.newPostText)
  }


  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={addPostHandler}/>
      <div className={s.myPost}>
        {post}
      </div>
    </div>
  );
};

function AddNewPostForm(props) {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={'textarea'} name='newPostText'/>
    </div>
    <button onClick={props.onClick}>Add post</button>
  </form>;
}

const AddNewPostFormRedux
  = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)



