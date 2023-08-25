import React from 'react';
import './Navbar.module.css';


export const Navbar = () => {
  return (
     <aside>
       <nav>
         <ul>
           <li><a href="/profile">Profile</a></li>
           <li><a href="/messages">Messages</a></li>
           <li><a href="/news">News</a></li>
           <li><a href="/music">Music</a></li>
         </ul>
       </nav>
       <span>  Settings</span>
     </aside>

  );
};

