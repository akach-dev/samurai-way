import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";


export const Dialogs = ({onNewMessage, onSendMessage, messagesPage, isAuth}) => {

  const newMessageText = messagesPage.newMessageText

  const dialog = messagesPage.dialogs.map(dialog =>
    <DialogsItem key={dialog.id}
                 name={dialog.name}
                 id={dialog.id}/>)
  const message = messagesPage.messages.map(message => <Message key={message.id}
                                                                message={message.message}/>)


  const onSendMessageClick = () => onSendMessage()

  const onNewMessageChange = (e) => {
    onNewMessage(e.currentTarget.value)
  };

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        {dialog}
      </ul>
      <ul className={s.messages}>
        {message}
        <div><textarea
          value={newMessageText}
          onChange={onNewMessageChange}
          placeholder={'Enter your message'}></textarea></div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </ul>
    </div>
  );
};


