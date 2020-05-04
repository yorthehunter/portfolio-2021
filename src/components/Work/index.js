import React from 'react';
import { Link } from '@reach/router';
import style from './style.module.scss';

const basePath = process.env.PUBLIC_URL;

const Work = () => (
  <article className="article-content">
    <h2 className="page-heading">Work Highlights</h2>
    <section className={style.highlight}>
      <h3>Mode Design System</h3>
      <p>The Mode Design System is a set of tools, automation, guidelines, and more that enables consistent and scalable UI at Stitch Fix. Mode is my most ambitious and influencial product at Stitch Fix, currently supporting the entire customer-facing experience and those product teams. The current steps in motion are to apply the design system to expert use (internal) tools at Stitch Fix, too.</p>
      <p><Link to={`${basePath}/work/mode`}>Read my article about creating Mode »</Link></p>
      <h4>Highlights</h4>
      <ul>
        <li>Created a new team at Stitch Fix called the <strong>Design Platform</strong> team, responsible for scaling products by providing product teams with systemic guidance, tooling, automation, and process improvements</li>
        <li>Created a strategy and delivering a design system for customer-facing applications at Stitch Fix</li>
        <li>Designed and helped build a style system: Sass mixins + variables as a single-source code repository for Stitch Fix UI</li>
        <li>Created a system for employing design token (individual units of design) in order to create a simpler, design-led process for managing cross-platform UI</li>
        <li>Mode is currently employed by 8+ teams (~80 engineers)</li>
        <li>Recently scoped to expand to expert-use / internal tools (initially 3+ teams, potentially several more)</li>
      </ul>
    </section>
    <section className={style.highlight}>
      <h3>Weave UI framework</h3>
      <p>Weave is a UI framework consisting of a Sketch library (ported to Figma), a UI CSS kit, and a React library that enables rapid UI creation for internal / expert-use products at Stitch Fix.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Developed to empower engineers to more rapidly create UI</li>
        <li>Modern CSS</li>
        <li>A React library that helped set UI standards for my team</li>
        <li>I was the first "front end engineer" at Stitch Fix, helping us begin a process of specialization and platformization of front end and design</li>
      </ul>
    </section>
    <section className={style.highlight}>
      <h3>Gozer: a modern and customized picking application</h3>
      <p>Gozer is the web app that enabled pickers in Stitch Fix warehouses to scale up from picking one Fix (5 items) to 6+ Fixes on a single algorithmically-optimized path.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Responsible for the design of the UI as well as the physical pick cart</li>
        <li>Employed guerilla-style user testing, using a head-mounted GoPro to "experience" several users' picking perspectives</li>
        <li>Led a design team of two while mentoring an excellent junior designer</li>
      </ul>
    </section>
    <section className={style.highlight}>
      <h3>Redesigning returns management</h3>
      <p>The returns manager is a UI responsible for enabling warehouse associates to process returns as accurately and as fast as possible. Processing returns is very physical, so this project involved a redesign of a physical space as well as a digital space.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Hands-on user testing, involving prototyping a physical redesign of a space</li>
        <li>My second version of returns management at Stitch Fix; my first was the very first UI for returns processing</li>
      </ul>
    </section>
  </article>
);

export default Work;
