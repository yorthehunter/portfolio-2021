import React from 'react';
import style from './app.module.scss'
import Header from './components/Header';
import { Router } from "@reach/router"

const About = () => (
  <article>
    hello. <br />
    hello. <br />
    hello. <br />
    hello. <br />
    hello. <br />
    hello. <br />
    hello. <br />
    hello. <br />
  </article>
);

const Work = () => (
  <article>
    hello. <br />
    hello. <br />
    hello. <br />
    hello. <br />
  </article>
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
