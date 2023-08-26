import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessagesDataType = { message: string; id: string; }

type MessagePropsType = {
  message: string
}

export type DialogsItemPropsType = {
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

export const Dialogs: FC = () => {

  const dialogsData: DialogsItemPropsType[] = [
    {name: 'Dimcho', id: '1'},
    {name: 'Andrey', id: '2'},
    {name: 'Svea', id: '3'},
    {name: 'Victor', id: '4'},
    {name: 'Valera', id: '5'},
  ]
  const messagesData: MessagesDataType[] = [
    {message: 'Lorem ipsum dolor sit amet.', id: '1'},
    {message: 'Lorem ipsum dolor.', id: '2'},
    {message: 'Lorem ipsum .', id: '3'},
    {message: 'Yo', id: '4'},
    {message: 'Yo', id: '5'},
  ]

  const dialogs = dialogsData.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  const messages = messagesData.map(message => <Message key={message.id} message={message.message}/>)

  return (
     <div className={s.dialogs}>
       <ul className={s.dialogsItems}>
         {dialogs}
       </ul>
       <ul className={s.messages}>
         {messages}
       </ul>
     </div>
  );
};


