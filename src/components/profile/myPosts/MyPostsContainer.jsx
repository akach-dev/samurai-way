import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/store";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostAC())
    },
    updatePostText(text) {
      dispatch(updateNewPostTextAC(text))
    }
  }
}


export const MyPostsContainer =
  connect(mapStateToProps, mapDispatchToProps)(MyPosts)
