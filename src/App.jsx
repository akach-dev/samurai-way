import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";


function App({state, dispatch}) {
  
  return (
    <div className={'wrapper'}>
      <Header/>
      <Navbar/>
      <main>
        <Route render={() =>
          <Profile
            dispatch={dispatch}
            profilePage={state.profilePage}/>} path='/profile'/>
        <Route render={() => <Dialogs
          dispatch={dispatch}
          data={state.messagesPage}/>} path='/dialogs'/>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
