import React from 'react';
import style from './app.module.scss'
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Test from './components/Test';
import ModeArticle from './components/Articles/ModeFromMedium ';
import { Router } from "@reach/router"

const Home = () => (
  <article className="article-content">
    <h2 className="page-heading">What is Design Systems Strategy and Development?</h2>
    <h3>Leadership</h3>
    <p>Design systems strategy is leadership at a design platform level. A design platform team is one that operates agnostic of a particular product in the experience, but is instead a broad slice through the entire product lifecycle, empowering product teams through automation, systemization, and scalable design strategy. It is the tearing down of barriers holding us back from excellent product experiences.</p>
    <p>Leading a platform team means creating scalable product systems so that all products can continue to grow and evolve while minimizing design and tech debt. Design leadership is about identifying the strengths and weaknesses of design and eng teams and using that information to inform design direction. All of this in order to raise the quality of your products, ship products faster and more effectively, while reducing code costs.</p>
    <h3>Partnership</h3>
    <p>Design direction is only part of the story. Design Systems are for people. In a design system, you are creating a community and you're creating the <em>space</em> for that community. Everyone in the org is an owner of the design system and everyone should feel comfortable using, contributing to, and providing feedback on it.</p>
    <p>Design systems strategy opens up knowledge silos between teams and organizations by connecting product, design, and development. Excellent product teams aren't typically a waterfall of steps-to-launch, they are cooperative, they give feedback throughout a product's life, and they iterate with purpose. The healthiest product teams that I've been a part of have been connected, communicative, and empathetic. Those teams have been able to <em>define</em> high quality product design.</p>
    <h3>Delivery</h3>
    <p>Key deliverables of a design platform team can be anything that makes building product easier and more efficient. Libraries of UI, standards and practices documentation, design usage guidelines, component code, CSS frameworks, automation, knowledge sharing... all of these things are tools meant to help design scale.</p>
  </article>
);

// const Work = () => (
//   <ModeArticle />
// );

function App() {
  const basePath = process.env.PUBLIC_URL;

  return (
    <React.Fragment>
      <Header />
      <main className={style.content}>
        <Router basepath={basePath}>
          <Home path={`/`} />
          <About path={`/about`} />
          <Work path={`/work`} />
          <ModeArticle path={`/work/mode`} />
          <Test path={`/test`} />
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
