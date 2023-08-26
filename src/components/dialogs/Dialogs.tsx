import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem, DialogsItemPropsType} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";

type DialogsPropsType = {
  dialogs: DialogsItemPropsType[]
  messages: MessagesDataType[]
}

export type MessagesDataType = { message: string; id: string; }


export const Dialogs: FC<DialogsPropsType> = ({dialogs, messages}) => {


  const dialog = dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  const message = messages.map(message => <Message key={message.id} message={message.message}/>)

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


