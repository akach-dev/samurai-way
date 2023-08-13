import React from 'react';
import s from './Profile.module.css'

import house from "../../assets/img/img.webp";

export const Profile = () => {
  return (
     <div>
       <img className={s.img} src={house} alt="house"/>
     </div>
  );
};


