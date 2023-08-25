import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";

function App() {
  return (
     <div className={'wrapper'}>
       <Header/>
       <Navbar/>
       <main>
         <Profile/>
         <Dialogs/>
       </main>
       <footer>footer</footer>
     </div>
  );
}

export default App;
