import React from 'react';
import style from './app.module.scss'
import Nav from './components/Nav';

function App() {
  return (
    <div className={style.site}>
      <Nav />
      <header className={style.header}>
        <h1 className={style.superHeroHeading}>
          Design Systems<br />
          <span className={style.strategist}>Strategist</span> &<br />
          <span className={style.developer}>Developer</span>
        </h1>
        <h2 className={style.myName}>Brian Cleveland</h2>
        <h3 className={style.myTitle}>Lead Designer, Design Platform at Stitch Fix</h3>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
