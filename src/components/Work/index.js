import React from 'react';
import { Link } from '@reach/router';

const basePath = process.env.PUBLIC_URL;

const Work = () => (
  <article className="article-content">
    <h2 className="page-heading">Work Highlights</h2>
    <h3>Mode Design System</h3>
    <p><Link to={`${basePath}/work/mode`}>Read an article about creating Mode »</Link></p>
    <h4>Highlights</h4>
    <ul>
      <li>Created a new team at Stitch Fix called the <strong>Design Platform</strong> team.</li>
      <li>Responsible for creating a strategy and delivering a design system for customer-facing applications at Stitch Fix</li>
    </ul>
  </article>
);

export default Work;
