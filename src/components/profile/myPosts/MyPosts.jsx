import React, {useRef} from 'react';
import {Post} from "./post/Post";
import s from './MyPosts.module.css'


export const MyPosts = ({posts, addPost, updatePostText, newPostText}) => {

  const textareaRef = useRef(null)

  const addPostHandler = () => {
    addPost()
  }

  const post = posts.map((post, index) => <Post key={index} id={post.id} message={post.message}
                                                likesCount={post.likesCount}/>)

  const onChangeHandler = () => {
    updatePostText(textareaRef.current.value)

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


