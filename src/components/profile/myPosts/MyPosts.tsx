import React, {FC} from 'react';
import {Post} from "./post/Post";
import s from './MyPosts.module.css'

export type PostDataType = {
  id: string
  message: string
  likesCount: number
}

type MyPostsPropsType = {
  posts: PostDataType[]
}

export const MyPosts: FC<MyPostsPropsType> = ({posts}) => {

  const post = posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

  return (
     <div className={s.myPosts}>
       <h3>My Posts</h3>
       <div>
         <textarea></textarea>
         <button>Add post</button>
       </div>
       <div className={s.myPost}>
         {post}
       </div>
     </div>
  );
};


