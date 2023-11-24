import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {Field, reduxForm} from "redux-form";


export const Dialogs = ({onNewMessage, onSendMessage, messagesPage, isAuth}) => {
  const addNewMessage = (formData) => {
    onSendMessage(formData.newMessageDody)
  }


  const dialog = messagesPage.dialogs.map(dialog =>
    <DialogsItem key={dialog.id}
                 name={dialog.name}
                 id={dialog.id}/>)
  const message = messagesPage.messages.map(message => <Message key={message.id}
                                                                message={message.message}/>)
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        {dialog}
      </ul>
      <div className={s.messages}>
        {message}
        <AddMessageFormRedux
          onSubmit={addNewMessage}
          // newMessageText={newMessageText}
          // onNewMessageChange={onNewMessageChange}
          // onSendMessageClick={onSendMessageClick}
        />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={'textarea'}
             placeholder={'Enter your message'}
             name={'newMessageDody'}
      />
    </div>
    <div>
      <button>Send</button>
    </div>
  </form>
}

const AddMessageFormRedux =
  reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)