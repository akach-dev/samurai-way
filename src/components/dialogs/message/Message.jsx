import React from "react";
import s from "../Dialogs.module.css";


export const Message = ({message}) => {
  return (
    <li className={s.messagesItem}>{message}</li>
  )
}