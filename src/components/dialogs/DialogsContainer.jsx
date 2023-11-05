import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/store";


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage() {
      dispatch(sendNewMessageTextAC())
    },
    onNewMessage(text) {
      dispatch(updateNewMessageTextAC(text))
    }
  }
}


export const DialogsContainer =
  connect(mapStateToProps, mapDispatchToProps)(Dialogs)