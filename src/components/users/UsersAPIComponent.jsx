import {Component} from "react";
import axios from "axios";
import {Users} from "./Users";

export class UsersAPIComponent extends Component {

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

    const {
      pageSize, totalCount, usersPage, currentPage, follow, unfollow
    } = this.props

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
