import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType, StoreType} from "./redux/store";

type AppPropsType = {
  store: StoreType
  state: StateType
}


function App({state, store}: AppPropsType) {
  return (
     <div className={'wrapper'}>
       <Header/>
       <Navbar/>
       <main>
         <Route render={() =>
            <Profile
               dispatch={store.dispatch.bind(store)}
               profilePage={state.profilePage}/>} path='/profile'/>
         <Route render={() => <Dialogs
            dispatch={store.dispatch.bind(store)}
            data={state.messagesPage}/>} path='/dialogs'/>
       </main>
       <footer>footer</footer>
     </div>
  );
}

export default App;
