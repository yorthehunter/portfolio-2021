import React from 'react';
import style from './style.module.scss';

const Figure = ({ imgSrc, caption, alt }) => (
  <figure className={style.figure}>
    <img src={imgSrc} alt={alt ? alt : caption} />
    { caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export default Figure;
