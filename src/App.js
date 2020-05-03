import React from 'react';
import style from './app.module.scss'
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Test from './components/Test';
import ModeMediumPost from './components/Articles/ModeMediumPost';
import { Router } from "@reach/router"

function App() {
  const basePath = process.env.PUBLIC_URL;

  return (
    <React.Fragment>
      <Header />
      <main className={style.content}>
        <Router basepath={basePath}>
          <About path={`/`} />
          <Work path={`/work`} />
          <ModeMediumPost path={`/work/mode`} />
          <Test path={`/test`} />
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
