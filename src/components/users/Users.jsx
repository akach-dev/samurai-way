import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/account-avatar-profile-user.svg";
import {NavLink} from "react-router-dom";

export const Users = ({
                        usersPage,
                        currentPage,
                        pageSize,
                        onChangePage,
                        unfollow,
                        follow,
                        totalCount,
                        followingInProgress
                      }) => {

  let pagesCount = Math.ceil(totalCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
      </div>
      <div>
        {
          pages.map(page => {
            return <span
              className={currentPage === page ? s.pageCount + ' ' + s.selected + '' : s.pageCount}
              key={page}
              onClick={() => {
                onChangePage(page)
              }
              }
            >
                {page}</span>
          })
        }
      </div>
      {
        usersPage.users.map(user => {
          return <div key={user.id}>
            <div>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                       alt="user logo"/>
                </NavLink>
              </div>
              <div>
                {!user.followed ? (
                  <button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => follow(user.id)}>
                    Follow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => unfollow(user.id)}>
                    Unfollows
                  </button>
                )
                }
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
