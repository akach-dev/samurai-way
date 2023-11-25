import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


export const Header = ({isAuth, login, logout}) => {
  return (
    <header className={s.header}>
      header
      <div>
        {
          isAuth ?
            <div>{login} -
              <button onClick={logout}>Log out</button>
            </div> : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>

  );
};



