import React from 'react';
import style from './style.module.scss';

const ModeArticle = () => (
  <article className="article-content">
    <h1 className="page-heading">Highlighted work</h1>
    <h2>Introducing the Mode Design System</h2>
    <h3 className="subtitle">Building a shared experience language at Stitch Fix</h3>
    <blockquote>
      <dl>
        <dt>Mode</dt>
        <dd>1. a way or manner in which something is experienced, expressed, or done.</dd>
        <dd>2. a fashion or style in clothes, art, literature, etc.</dd>
      </dl>
    </blockquote>
    <p><strong>Mode</strong> is the name of the design system that supports our digital product at Stitch Fix. The definition of design system can sometimes be vague, but a suitable definition comes from the Design Systems Handbook¹: a design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.</p>
    <p>The <strong>Mode Design System</strong> was created to support higher quality digital products that are compelling, consistent, and inclusive for everybody. The Stitch Fix client experience is the heart of this goal, but the design system is used and informed by product teams who create these wonderful digital products.</p>
    <p>It's been my privilege to help create, kick off, and grow the Stitch Fix design system over the past year.</p>
    <h3>A Brief History</h3>
    <p>The design system was an idea in the making for years before the true <em>problem to solve</em> coalesced and before we were given the runway to make it a major strategic initiative. Eventually, with the support of leadership, we were able to form a new team called the Design Platform team. Design Platform would focus on scaling the design of enterprise products by providing product teams with systemic guidance, tooling, automation, and process improvements. The design system would be our primary product.</p>
    <h3>So What Problem Are We Trying to Solve?</h3>
    <p><em>How will we continue to design and build consistent, engaging products at scale?</em></p>
    <blockquote>You could outline our org chart in the inconsistencies between product experiences.</blockquote>
    <p>Over time, our customer experience had become fractured. There were unintended, yet noticeable, differences between interface and interaction design depending on what part of Stitch Fix you were experiencing. You could essentially outline our product org chart in the inconsistencies between product experiences. Systemic changes needed to happen to the ways our teams designed and built product.</p>
    <p>It was an ambitious goal that couldn't be solved by any single framework or library. What we were actually talking about was fundamentally changing how our product teams communicated about design. If we could set up the foundation for standards and practices, communication, and feedback, we could develop the experience language of Stitch Fix.</p>
    <p>In one way or another, we had already known for years that we wanted a design system. Maybe we didn't know what to call it or what to build, but we had been collecting the evidence for a long time in the forms of tech debt, inconsistent UX, and knowledge silos² between teams. These barriers would surface as low quality UI, inconsistent design and code, and inaccessible digital content.</p>
    <blockquote>Without a design system, the system designs itself.</blockquote>
  </article>
);

export default ModeArticle;
