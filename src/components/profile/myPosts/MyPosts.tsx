import React, {FC, useRef} from 'react';
import {Post} from "./post/Post";
import s from './MyPosts.module.css'

export type PostDataType = {
  id: string
  message: string
  likesCount: number
}

type MyPostsPropsType = {
  posts: PostDataType[]
  addPost: (text: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = ({posts, addPost}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const addPostHandler = () => {
    if (textareaRef.current) {
      addPost(textareaRef.current.value)
      textareaRef.current.value = ''
    }
  }


  const post = posts.map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>)

  return (
     <div className={s.myPosts}>
       <h3>My Posts</h3>
       <div>
         <textarea ref={textareaRef}></textarea>
         <button onClick={addPostHandler}>Add post</button>
       </div>
       <div className={s.myPost}>
         {post}
       </div>
     </div>
  );
};


