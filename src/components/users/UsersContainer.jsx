import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC} from "../../redux/users-reducer";
import {Component} from "react";
import axios from "axios";
import {Users} from "./Users";

export class UsersContainer extends Component {
  
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalCount(response.data.totalCount / 300)
    })
  }

  onChangePage = (page) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {

    const {pageSize, totalCount, usersPage, currentPage, follow, unfollow} = this.props

    return <Users
      usersPage={usersPage}
      totalCount={totalCount}
      pageSize={pageSize}
      currentPage={currentPage}
      follow={follow}
      onChangePage={this.onChangePage}
      unfollow={unfollow}
    />
  }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

