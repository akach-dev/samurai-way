import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";

function App() {
  return (
     <div className={'wrapper'}>
       <Header/>
       <Navbar/>
       <main>
         <Profile/>
       </main>
       <footer>footer</footer>
     </div>
  );
}

export default App;
