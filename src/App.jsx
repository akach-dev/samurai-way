import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


function App() {

  return (
    <div className={'wrapper'}>
      <Header/>
      <Navbar/>
      <main>
        <Route render={() => <Profile/>} path='/profile'/>
        <Route render={() => <DialogsContainer/>} path='/dialogs'/>
        <Route render={() => <UsersContainer/>} path='/users'/>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
