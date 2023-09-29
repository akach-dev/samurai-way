import {AddPostAC, ProfilePageType, UpdateNewPostTextAC} from "./store";
import {PostDataType} from "../components/profile/myPosts/MyPosts";

type ActionType = AddPostAC | UpdateNewPostTextAC
export const profileReducer = (state: ProfilePageType, action: ActionType) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: PostDataType = {
        id: '5', message: state.newPostText, likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return

    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.text
      return

    default:
      return state
  }
};
