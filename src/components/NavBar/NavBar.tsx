import React from 'react';
import './NavBar.css'
import {NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <h2>Quotes Central</h2>
          <NavLink to={'/'}> <strong>Quotes</strong></NavLink>
          <NavLink to={'/addForm'}><strong>Submit new quotes</strong></NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;