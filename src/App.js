import React from 'react';
import useClipboard from "react-use-clipboard";
import { ReactComponent as Checkmark } from './icon/checkmark.svg';
import style from './app.module.scss'
import Nav from './components/Nav';
import Tooltip from './components/Tooltip';

function App() {
  const EMAIL_ADDRESS = "boru.design@gmail.com";
  const [isCopied, setCopied] = useClipboard(EMAIL_ADDRESS);

  return (
    <React.Fragment>
      <header className={style.header}>
        <Nav />
        <h1 className={style.superHeroHeading}>
          Design Systems<br />
          <span className={style.strategist}>Strategist</span> &<br />
          <span className={style.developer}>Developer</span>
        </h1>
        <h2 className={style.myName}>Brian Cleveland</h2>
        <h3 className={style.myTitle}>
          Lead Designer, Design Platform<br />
          at Stitch Fix
        </h3>
        <ul className={style.myLinks}>
          <li><a href="https://www.linkedin.com/in/borudesign/">LinkedIn</a></li>
          <li><a href="https://github.com/yorthehunter/">GitHub</a></li>
          <li><a href="#">Resume</a></li>
          <li>
            <Tooltip tooltip="Copy email address to clipboard">
              <span className={style.looksLikeLink} onClick={setCopied}>{EMAIL_ADDRESS}</span>
            </Tooltip>
            {isCopied && <Checkmark className={style.checkmark} />}
          </li>
        </ul>
      </header>
      <main className={style.content}>
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
        hello. <br />
      </main>
    </React.Fragment>
  );
}

export default App;
