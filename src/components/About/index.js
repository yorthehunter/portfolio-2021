import React from 'react';
import Collage from './Collage';
import style from './style.module.scss';
import { ReactComponent as Design } from '../../icon/cup.svg';
import { ReactComponent as WebDesign } from '../../icon/web-design.svg';
import { ReactComponent as ProductTeam } from '../../icon/lightbulb.svg';
import { ReactComponent as Remote } from '../../icon/world.svg';

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
      My quest has been to design, develop, and evangelize design systems and design ops, even before those terms became an industry commonplace. All of my product experience has been in the service of helping teams and companies achieve design scale rapidly and effectively.
    </p>
    <p>
      I have particularly fond memories of the early days of rapid growth at Stitch Fix, where I helped us grow from a
      startup with fewer than 40 employees into a publicly traded company of &gt; 6000 and from approximately 40k shipments to <em>over 60 million</em>.
    </p>
    <Collage />
  </article>
);

export default About;
