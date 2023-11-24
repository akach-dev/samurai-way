import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostAC} from "../../../redux/store";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    addPost(newPostText) {
      dispatch(addPostAC(newPostText))
    }
  }
}


export const MyPostsContainer =
  connect(mapStateToProps, mapDispatchToProps)(MyPosts)
