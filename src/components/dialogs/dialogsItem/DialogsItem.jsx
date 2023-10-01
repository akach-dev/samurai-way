import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


export const DialogsItem = ({id, name}) => {
  let path = `/dialogs/${id}`

  return (
    <li className={s.dialogsItem}>
      <NavLink to={path}>{name}</NavLink>
    </li>
  )
}