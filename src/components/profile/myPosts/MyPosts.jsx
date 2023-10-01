import React, {useRef} from 'react';
import {Post} from "./post/Post";
import s from './MyPosts.module.css'
import {addPostAC, updateNewPostTextAC} from "../../../redux/store";


export const MyPosts = ({posts, newPostText, dispatch}) => {

  const textareaRef = useRef(null)

  const addPostHandler = () => {
    dispatch(addPostAC())
  }


  const post = posts.map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>)

  const onChangeHandler = () => {
    if (textareaRef.current) {
      dispatch(updateNewPostTextAC(textareaRef.current.value))
    }

  };
  return (
    <div className={s.myPosts}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={textareaRef} value={newPostText} onChange={onChangeHandler}/>
        <button onClick={addPostHandler}>Add post</button>
      </div>
      <div className={s.myPost}>
        {post}
      </div>
    </div>
  );
};


