import React from 'react';
import style from './style.module.scss';
import LinkToResume from '../LinkToResume';
import NavLink from './NavLink';

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <li>
        <NavLink to={`/`}>About</NavLink>
      </li>
      <li>
        <NavLink to={`/work`}>Work</NavLink>
      </li>
      <li>
        <LinkToResume />
      </li>
    </ul>
  </nav>
);

export default Nav;
