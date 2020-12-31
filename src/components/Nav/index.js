import React from 'react';
import style from './style.module.scss';
import { Link } from "@reach/router";

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <li>
        <Link to={`/`}>About</Link>
      </li>
      <li>
        <Link to={`/work`}>Work</Link>
      </li>
      <li>
        <Link to={`/resume`}>Resume</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
