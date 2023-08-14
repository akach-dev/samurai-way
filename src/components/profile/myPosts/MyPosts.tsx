import React from 'react';
import s from './MyPosts.module.css'

import house from "../../assets/img/img.webp";

export const MyPosts = () => {
  return (
     <div>
       <img className={s.img} src={house} alt="house"/>
     </div>
  );
};


