import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/store";


export const Dialogs = ({data, dispatch}) => {
  const dialog = data.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  const message = data.messages.map(message => <Message key={message.id} message={message.message}/>)

  const onSendMessageClick = () => dispatch(sendNewMessageTextAC())

  const onNewMessageChange = (e) => {
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


