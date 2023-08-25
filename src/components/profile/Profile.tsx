import React from 'react';

import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export function Profile() {
  return (
     <div>
       <ProfileInfo/>
       <MyPosts/>
     </div>
  );
}


