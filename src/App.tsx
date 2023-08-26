import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
  state: StateType
}

function App({state}: AppPropsType) {
  return (
     <div className={'wrapper'}>
       <Header/>
       <Navbar/>
       <main>
         <Route render={() => <Profile data={state.profilePage}/>} path='/profile'/>
         <Route render={() => <Dialogs data={state.messagesPage}/>}
                path='/dialogs'/>
       </main>
       <footer>footer</footer>
     </div>
  );
}

export default App;
