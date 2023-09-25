import {PostDataType} from "../components/profile/myPosts/MyPosts";
import {DialogsItemPropsType} from "../components/dialogs/dialogsItem/DialogsItem";
import {MessagesDataType} from "../components/dialogs/Dialogs";

export type ProfilePageType = {
  posts: PostDataType[]
  newPostText: string

}
export type MessagesPageType = {
  messages: MessagesDataType[]
  dialogs: DialogsItemPropsType[]
}
export type StateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
}

export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  getState: () => StateType
  _addPost: () => void
  _updateNewPostText: (text: string) => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionType) => void
}

export type AddPostAC = ReturnType<typeof addPostAC>

export type UpdateNewPostTextAC = ReturnType<typeof updateNewPostTextAC>

export type ActionType = AddPostAC | UpdateNewPostTextAC

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {message: 'Hi, how are you?', id: '1', likesCount: 12},
        {message: "It's my first post", id: '2', likesCount: 15},
        {message: "Blab-la", id: '3', likesCount: 18},
        {message: "Dada", id: '4', likesCount: 11},
      ],
      newPostText: 'it-incubator',
    },
    messagesPage: {
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
    }
  },
  _callSubscriber() {
  },

  getState() {
    return this._state
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer
  },

  _addPost() {
    const newPost: PostDataType = {
      id: '5', message: this._state.profilePage.newPostText, likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber()
  },
  _updateNewPostText(text: string) {
    this._state.profilePage.newPostText = text
    this._callSubscriber()

  },

  dispatch(action: ActionType) {
    switch (action.type) {
      case 'ADD-POST' :
        this._addPost()
        break
      case 'UPDATE-NEW-POST-TEXT':
        this._updateNewPostText(action.text)
        break
      default:
        return this._state
    }
  }
}

export const addPostAC = () => {
  return {type: 'ADD-POST'} as const
}
export const updateNewPostTextAC = (text: string) => {
  return {type: 'UPDATE-NEW-POST-TEXT', text} as const
}

