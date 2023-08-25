import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
  return (
     <div className={s.dialogs}>
       <ul className={s.dialogsItems}>
         <li className={s.dialogsItem}>Dimcho</li>
         <li className={s.dialogsItem}>Andrey</li>
         <li className={s.dialogsItem}>Svea</li>
         <li className={s.dialogsItem}>Victor</li>
         <li className={s.dialogsItem}>Valera</li>
       </ul>
       <ul className={s.messages}>
         <li className={s.messagesItem}>Lorem ipsum dolor sit amet, consecrate radicalising elit.</li>
         <li className={s.messagesItem}>Lorem ipsum dolor sit amet.</li>
       </ul>
     </div>
  );
};
