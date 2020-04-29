import React from 'react';
import style from './app.module.scss'
import Header from './components/Header';
import ModeArticle from './components/Articles/Mode';
import { Router } from "@reach/router"

const About = () => (
  <article className="article-content">
    <h2 className="page-heading">About me</h2>
    <h3>At work</h3>
    <p>
      Life has taught me how to take worries and break them down into groups of a) things outside of my control, thus de-prioritized and b) smaller, actionable problems to solve.
    </p>
    <p>
      I have a history in both product design and product development, which has led me towards working on problems of scaling design, UI, and front end systems. Design systems are strategic solutions to these problems that address team intercommunications, UI consistency and scope, front end systems interoperability (via APIs and platform-agnostic UI), best practices and documentation, and strategies for scaling design and development teams.
    </p>
    <p>
      I'm most compatible with teams who are facing periods of rapid scale, like Stitch Fix has seen over the past seven years or so.
    </p>
    <h3>At home</h3>
    <p>It's a mad house here.</p>
  </article>
);

const Work = () => (
  <ModeArticle />
);

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className={style.content}>
        <Router>
          <About path="/" />
          <Work path="/work" />
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
