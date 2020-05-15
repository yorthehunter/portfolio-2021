import React from 'react';
import PropTypes from 'prop-types';
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

Figure.defaultProps = {
  caption: null,
  asLightbox: false,
}
Figure.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  caption: PropTypes.string,
  alt: PropTypes.string.isRequired,
  asLightbox: PropTypes.bool,
}
export default Figure;
