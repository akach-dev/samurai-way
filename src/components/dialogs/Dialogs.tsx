import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
  return (
     <div className={s.dialogs}>
       <ul className={s.dialogsItems}>
         <li className={s.dialogsItem}>
           <NavLink to='/dialogs/1'>Dimcho</NavLink>
         </li>
         <li className={s.dialogsItem}>
           <NavLink to='/dialogs/2'>Andrey</NavLink>
         </li>
         <li className={s.dialogsItem}>
           <NavLink to='/dialogs/3'>Svea</NavLink>
         </li>
         <li className={s.dialogsItem}>
           <NavLink to='/dialogs/4'>Victor</NavLink>
         </li>
         <li className={s.dialogsItem}>
           <NavLink to='/dialogs/5'>Valera</NavLink>
         </li>
       </ul>
       <ul className={s.messages}>
         <li className={s.messagesItem}>Lorem ipsum dolor sit amet, consecrate radicalising elit.</li>
         <li className={s.messagesItem}>Lorem ipsum dolor sit amet.</li>
       </ul>
     </div>
  );
};
