import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {ActionType, MessagesPageType, sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/store";

type DialogsPropsType = {
  data: MessagesPageType
  dispatch: (action: ActionType) => void

}

export type MessagesDataType =
   { message: string; id: string; }


export const Dialogs: FC<DialogsPropsType> = ({data, dispatch}) => {


  const dialog = data.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  const message = data.messages.map(message => <Message key={message.id} message={message.message}/>)

  const onSendMessageClick = () => dispatch(sendNewMessageTextAC())

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageTextAC(e.currentTarget.value))
  };
  return (
     <div className={s.dialogs}>
       <ul className={s.dialogsItems}>
         {dialog}
       </ul>
       <ul className={s.messages}>
         {message}
         <div><textarea
            value={data.newMessageText}
            onChange={onNewMessageChange}
            placeholder={'Enter your message'}></textarea></div>
         <div>
           <button onClick={onSendMessageClick}>Send</button>
         </div>
       </ul>
     </div>
  );
};


