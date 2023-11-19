import React from 'react';
import s from './ProfileInfo.module.css'
import {PreLoader} from "../../common/PreLoader";
import {ProfileStatus} from "./ProfileStatus";


export const ProfileInfo = ({profile, status, updateStatus}) => {
  return <>
    {!profile ? <PreLoader/> :
      <div>
        <img className={s.img} src={profile.photos.large} alt="house"/>
        <ProfileStatus status={status} updateStatus={updateStatus}/>
      </div>
    }
  </>
};
