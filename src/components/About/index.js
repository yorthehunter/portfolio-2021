import React from 'react';
import Collage from './Collage';
import style from './style.module.scss';
import { ReactComponent as Design } from '../../icon/cup.svg';
import { ReactComponent as WebDesign } from '../../icon/web-design.svg';
import { ReactComponent as ProductTeam } from '../../icon/lightbulb.svg';

const About = () => (
  <article className="article-content">
    <h2 className="page-heading">About me</h2>
    <p>
      <ul className={style.list}>
        <li><Design />14 years of design</li>
        <li><WebDesign />12 years in web design &amp; development</li>
        <li><ProductTeam />10 years on product teams</li>
      </ul>
      My history is in both product design and product development, which has led me to do my best work on problems of
      scaling design teams, UI, and front end systems. Design systems are a solution to these problems that addresses UI
      consistency and scope, inter-team communication, front end systems interoperability, best practices and
      documentation, and other strategy for scaling product design.</p>
    <p>I have particularly fond memories of the early days of rapid growth at Stitch Fix, where I helped us grow from a
      startup with fewer than 40 employees into a public company of > 6000 and from ~40k fixes to ~60 million.</p>
    <h3>What is Design Systems Strategy and Development?</h3>
    <h4>Leadership</h4>
    <p>Design systems strategy is leadership at the design platform level. Design platform operates agnostic of a
      particular product in the experience, but rather a slice through all products lifecycles, empowering product teams
      through automation, systemization, and design strategy. It is the tearing down of barriers holding us back from
      excellent product experiences.</p>
    <p>Leading a platform team means creating scalable systems so that products can grow and be iterated on without
      bloating design and tech debt. Leadership is about focusing design and eng teams on solving the right problems and
      inform design direction in order to raise the quality of our products, ship more efficiently, and reduce the costs
      of our code.</p>
    <h4>Partnership</h4>
    <p>Design systems strategy opens up knowledge silos between teams and organizations by connecting product, design,
      and development. Excellent product teams aren't a waterfall of steps-to-launch; they are cooperative, they give
      feedback throughout a product's life, and they iterate with purpose. The healthiest product teams that I've been a
      part of have been connected, communicative, and empathetic. Those teams have been able to <em>define</em> high
      quality product design.</p>
    <h4>Delivery</h4>
    <p>Key deliverables of a design platform team can be anything that makes building product easier and more efficient.
      Libraries of UI, standards and practices documentation, design usage guidelines, component code, CSS frameworks,
      automation, knowledge sharing... all of these things are tools meant to help product design scale.</p>

    <h3>At home</h3>
    <p>I live with my wife, my 3 boys, and a cat in Pittsburgh, PA. I grew up in rural Pennsylvania as the youngest of
      four kids, my formative years living in a trailer on my grandparents' property. Six people in a trailer can be
      quite cramped, so I've learned to appreciate <em>space</em>: oceans, beaches, mountains, forests, fields, a big
      home office. I have a habit of collecting things based purely on nostalgia: retro video games, childhood books,
      laserdiscs, 80s toys... and pretty much anything that stars Arnold Schwarzenegger or Kurt Russell. And thanks to
      my kids, my zen-like hobby is now making Lego sets.</p>
    <Collage />
  </article>
);

export default About;
