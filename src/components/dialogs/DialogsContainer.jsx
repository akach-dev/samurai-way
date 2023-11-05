import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
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
  connect(mapStateToProps, mapDispatchToProps)
  (withAuthRedirect(Dialogs))