import React from 'react';
import style from './style.module.scss';
import { Link } from "@reach/router";
import LinkToResume from '../LinkToResume';

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
        <LinkToResume />
      </li>
    </ul>
  </nav>
);

export default Nav;
