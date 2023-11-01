import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";


export const Profile = ({profile}) => {
  return (
    <div>
      <ProfileInfo profile={profile}/>
      <MyPostsContainer
      />
    </div>
  );

}

