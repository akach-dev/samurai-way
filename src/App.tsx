import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
  return (
     <div className={'wrapper'}>
       <Header/>
       <Navbar/>
       <main>
         <Route component={Profile} path='/profile'/>
         <Route component={Dialogs} path='/dialogs'/>
       </main>
       <footer>footer</footer>
     </div>
  );
}

export default App;
