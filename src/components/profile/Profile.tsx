import React, {FC} from 'react';

import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionType) => void
}


export const Profile: FC<ProfilePropsType> = ({profilePage, dispatch}) => (
   <div>
     <ProfileInfo/>
     <MyPosts
        posts={profilePage.posts}
        dispatch={dispatch}
        newPostText={profilePage.newPostText}/>
   </div>
);


