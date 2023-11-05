import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import {Component} from "react";
import {Users} from "./Users";
import {PreLoader} from "../common/PreLoader";


class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onChangePage = (page) => {
    this.props.getUsers(page, this.props.pageSize)
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
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
  })(UsersContainer)

