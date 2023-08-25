import React from 'react';
import './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const Navbar = () => {
  return (
     <aside>
       <nav>
         <ul>
           <li><NavLink to="/profile">Profile</NavLink></li>
           <li><NavLink to="/dialogs">Messages</NavLink></li>
           <li><NavLink to="/news">News</NavLink></li>
           <li><NavLink to="/music">Music</NavLink></li>
         </ul>
       </nav>
       <span>  Settings</span>
     </aside>

  );
};

