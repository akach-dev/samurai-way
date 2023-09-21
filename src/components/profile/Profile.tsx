import React, {FC} from 'react';

import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
  profilePage: ProfilePageType
  addPost: () => void
  updateNewPostText: (text: string) => void
}


export const Profile: FC<ProfilePropsType> = ({profilePage, addPost, updateNewPostText}) => (
   <div>
     <ProfileInfo/>
     <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} posts={profilePage.posts}
              newPostText={profilePage.newPostText}/>
   </div>
);


