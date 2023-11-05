import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";


function App() {

  return (
    <div className={'wrapper'}>
      <HeaderContainer/>
      <Navbar/>
      <main>
        <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
        <Route render={() => <DialogsContainer/>} path='/dialogs'/>
        <Route render={() => <UsersContainer/>} path='/users'/>
        <Route render={() => <Login/>} path='/login'/>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
