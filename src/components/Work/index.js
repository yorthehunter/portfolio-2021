import React from 'react';
import style from './style.module.scss';
import Figure from '../Figure';
import { workExamples } from './work';


import modeImg4 from './mode-4.png';
import modeImg5 from './mode-5.png';
import modeImg6 from './mode-6.png';
import modeImg7 from './mode-7.png';
import modeImg8 from './mode-8.png';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

export const ModeExtraImages = () => (
  <Disclosure>
    <DisclosureButton>
      <a>See more screenshots from the Mode Design System</a>
    </DisclosureButton>
    <DisclosurePanel>
      <Figure asLightbox imgSrc={modeImg4}
        caption="Naming conventions help unify communication between tools"
      />
      <br />
      <br />
      <Figure asLightbox imgSrc={modeImg5}
        caption="Expanding the Mode Figma libraries"
      />
      <br />
      <br />
      <Figure asLightbox imgSrc={modeImg6}
        caption="Mode React library uses Storybook for visual and interaction testing, as well as related documentation"
      />
      <br />
      <br />
      <Figure asLightbox imgSrc={modeImg7}
        caption="Mode Style System documentation site"
      />
      <br />
      <br />
      <Figure asLightbox imgSrc={modeImg8}
        caption="Buttons are part of the Mode Patterns library: more complex combinations of Notions (atomic design elements)"
      />
    </DisclosurePanel>
  </Disclosure>
);

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
          {
            example.extraInfo &&
            <p>
              <ModeExtraImages />
            </p>
          }
        </section>
      ))
    }
  </article>
);

export default Work;
