import React from 'react';
import Collage from './Collage';

const About = () => (
  <article className="article-content">
    <h2 className="page-heading">About me</h2>
    <p>I have a history in both product design and product development, which has led me towards working on problems of scaling design, UI, and front end systems. Design systems are a strategic solution to these problems that addresses UI consistency and scope, inter-team communication, front end systems interoperability (via APIs & platform-agnostic UI), best practices and documentation, and other strategies for scaling product teams.</p>
    <p>I have helped Stitch Fix grow from a startup with fewer than 40 employees into a public company of > 6000; growing from shipping 40k fixes to about 60 million.</p>
    <h3>What is Design Systems Strategy and Development?</h3>
    <h4>Leadership</h4>
    <p>Design systems strategy is leadership at a design platform level. Design platform operates agnostic of a particular product in the experience, but is instead a broad slice through all products lifecycles, empowering product teams through automation, systemization, and scalable design strategy. It is the tearing down of barriers holding us back from excellent product experiences.</p>
    <p>Leading a platform team means creating scalable systems so that all products can continue to grow and evolve while minimizing design and tech debt. Leadership is about identifying the strengths and weaknesses of design and eng teams and using that information to inform design direction. All of this in order to raise the quality of our products, ship products faster and more effectively, while reducing the costs (and size) of code.</p>
    <h4>Partnership</h4>
    <p>Design direction is only part of the story. Design Systems are for people. In a design system, you are creating a community and you're creating the <em>space</em> for that community. Everyone in the org is an owner of the design system and everyone should feel comfortable using, contributing to, and providing feedback on it.</p>
    <p>Design systems strategy opens up knowledge silos between teams and organizations by connecting product, design, and development. Excellent product teams aren't typically a waterfall of steps-to-launch; they are cooperative, they give feedback throughout a product's life, and they iterate with purpose. The healthiest product teams that I've been a part of have been connected, communicative, and empathetic. Those teams have been able to <em>define</em> high quality product design.</p>
    <h4>Delivery</h4>
    <p>Key deliverables of a design platform team can be anything that makes building product easier and more efficient. Libraries of UI, standards and practices documentation, design usage guidelines, component code, CSS frameworks, automation, knowledge sharing... all of these things are tools meant to help design scale.</p>

    <h3>At home</h3>
    <p>I live with my wife, my 3 boys, and a cat in Pittsburgh, PA. I grew up in rural Pennsylvania as the youngest of four kids, my formative years living in a trailer on my grandparents' property. Six people in a trailer can be quite cramped, so I've learned to appreciate <em>space</em>: oceans, beaches, mountains, forests, fields, a big home office. I have a habit of collecting things based purely on nostalgia: retro video games, childhood books, laserdiscs, 80s toys... and pretty much anything that stars Arnold Schwarzenegger or Kurt Russell.</p>
    <Collage />
  </article>
);

export default About;
