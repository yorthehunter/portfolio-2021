import React from 'react';
import Collage from './Collage';

const About = () => (
  <article className="article-content">
    <h2 className="page-heading">About me</h2>
    <h3>At work</h3>
    <p>I have a history in both product design and product development, which has led me towards working on problems of scaling design, UI, and front end systems. Design systems are a strategic solution to these problems that addresses UI consistency and scope, team comms, front end systems interoperability (via APIs & platform-agnostic UI), best practices and documentation, and other strategies for scaling design teams and development teams.</p>
    <h3>At home</h3>
    <p>I live with my wife, my 3 boys, and a cat in Pittsburgh, PA. I grew up in rural Pennsylvania as the youngest of four kids, my formative years living in a trailer on my grandparents' property. Six people in a trailer can be quite cramped, so I've learned to appreciate <em>space</em>: oceans, beaches, mountains, forests, fields. I collect things based purely on nostalgia-fuel, like old video games, childhood toys, and books.</p>
    <Collage />
  </article>
);

export default About;
