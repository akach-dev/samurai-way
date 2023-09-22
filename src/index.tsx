import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

export const rerenderEntireTree = () => {
  ReactDOM.render(
     <BrowserRouter>
       <App updateNewPostText={store.updateNewPostText.bind(store)} state={store.getState()}
            addPost={store.addPost.bind(store)}/>
     </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)