import React from 'react';
import './App.css';
import img from '../src/assets/img/img.webp'

function App() {
  return (
     <div className={'wrapper'}>
       <header>header</header>
       <aside>
         <nav>
           <ul>
             <li>Profile</li>
             <li>Messages</li>
             <li>News</li>
             <li>Music</li>
           </ul>
         </nav>
         <span>Settings</span>
       </aside>
       <main>
         <img
            className={'img'}
            src={img} alt=""/>
       </main>
       <footer>footer</footer>
     </div>
  );
}

export default App;
