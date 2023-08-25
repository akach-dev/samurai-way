import React, {FC} from 'react';
import {Post} from "./post/Post";
import s from './MyPosts.module.css'


export const MyPosts: FC = () => {
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


