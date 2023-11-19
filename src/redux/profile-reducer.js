import {profilesApi} from "../api/usersApi";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
  posts: [
    {message: 'Hi, how are you?', id: '1', likesCount: 12},
    {message: "It's my first post", id: '2', likesCount: 15},
    {message: "Blab-la", id: '3', likesCount: 18},
    {message: "Dada", id: '4', likesCount: 11},
  ],
  newPostText: 'it-incubator',
  profile: null,
  status: ''
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
    case  SET_USER_STATUS :
      return {
        ...state,
        status: action.status
      }

    default:
      return state
  }
};
// actions creator
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

// thunks creator
export const getUserProfile = (userId) => (dispatch) => {
  profilesApi.getProfile(userId)
    .then(response => dispatch(setUserProfile(response.data)))
}
export const getUserStatus = (userId) => (dispatch) => {
  profilesApi.getStatus(userId)
    .then(response => dispatch(setUserStatus(response.data)))
}
export const updateUserStatus = (status) => (dispatch) => {
  profilesApi.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
}