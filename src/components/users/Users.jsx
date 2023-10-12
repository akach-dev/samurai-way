import s from "./Users.module.css"

export const Users = (props) => {

  if (!props.usersPage.users.length) {
    props.setUsers([
      {
        status: 'boss',
        followed: true,
        fullName: 'Alex', id: '1', location: {
          city: 'Minsk',
          country: 'Belarus'
        }
      },
      {
        status: 'boss',

        followed: false,
        fullName: "Oksana", id: '2', location: {
          city: 'Minsk',
          country: 'Belarus'
        }
      },
      {
        followed: false,
        status: 'boss',

        fullName: "Max",
        id: '3',
        location: {
          city: 'Minsk',
          country: 'Belarus'
        }
      },
      {
        followed: true,
        status: 'boss',

        fullName: "Misha", id: '4', location: {
          city: 'Kiev',
          country: 'Ukraine'
        }
      },
    ])
  }


  return (
    <div>
      {
        props.usersPage.users.map(user => {
          return <div key={user.id}>
            <div>
              <div><img className={s.userPhoto} src="" alt="user logo"/></div>
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
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </div>
              <div>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  );
};
