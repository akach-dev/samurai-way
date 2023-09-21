import {PostDataType} from "../components/profile/myPosts/MyPosts";
import {DialogsItemPropsType} from "../components/dialogs/dialogsItem/DialogsItem";
import {MessagesDataType} from "../components/dialogs/Dialogs";


export type ProfilePageType = {
  posts: PostDataType[]
}
export type MessagesPageType = {
  messages: MessagesDataType[]
  dialogs: DialogsItemPropsType[]
}

export type StateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
}


export const state: StateType = {
  profilePage: {
    posts: [
      {message: 'Hi, how are you?', id: '1', likesCount: 12},
      {message: "It's my first post", id: '2', likesCount: 15},
      {message: "Blab-la", id: '3', likesCount: 18},
      {message: "Dada", id: '4', likesCount: 11},
    ],

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
}

export const addPost = (text: string) => {
  const newPost: PostDataType = {
    id: '5', message: text, likesCount: 0
  }
  state.profilePage.posts.push(newPost)
}

