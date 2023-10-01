let initialState = {
  posts: [
    {message: 'Hi, how are you?', id: '1', likesCount: 12},
    {message: "It's my first post", id: '2', likesCount: 15},
    {message: "Blab-la", id: '3', likesCount: 18},
    {message: "Dada", id: '4', likesCount: 11},
  ],
  newPostText: 'it-incubator',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: '5', message: state.newPostText, likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state

    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.text
      return state

    default:
      return state
  }
};
