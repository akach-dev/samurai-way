import s from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../assets/img/account-avatar-profile-user.svg'
import {Component} from "react";

export class Users extends Component {
  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }


  render() {
    const {usersPage, follow, unfollow} = this.props


    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
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
