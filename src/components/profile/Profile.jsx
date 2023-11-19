import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";


export const Profile = ({profile, status, updateStatus}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
      <MyPostsContainer
      />
    </div>
  );

}

