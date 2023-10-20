import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow(userID) {
      dispatch(followAC(userID))
    },
    unfollow(userID) {
      dispatch(unfollowAC(userID))
    },
    setUsers(users) {
      dispatch(setUsersAC(users))
    },
    setCurrentPage(currentPage) {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalCount(totalCount) {
      dispatch(setTotalCountAC(totalCount))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

