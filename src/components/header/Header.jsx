import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


export const Header = ({isAuth, login}) => {
  return (
    <header className={s.header}>
      header
      <div>
        {
          isAuth ? login : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>

  );
};



