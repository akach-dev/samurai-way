import {authApi} from "../api/usersApi";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
};


export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {id, email, login, isAuth}
})
export const getAuthUserData = () => (dispatch) => {
  authApi.me().then(response => {
    if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  })
}

export const login = (authData) => (dispatch) => {
  return authApi.login(authData).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
    }
  )
}
export const logout = () => (dispatch) => {
  return authApi.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))

      }
    }
  )
}