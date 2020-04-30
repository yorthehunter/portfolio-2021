import React from 'react';
import style from './app.module.scss'
import Header from './components/Header';
import About from './components/About';
import ModeArticle from './components/Articles/Mode';
import { Router } from "@reach/router"

const Work = () => (
  <ModeArticle />
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
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
