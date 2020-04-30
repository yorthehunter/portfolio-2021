import React from 'react';
import style from './app.module.scss'
import Header from './components/Header';
import About from './components/About';
import ModeArticle from './components/Articles/Mode';
import { Router } from "@reach/router"

const Work = () => (
  <ModeArticle />
);

const Test =  () => (
  <>
    <div className="article-content">
      <h1>Hello</h1>
      <h2>Hello</h2>
      <h3>Hello</h3>
      <h4>Hello</h4>
      <p>Hello world.</p>
      <blockquote>Hello world.</blockquote>
      <ul>
        <li>list</li>
        <li>list</li>
      </ul>
      <ol>
        <li>list</li>
        <li>list</li>
      </ol>
      <dl>
        <dt>list title</dt>
        <dd>list def</dd>
        <dt>list title</dt>
        <dd>list def</dd>
      </dl>
    </div>
    <div>
      <h1>Hello</h1>
      <h2>Hello</h2>
      <h3>Hello</h3>
      <h4>Hello</h4>
      <p>Hello world.</p>
      <blockquote>Hello world.</blockquote>
    </div>
  </>
);

function App() {
  const basePath = process.env.PUBLIC_URL;

  return (
    <React.Fragment>
      <Header />
      <main className={style.content}>
        <Router basepath={basePath}>
          <About path={`/`} />
          <Work path={`/work`} />
          <Test path={`/test`} />
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
