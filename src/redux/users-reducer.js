const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false
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

    default:
      return state
  }
};

export const follow = (userID) => {
  return {type: FOLLOW, userID}
}
export const unfollow = (userID) => {
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
