import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from '../Lightbox';
import family1 from './family-1.jpg';
import family2 from './family-2.jpg';
import family3 from './family-3.jpg';
import family1sm from './family-1-sm.jpg';
import family2sm from './family-2-sm.jpg';
import family3sm from './family-3-sm.jpg';
import style from './style.module.scss';

const Collage = ({ caption }) => (
  <figure className={style.figure}>
    <Lightbox src={family1} alt="Jax and I" srcSet={`${family1sm} 380w`} />
    <Lightbox src={family2} alt="Ezra and Avi" srcSet={`${family2sm} 380w`} />
    <Lightbox src={family3} alt="Anna, Ezra, Jax" srcSet={`${family3sm} 380w`} />
    { caption && <figcaption>{caption}</figcaption> }
  </figure>
);

Collage.defaultProps = {
  caption: null,
}

Collage.propTypes = {
  caption: PropTypes.string,
}

export default Collage;
