import React, {FC} from 'react';

import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
  data: ProfilePageType
  addPost: (text: string) => void

}

export const Profile: FC<ProfilePropsType> = ({data, addPost}) => (
   <div>
     <ProfileInfo/>
     <MyPosts addPost={addPost} posts={data.posts}/>
   </div>
);


