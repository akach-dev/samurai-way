import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {usersReducer} from "./users-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer
})

export let store = createStore(rootReducer)

window.store = store