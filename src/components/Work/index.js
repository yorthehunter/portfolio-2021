import React from 'react';
import { Link } from '@reach/router';
import style from './style.module.scss';
import modeImg from './mode-2.png';
import modeImg2 from './mode-3.png';
import weaveImg from './weave-1.png';
import gozerImg from './gozer-2.png';
import returnsImg from './returns-1.jpg';
import Figure from '../Figure';


const Work = () => (
  <article className="article-content">
    <h2 className="page-heading">Work Highlights</h2>
    <section className={style.highlight}>
      <h3>Mode Design System</h3>
      <p>The Mode Design System is a set of tools, automation, guidelines, and more that enables consistent and scalable UI at Stitch Fix. Mode is my most ambitious and influential product at Stitch Fix, currently supporting the entire customer-facing experience and those product teams. We are currently in the process of applying the design system to expert use (internal) tools at Stitch Fix, too.</p>
      <p><Link to={`/work/mode`}>Read my article about creating Mode »</Link></p>
      <h4>Highlights</h4>
      <ul>
        <li>Created a new team at Stitch Fix called the <strong>Design Platform</strong> team, responsible for scaling products by providing product teams with systemic guidance, tooling, automation, and process improvements</li>
        <li>Created a strategy and delivering a design system for customer-facing applications at Stitch Fix</li>
        <li>Designed and helped build a style system: Sass mixins + variables as a single-source code repository for Stitch Fix UI</li>
        <li>Created a system for employing design token (individual units of design) in order to create a simpler, design-led process for managing cross-platform UI</li>
        <li>Mode is currently employed by 8+ teams (~80 engineers and managers, 8+ PMs, 12 designers)</li>
        <li>Recently scoped to expand to expert-use / internal tools (initially 3+ teams, potentially several more)</li>
      </ul>
      <p>
        <Figure asLightbox imgSrc={modeImg} caption="A screen shot of the Mode style system documentation site" />
        <Figure asLightbox imgSrc={modeImg2} caption="A screen shot of the Mode Figma library" />
      </p>
    </section>
    <section className={style.highlight}>
      <h3>Weave UI framework</h3>
      <p>Weave is a UI framework consisting of a Sketch library (ported to Figma), a UI CSS kit, and a React library that enables rapid UI creation for internal / expert-use products at Stitch Fix.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Developed to empower engineers to more rapidly create UI</li>
        <li>A variable-based simple and functional design system for constraining UI options and easing development</li>
        <li>A UI React library with full test coverage</li>
        <li>Helped create standards for front end code on my team</li>
        <li>I was the first front end engineer at Stitch Fix, helping us begin a process of specialization and platformization of front end and design</li>
      </ul>
      <p>
        <Figure asLightbox imgSrc={weaveImg} caption="A screen shot of the Weave React library documentation site" />
      </p>
    </section>
    <section className={style.highlight}>
      <h3>Gozer: a modern and customized picking application</h3>
      <p>Gozer is the web app that enabled pickers in Stitch Fix warehouses to scale up from picking one Fix (5 items) to 6+ Fixes on a single algorithmically-optimized path.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Responsible for the design of the UI as well as the physical pick cart</li>
        <li>Employed guerilla-style user testing, using a head-mounted GoPro to "experience" several users' picking perspectives, paper prototypes, more</li>
        <li>Led a design team of two while mentoring an excellent junior designer</li>
        <li>Employed animation and visual hierarchy to accommodate a variety of users and conditions (low light, tall user, walking with a chrome book, etc)</li>
      </ul>
      <p>
        <Figure asLightbox imgSrc={gozerImg} caption="Final design from the Gozer picking app" />
      </p>
    </section>
    <section className={style.highlight}>
      <h3>Redesigning returns management</h3>
      <p>The returns manager is a UI responsible for enabling warehouse associates to process returns as accurately and as fast as possible. Processing returns is very physical, so this project involved a redesign of a physical space as well as a digital space.</p>
      <h4>Highlights</h4>
      <ul>
        <li>Hands-on user testing, involving prototyping a physical redesign of a space</li>
        <li>Involved testing the hand scanner, too, so I set up a "recreation" of a returns space in my home office</li>
        <li>My second version of returns management at Stitch Fix; my first was the very first UI for returns processing</li>
      </ul>
      <p>
        <Figure asLightbox imgSrc={returnsImg} caption="Final design from the Returns v2 app" />
      </p>
    </section>
  </article>
);

export default Work;
