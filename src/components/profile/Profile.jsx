import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";


export const Profile = ({store}) => {

  return (

    <div>
      <ProfileInfo/>
      <MyPostsContainer
        store={store}/>
    </div>
  );

}

