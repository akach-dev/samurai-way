import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessageTextAC} from "../../redux/store";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage(newMessageDody) {
      dispatch(sendNewMessageTextAC(newMessageDody))
    }
  }
}


export const DialogsContainer =
  compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs)