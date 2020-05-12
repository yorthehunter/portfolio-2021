import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const Lightbox = ({ src, srcSet, zoomedImg, alt, ...otherProps }) => {
  const [lightboxOpen, openBox] = useState(false);

  return (
    <div>
      {
        lightboxOpen &&
        <div className={style.zoomedImage} onClick={() => openBox(false)}>
          <img src={zoomedImg || src} alt={alt} />
        </div>
      }
      <button className={style.image} onClick={() => openBox(!lightboxOpen)}>
        <picture>
          <source media="(max-width: 560px)" srcSet={srcSet} />
          <img src={src} alt={alt} {...otherProps} />
        </picture>
      </button>
    </div>
  )
}

Lightbox.defaultProps = {
  srcSet: null,
  zoomedImg: null,
}

Lightbox.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  zoomedImg: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

export default Lightbox;
