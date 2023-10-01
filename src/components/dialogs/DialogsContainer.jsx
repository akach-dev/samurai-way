import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import React from "react";
import {StoreContext} from '../../StoreContext'


export const DialogsContainer = () => {
  return <StoreContext.Consumer>
    {
      (store) => {
        const onSendMessage = () => store.dispatch(sendNewMessageTextAC())
        const onNewMessage = (text) => {
          store.dispatch(updateNewMessageTextAC(text))
        }
        return <>
          <Dialogs onSendMessage={onSendMessage} onNewMessage={onNewMessage}
                   messagesPage={store.getState().messagesPage}
          />
        </>
      }
    }
  </StoreContext.Consumer>
};


