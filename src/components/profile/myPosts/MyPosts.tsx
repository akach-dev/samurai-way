import React, {FC} from 'react';
import {Post} from "./post/Post";
import s from './MyPosts.module.css'

type PostDataType = {
  id: string
  message: string
  likesCount: number
}


export const MyPosts: FC = () => {


  const postData: PostDataType[] = [
    {message: 'Hi, how are you?', id: '1', likesCount: 12},
    {message: "It's my first post", id: '2', likesCount: 15},
  ]


  return (
     <div className={s.myPosts}>
       <h3>My Posts</h3>
       <div>
         <textarea></textarea>
         <button>Add post</button>
       </div>
       <div className={s.myPost}>
         <Post/>
       </div>
     </div>

  );
};


