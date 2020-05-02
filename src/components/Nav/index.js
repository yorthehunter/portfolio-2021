import React from 'react';
import style from './style.module.scss';
import { Link } from "@reach/router";

const basePath = process.env.PUBLIC_URL;

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <li>
        <Link to={`${basePath}/`}>Home</Link>
      </li>
      <li>
        <Link to={`${basePath}/about`}>About</Link>
      </li>
      <li>
        <Link to={`${basePath}/work`}>Work</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
