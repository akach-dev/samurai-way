import {MessagesPageType, SendNewMessageTextAC, UpdateNewMessageTextAC} from "./store";

type ActionType = UpdateNewMessageTextAC | SendNewMessageTextAC

export const messagesReducer = (state: MessagesPageType, action: ActionType) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT":
      state.newMessageText = action.text
      return

    case "SEND-NEW-MESSAGE-TEXT":
      const message = state.newMessageText
      state.messages.push({id: "6", message})
      state.newMessageText = ''
      return

    default:
      return state
  }
};
