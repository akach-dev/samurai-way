import React, {FC} from "react";
import s from "../Dialogs.module.css";

export type MessagePropsType = {
  message: string
}

export const Message: FC<MessagePropsType> = ({message}) => {
  return (
     <li className={s.messagesItem}>{message}</li>
  )
}