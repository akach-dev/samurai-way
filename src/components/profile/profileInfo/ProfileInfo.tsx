import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import house from "../../../assets/img/img.webp";


export const ProfileInfo: FC = () => {
  return (
     <img className={s.img} src={house} alt="house"/>
  );
};
