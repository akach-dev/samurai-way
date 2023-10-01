import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/store";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = ({store}) => {

  const newMessageText = store.getState().messagesPage.newMessageText
  const dialog = store.getState().messagesPage.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name}
                                                                                  id={dialog.id}/>)
  const message = store.getState().messagesPage.messages.map(message => <Message key={message.id}
                                                                                 message={message.message}/>)
  const onSendMessage = () => store.dispatch(sendNewMessageTextAC())
  const onNewMessage = (text) => {
    store.dispatch(updateNewMessageTextAC(text))
  };
  return <Dialogs dialog={dialog} message={message} onSendMessage={onSendMessage} onNewMessage={onNewMessage}
                  newMessageText={newMessageText}/>
};


