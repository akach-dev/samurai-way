import React from 'react';
import './Navbar.module.css';


export const Navbar = () => {
  return (
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

  );
};

