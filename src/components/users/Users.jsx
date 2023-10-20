import s from "./Users.module.css"
import userPhoto from '../../assets/img/account-avatar-profile-user.svg'
import {Component} from "react";
import axios from "axios";

export class Users extends Component {

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

    const {usersPage, follow, unfollow, pageSize, totalCount, currentPage} = this.props
    const {onChangePage} = this

    let pagesCount = Math.ceil(totalCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    console.log(pages)

    return (
      <div>
        <div>
          {
            pages.map(page => {
              return <span
                className={currentPage === page ? s.pageCount + ' ' + s.selected + '' : s.pageCount}
                key={page}
                onClick={() => onChangePage(page)}
              >
                {page}</span>
            })
          }
        </div>
        {
          usersPage.users.map(user => {
            return <div key={user.id}>
              <div>
                <div><img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                          alt="user logo"/></div>
                <div>
                  <button onClick={() => {
                    !user.followed
                      ? follow(user.id)
                      : unfollow(user.id)
                  }}>{user.followed
                    ? 'Follow'
                    : 'Unfollow'}</button>
                </div>
              </div>
              <div>
                <div>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </div>
                <div>
                  <div>{'user.location.country'}</div>
                  <div>{'user.location.city'}</div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    );
  }
}
