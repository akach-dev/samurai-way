import s from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../assets/img/account-avatar-profile-user.svg'

export const Users = (props) => {
  if (!props.usersPage.users.length) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })

  }

  return (
    <div>
      {
        props.usersPage.users.map(user => {
          return <div key={user.id}>
            <div>
              <div><img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                        alt="user logo"/></div>
              <div>
                <button onClick={() => {
                  !user.followed
                    ? props.follow(user.id)
                    : props.unfollow(user.id)
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
};
