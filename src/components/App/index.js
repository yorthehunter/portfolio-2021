import React from 'react';
import style from './style.module.scss'
import Header from '../Header';
import About from '../About';
import Work from '../Work';
import Test from '../Test';
import ModeMediumPost from '../Articles/ModeMediumPost';
import { Router } from "@reach/router"

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className={style.content}>
        <Router>
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
