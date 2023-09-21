import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, StateType, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
     <BrowserRouter>
       <App updateNewPostText={updateNewPostText} state={state}
            addPost={addPost}/>
     </BrowserRouter>, document.getElementById('root'));
}
