export const messagesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT":
      state.newMessageText = action.text
      return state


    case "SEND-NEW-MESSAGE-TEXT":
      const message = state.newMessageText
      state.messages.push({id: "6", message})
      state.newMessageText = ''
      return state
    
    default:
      return state
  }
};
