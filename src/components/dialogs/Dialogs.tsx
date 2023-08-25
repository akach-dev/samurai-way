import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type  MessagePropsType = {
  message: string
}

type DialogsItemPropsType = {
  name: string
  id: string
}

const DialogsItem: FC<DialogsItemPropsType> = ({id, name}) => {
  let path = `/dialogs/${id}`

  return (
     <li className={s.dialogsItem}>
       <NavLink to={path}>{name}</NavLink>
     </li>
  )
}

const Message: FC<MessagePropsType> = ({message}) => {
  return (
     <li className={s.messagesItem}>{message}</li>
  )
}

export const Dialogs = () => {
  return (
     <div className={s.dialogs}>
       <ul className={s.dialogsItems}>
         <DialogsItem name={'Dimcho'} id={'1'}/>
         <DialogsItem name={'Andrey'} id={'2'}/>
         <DialogsItem name={'Svea'} id={'3'}/>
         <DialogsItem name={'Victor'} id={'4'}/>
         <DialogsItem name={'Valera'} id={'5'}/>
       </ul>
       <ul className={s.messages}>
         <Message message='Lorem ipsum dolor sit amet.'/>
         <Message message='Lorem ipsum dolor.'/>
         <Message message='Lorem ipsum .'/>
       </ul>
     </div>
  );
};


