import React, {FC} from 'react';

type  PostPropsType = {
  message: string
  id: string
  likesCount: number
}

export const Post: FC<PostPropsType> = ({message, id, likesCount}) => {
  return (
     <div>Post</div>
  );
};


