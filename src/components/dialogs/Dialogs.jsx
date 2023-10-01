import React from 'react';
import s from './Dialogs.module.css'


export const Dialogs = ({dialog, message, onNewMessage, onSendMessage, newMessageText}) => {


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


