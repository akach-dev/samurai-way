const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: []
  // [
  //   {
  //     status: 'boss',
  //     followed: true,
  //     fullName: 'Alex', id: '1', location: {
  //       city: 'Minsk',
  //       country: 'Belarus'
  //     }
  //   },
  //   {
  //     status: 'boss',
  //
  //     followed: false,
  //     fullName: "Oksana", id: '2', location: {
  //       city: 'Minsk',
  //       country: 'Belarus'
  //     }
  //   },
  //   {
  //     followed: false,
  //     status: 'boss',
  //
  //     fullName: "Max",
  //     id: '3',
  //     location: {
  //       city: 'Minsk',
  //       country: 'Belarus'
  //     }
  //   },
  //   {
  //     followed: true,
  //     status: 'boss',
  //
  //     fullName: "Misha", id: '4', location: {
  //       city: 'Kiev',
  //       country: 'Ukraine'
  //     }
  //   },
  // ],
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
      return {...state, users: [...state.users, ...action.users]}

    default:
      return state
  }
};

export const followAC = (userID) => {
  return {type: FOLLOW, userID}
}
export const unfollowAC = (userID) => {
  return {type: UNFOLLOW, userID}
}
export const setUsersAC = (users) => {
  return {type: SET_USERS, users}
}
