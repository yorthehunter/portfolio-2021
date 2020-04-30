import React from 'react';
import family1 from './family-1.jpg';
import family2 from './family-2.jpg';
import family3 from './family-3.jpg';
import family1sm from './family-1-sm.jpg';
import family2sm from './family-2-sm.jpg';
import family3sm from './family-3-sm.jpg';
import style from './style.module.scss';

const Collage = ({ caption }) => (
  <figure className={style.figure}>
    <picture>
      <source media="(max-width: 560px)" srcset={`${family1sm} 380w`} />
      <img src={family1} alt="Jax and I" />
    </picture>
    <picture>
      <source media="(max-width: 560px)" srcset={`${family2sm} 380w`} />
      <img src={family2} alt="Ezra and Avi" />
    </picture>
    <picture>
      <source media="(max-width: 560px)" srcset={`${family3sm} 380w`} />
      <img src={family3} alt="Anna, Ezra, Jax" />
    </picture>
    { caption && <figcaption>{caption}</figcaption> }
  </figure>
);

export default Collage;
