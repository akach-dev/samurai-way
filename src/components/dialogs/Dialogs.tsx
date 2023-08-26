import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
  data: MessagesPageType
}

export type MessagesDataType = { message: string; id: string; }


export const Dialogs: FC<DialogsPropsType> = ({data}) => {


  const dialog = data.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  const message = data.messages.map(message => <Message key={message.id} message={message.message}/>)

  return (
     <div className={s.dialogs}>
       <ul className={s.dialogsItems}>
         {dialog}
       </ul>
       <ul className={s.messages}>
         {message}
       </ul>
     </div>
  );
};


