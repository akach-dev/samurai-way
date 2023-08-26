import React, {FC} from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogsItemPropsType = {
  name: string
  id: string
}

export const DialogsItem: FC<DialogsItemPropsType> = ({id, name}) => {
  let path = `/dialogs/${id}`

  return (
     <li className={s.dialogsItem}>
       <NavLink to={path}>{name}</NavLink>
     </li>
  )
}