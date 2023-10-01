import React from 'react';
import {Post} from "./post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = ({store}) => {

  const addPost = () => {
    store.dispatch(addPostAC())
  }


  const posts = store.getState().profilePage.posts.map(post =>
    <Post key={post.id} id={post.id} message={post.message}
          likesCount={post.likesCount}/>)

  const onChange = (text) => {
    store.dispatch(updateNewPostTextAC(text))

  };
  return <MyPosts posts={posts} onChange={onChange} addPost={addPost}
                  newPostText={store.getState().profilePage.newPostText}/>
};


