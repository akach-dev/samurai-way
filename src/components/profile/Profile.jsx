import React from 'react';

import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";


export const Profile = ({profilePage, dispatch}) => {
  
  return (

    <div>
      <ProfileInfo/>
      <MyPosts
        posts={profilePage.posts}
        dispatch={dispatch}
        newPostText={profilePage.newPostText}/>
    </div>
  );

}

