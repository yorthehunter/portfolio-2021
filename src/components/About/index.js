import React from 'react';
import Collage from './Collage';
import style from './style.module.scss';
import { ReactComponent as Design } from '../../icon/cup.svg';
import { ReactComponent as WebDesign } from '../../icon/web-design.svg';
import { ReactComponent as ProductTeam } from '../../icon/lightbulb.svg';

const About = () => (
  <article className="article-content">
    <h2 className="page-heading">About me</h2>
    <ul className={style.list}>
      <li><Design />14 years of design</li>
      <li><WebDesign />12 years web and digital design</li>
      <li><ProductTeam />10 years on product teams</li>
    </ul>
    <p>
      My quest has been to design, develop, and evangelize design systems and design ops, even before those terms became an industry commonplace. All of my product experience has been in the service of helping teams and companies achieve design scale rapidly and effectively.
    </p>
    <p>
      I have particularly fond memories of the early days of rapid growth at Stitch Fix, where I helped us grow from a
      startup with fewer than 40 employees into a public company of &gt; 6000 and from approximately 40k fixes shipped to over 60 million.
    </p>
    <h3>What is Design Systems Strategy and Development?</h3>
    <h4>Leadership</h4>
    <p>
      Design systems strategy is leadership at the design platform level. Design platform operates as a slice through all products lifecycles, empowering product teams through automation, systemization, and design strategy.
    </p>
    <p>
      Leadership in design means creating scalable systems so that products can grow without bloating design and tech debt. It is focusing design and eng teams on solving the right problems and informing design direction in order to raise the quality of our products, ship more efficiently, and reduce the costs of our code.
    </p>
    <h4>Partnership</h4>
    <p>
      I help open knowledge silos between teams and organizations by connecting product, design, and development. Excellent product teams aren&apos;t a waterfall of steps-to-launch. They are cooperative, they give
      feedback throughout a product&apos;s life, and they iterate with purpose. 
    </p>
    <h4>Delivery</h4>
    <p>
      Key deliverables of a design platform team can be anything that makes building product easier and more efficient. Libraries of UI, standards and practices documentation, tooling guidelines, design usage guidelines, component code, CSS frameworks, automation... all of these things are tools meant to help product design scale.
    </p>

    <h3>At home</h3>
    <p>
      I grew up in rural Pennsylvania as the youngest of
      four kids, my formative years living in a trailer on my grandparents&apos; property. Six people in a trailer can be
      quite cramped, so I&apos;ve learned to appreciate <em>space</em>: oceans, beaches, mountains, forests, fields, a big home office, and a full table for my family. I have a habit of collecting things based purely on nostalgia: retro video games, childhood books, laserdiscs, 80s toys...
    </p>
    <Collage />
  </article>
);

export default About;
