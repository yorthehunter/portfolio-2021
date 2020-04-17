import React from 'react';
import style from './style.module.scss';

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <li>
        <a href="#About">About</a>
      </li>
      <li>
        <a href="#Work">Work</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
