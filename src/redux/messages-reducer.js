let initialState = {
  messages: [
    {message: 'Lorem ipsum dolor sit amet.', id: '1'},
    {message: 'Lorem ipsum dolor.', id: '2'},
    {message: 'Lorem ipsum .', id: '3'},
    {message: 'Yo', id: '4'},
    {message: 'Yo', id: '5'},
  ],
  dialogs: [
    {name: 'Dimcho', id: '1'},
    {name: 'Andrey', id: '2'},
    {name: 'Svea', id: '3'},
    {name: 'Victor', id: '4'},
    {name: 'Valera', id: '5'},
  ],
  newMessageText: ''
}

export const messagesReducer = (state = initialState, action) => {
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
