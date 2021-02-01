import { Link } from '@reach/router'
import React from 'react'
import style from './style.module.scss';

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent && style.active,
      }
    }}
  />
);

export default NavLink
