import React from 'react';
import s from './Profile.module.css'

import house from "../../assets/img/img.webp";
import {MyPosts} from "./myPosts/MyPosts";

type ProfilePropsType = {}

export function Profile() {
  return (
     <div>
       <img className={s.img} src={house} alt="house"/>

       <MyPosts/>
     </div>
  );
}


