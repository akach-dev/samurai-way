import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
})

export let store = createStore(rootReducer)