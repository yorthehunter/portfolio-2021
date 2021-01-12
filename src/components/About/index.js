import React from 'react';
import Collage from './Collage';
import style from './style.module.scss';
import { ReactComponent as Design } from '../../icon/cup.svg';
import { ReactComponent as WebDesign } from '../../icon/web-design.svg';
import { ReactComponent as ProductTeam } from '../../icon/lightbulb.svg';
import { ReactComponent as Remote } from '../../icon/world.svg';
import LinkToResume from '../LinkToResume';

const About = () => (
  <article className="article-content">
    <h2 className="page-heading">About me</h2>
    <ul className={style.list}>
      <li><Design />14 years of design</li>
      <li><WebDesign />12 years web and digital design</li>
      <li><ProductTeam />10 years on product teams</li>
      <li><Remote />8 years working remotely</li>
    </ul>
    <p>
      <LinkToResume content="View my resume" />
    </p>
    <p>
      My quest has been to design, develop, and evangelize <a href="https://www.designbetter.co/design-systems-handbook/introducing-design-systems">design systems</a> and <a href="https://www.designbetter.co/designops-handbook/introducing-designops">design ops</a>, even before those terms became industry standards. All of my product experience has been in the service of helping teams and companies achieve design scale rapidly, effectively, and beautifully.
    </p>
    {/* <h3 className="">Tools</h3>
    <ul className={style.list}>
      <li>Visual design  |  Figma</li>
      <li>Organization, project documentation, collaborative tracking  |  Confluence, Jira</li>
      <li>Code and team review  |  Git &amp; Github</li>
      <li>Frontend stack  |  React, Typescript, Webpack, Storybook</li>
    </ul> */}
    <p>
      I have an extensive background in product design and UI development. My most recent work has been in design leadership, with a heavy focus on design systems, design tools and management, and cross-team (brand/marketing, engineering, product, research) frameworks for scaling design.
    </p>
    <p>
      I have particularly fond memories of the early days of rapid growth at Stitch Fix, where I helped us grow from a startup with fewer than 40 employees into a publicly traded company of &gt; 6000 and from approximately 40k shipments to <em>over 60 million</em>.
    </p>
    <Collage />
  </article>
);

export default About;
