import React from 'react';
import Lightbox from '../Lightbox';
import style from './style.module.scss';

const Figure = ({ imgSrc, caption, alt, asLightbox }) => {
  const Tag = asLightbox ? Lightbox : 'img';

  return (
    <figure className={style.figure}>
      <Tag src={imgSrc} alt={alt ? alt : caption} />
      { caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default Figure;
