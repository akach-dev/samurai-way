import React, {FC} from 'react';

import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
  data: ProfilePageType
}

export const Profile: FC<ProfilePropsType> = ({data}) => (
   <div>
     <ProfileInfo/>
     <MyPosts posts={data.posts}/>
   </div>
);


