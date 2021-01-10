import React from 'react';
import style from './style.module.scss';
import gozerImg from './gozer-2.png';
import returnsImg from './returns-1.jpg';
import Figure from '../Figure';
import { workExamples } from './work';

const Work = () => (
  <article className="article-content">
    <h2 className="page-heading">Work Highlights</h2>
    <p>
      I have an extensive background in product design and UI development. My most recent work has been in leading design direction and strategy, with a heavy focus on design systems, design tools and management, and cross-team (brand/marketing, engineering, product, research) frameworks for scaling design.
    </p>
    <section className={style.highlight}>
      <p><em>Some work is proprietary and/or private. Please ask me about current work @ <strong>Anomalie</strong> or any past work.</em></p>
    </section>
    {
      workExamples.map((example, i) => (
        <section className={style.highlight} key={i}>
          <h3>{example.heading}</h3>
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
    <section className={style.highlight}>
      <h3>Gozer: a modern and customized picking application</h3>
      <p>Gozer is the web app that enabled pickers in Stitch Fix warehouses to scale up from picking one Fix (5 items) to 6+ Fixes on a single algorithmically-optimized path.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Responsible for the design of the UI as well as the physical pick cart</li>
        <li>Employed guerilla-style user testing, using a head-mounted GoPro to &quot;experience&quot; several users&apos; picking perspectives, paper prototypes, more</li>
        <li>Led a design team of two while mentoring an excellent junior designer</li>
        <li>Employed animation and visual hierarchy to accommodate a variety of users and conditions (low light, tall user, walking with a chrome book, etc)</li>
      </ul>
      <p>
        <Figure asLightbox imgSrc={gozerImg} caption="Final design from the Gozer picking app" />
      </p>
    </section>
    <section className={style.highlight}>
      <h3>Redesigning returns management</h3>
      <p>The returns manager is a UI responsible for enabling warehouse associates to process returns as accurately and as fast as possible. Processing returns is very physical, so this project involved a redesign of a physical space as well as a digital space.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Hands-on user testing, involving prototyping a physical redesign of a space</li>
        <li>Involved testing the hand scanner, too, so I set up a "recreation" of a returns space in my home office</li>
        <li>My second version of returns management at Stitch Fix; my first was the very first UI for returns processing</li>
      </ul>
      <p>
        <Figure asLightbox imgSrc={returnsImg} caption="Final design from the Returns v2 app" />
      </p>
    </section>
  </article>
);

export default Work;
