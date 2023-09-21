import React, {FC, useRef} from 'react';
import {Post} from "./post/Post";
import s from './MyPosts.module.css'

export type PostDataType = {
  id: string
  message: string
  likesCount: number
}

type MyPostsPropsType = {
  newPostText: string
  posts: PostDataType[]
  addPost: () => void
  updateNewPostText: (text: string) => void

}

export const MyPosts: FC<MyPostsPropsType> = ({posts, addPost, newPostText, updateNewPostText}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const addPostHandler = () => {
    addPost()
  }


  const post = posts.map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>)

  const onChangeHandler = () => {
    if (textareaRef.current) {
      updateNewPostText(textareaRef.current.value)
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


