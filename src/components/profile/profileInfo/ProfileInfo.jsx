import React from 'react';
import s from './ProfileInfo.module.css'
import {PreLoader} from "../../common/PreLoader";


export const ProfileInfo = ({profile}) => {
  return <>
    {!profile ? <PreLoader/> : <img className={s.img} src={profile.photos.large} alt="house"/>}

  </>
};
