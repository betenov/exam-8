import React from 'react';
import './NavMenu.css'
import {NavLink} from "react-router-dom";

const NavMenu = () => {
const titles = [
  {title:'Sapience' , id:'sapience'},
  {title:'Humor' , id:'humor'},
  {title:'Saying' , id:'saying'},
  {title:'Famous people' , id:'famous-people'},
  {title:'Motivational' , id:'motivational'},
]

  return (
    <div className="titles">
      <ul>
        <li>
          <a>
            ALL
          </a>
        </li>
      </ul>
      {titles.map(title => (
        <ul>
          <li>
            <NavLink to={'/qoutes/' + title.id}>{title.title}</NavLink>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default NavMenu;