import React from 'react';
import style from './style.module.scss';
import Figure from '../Figure';
import { workExamples } from './work';

const Work = () => (
  <article className="article-content">
    <h2 className="page-heading">Work Highlights</h2>
    <section>
      <p><em>Some work is proprietary and/or private. Please ask me about current work @ <strong>Anomalie</strong> or any past work.</em></p>
    </section>
    {
      workExamples.map((example, i) => (
        <section className={style.highlight} key={i}>
          <h3>{example.heading}</h3>
          {
            example.__html &&
            <p dangerouslySetInnerHTML={{ __html: example.__html }} />
          }
          <p>{example.overview}</p>
          <h4>Highlights</h4>
          <ul>
            {
              example.highlights.map((highlight, ii) => (
                <li key={ii}>{highlight}</li>
              ))
            }
          </ul>
          <p>
            {
              example.images.map((image, iii) => (
                <Figure key={iii} asLightbox imgSrc={image.url} caption={image.caption} />
              ))
            }
          </p>
        </section>
      ))
    }
  </article>
);

export default Work;
