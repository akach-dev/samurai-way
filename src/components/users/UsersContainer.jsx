import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollow
} from "../../redux/users-reducer";
import {Component} from "react";
import axios from "axios";
import {Users} from "./Users";
import {PreLoader} from "../common/PreLoader";
import {usersApi} from "../../api/usersApi";


class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalCount(data.totalCount / 300)
      })
  }

  onChangePage = (page) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
      withCredentials: true, headers: {
        'API-KEY': '6ff77210-e71e-46ba-98fd-7bb7e9655f9e'
      }
    }).then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
    })
  }

  render() {

    const {
      pageSize,
      totalCount,
      usersPage,
      currentPage,
      follow,
      unfollow,
      isFetching,
      toggleFollowingProgress,
      followingInProgress
    } = this.props

    return <>
      {isFetching ? <PreLoader/> : null}
      <Users
        usersPage={usersPage}
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        follow={follow}
        onChangePage={this.onChangePage}
        unfollow={unfollow}
        toggleFollowingProgress={toggleFollowingProgress}
        followingInProgress={followingInProgress}
      />
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}


export default connect(
  mapStateToProps,
  {
    follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingProgress
  })(UsersContainer)

