import {usersApi} from "../api/usersApi";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW :
      return {
        ...state, users: state.users.map(user =>
          user.id === action.userID ? {...user, followed: true} : user
        )
      }
    case UNFOLLOW:
      return {
        ...state, users: state.users.map(user =>
          user.id === action.userID ? {...user, followed: false} : user
        )
      }
    case SET_USERS :
      return {...state, users: [...action.users]}
    case SET_CURRENT_PAGE :
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_COUNT :
      return {...state, totalCount: action.totalCount}
    case TOGGLE_IS_FETCHING :
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS :
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(user => user !== action.id)
      }
    default:
      return state
  }
};

// actions creator
export const confirmFollow = (userID) => {
  return {type: FOLLOW, userID}
}
export const confirmUnfollow = (userID) => {
  return {type: UNFOLLOW, userID}
}
export const setUsers = (users) => {
  return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalCount = (totalCount) => {
  return {type: SET_TOTAL_COUNT, totalCount}
}
export const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const toggleFollowingProgress = (followingInProgress, id) => {
  return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, id}
}

// thunks creator
export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true))
  usersApi.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalCount(data.totalCount / 300))
    })
}
export const follow = (userID) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userID))
  usersApi.follow(userID)
    .then(data => {
      if (data.resultCode === 0) dispatch(confirmFollow(userID))
      dispatch(toggleFollowingProgress(false, userID))
    })
}
export const unfollow = (userID) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userID))
  usersApi.unfollow(userID)
    .then(data => {
      if (data.resultCode === 0) dispatch(confirmUnfollow(userID))
      dispatch(toggleFollowingProgress(false, userID))
    })
}
