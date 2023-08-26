import React, {FC} from "react";
import s from "../Dialogs.module.css";
import {MessagePropsType} from "../Dialogs";

export const Message: FC<MessagePropsType> = ({message}) => {
  return (
     <li className={s.messagesItem}>{message}</li>
  )
}