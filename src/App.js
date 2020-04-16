import React from 'react';
import style from './app.module.scss'
import { ReactComponent as Brain } from './icon/brain-in-jar.svg';
import { ReactComponent as Rocket } from './icon/rocket-ship.svg';

function App() {
  return (
    <div className={style.site}>
      <header className={style.header}>
        <nav className={style.nav}>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <h1 className={style.superHeroHeading}>Brian Cleveland</h1>
        <ul className={style.heroList}>
          <li>
            <Rocket />
            <h2>
              Lead Designer, Design Platform at Stitch Fix
            </h2>
          </li>
          <li>
            <Brain />
            <h2>
              10+ years of experience in  design systems, UI engineering, and user-centered product development
            </h2>
          </li>
        </ul>
      </header>
      <main>
        <section className={style.skewedBg}>
          <div className={style.content}>
            <p>This is my portfolio</p>
          </div>
        </section>
      </main>
      <footer>
        <p>The End</p>
      </footer>
    </div>
  );
}

export default App;
