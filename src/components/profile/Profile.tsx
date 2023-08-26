import React, {FC} from 'react';

import {MyPosts, PostDataType} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

type ProfilePropsType = {
  posts: PostDataType[]
}

export const Profile: FC<ProfilePropsType> = ({posts}) => (
   <div>
     <ProfileInfo/>
     <MyPosts posts={posts}/>
   </div>
);


