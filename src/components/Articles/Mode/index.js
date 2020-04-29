import React from 'react';
import style from './style.module.scss';

const ModeArticle = () => (
  <article className="article-content">
    <h2 className={style.pageHeading}>Highlighted work</h2>
    <h3>Introducing the Mode Design System</h3>
    <h4 className="subtitle">Building a shared experience language at Stitch Fix</h4>
    <blockquote>
      <dl>
        <dt>Mode</dt>
        <dd>1. a way or manner in which something is experienced, expressed, or done.</dd>
        <dd>2. a fashion or style in clothes, art, literature, etc.</dd>
      </dl>
    </blockquote>
    <p><strong>Mode</strong> is the name of the design system that supports our digital product at Stitch Fix. The definition of design system can sometimes be vague, but a suitable definition comes from the Design Systems Handbook¹: a design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.</p>
    <p>The <strong>Mode Design System</strong> was created to support higher quality digital products that are compelling, consistent, and inclusive for everybody. The Stitch Fix client experience is the heart of this goal, but the design system is used and informed by product teams who create these wonderful digital products.</p>
  </article>
);

export default ModeArticle;
