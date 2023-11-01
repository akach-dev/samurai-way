const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    {message: 'Hi, how are you?', id: '1', likesCount: 12},
    {message: "It's my first post", id: '2', likesCount: 15},
    {message: "Blab-la", id: '3', likesCount: 18},
    {message: "Dada", id: '4', likesCount: 11},
  ],
  newPostText: 'it-incubator',
  profile: null
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: '5', message: state.newPostText, likesCount: 0
      }
      return {...state, posts: [...state.posts, newPost], newPostText: ''}
    case "UPDATE-NEW-POST-TEXT":
      return {...state, newPostText: action.text}

    case SET_USER_PROFILE :
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state
  }
};

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})