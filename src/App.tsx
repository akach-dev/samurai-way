import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType, updateNewPostText} from "./redux/state";

type AppPropsType = {
  state: StateType
  addPost: () => void
  updateNewPostText: (text: string) => void
}


function App({state, addPost}: AppPropsType) {
  return (
     <div className={'wrapper'}>
       <Header/>
       <Navbar/>
       <main>
         <Route render={() => <Profile updateNewPostText={updateNewPostText} addPost={addPost}
                                       profilePage={state.profilePage}/>} path='/profile'/>
         <Route render={() => <Dialogs data={state.messagesPage}/>} path='/dialogs'/>
       </main>
       <footer>footer</footer>
     </div>
  );
}

export default App;
