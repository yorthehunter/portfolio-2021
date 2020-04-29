import React from 'react';
import useClipboard from "react-use-clipboard";
import Tooltip from '../Tooltip';
import Nav from '../Nav';
import { ReactComponent as Checkmark } from '../../icon/checkmark.svg';
import style from './style.module.scss'

const Header = () => {
  const EMAIL_ADDRESS = "boru.design@gmail.com";

  const [isCopied, setCopied] = useClipboard(EMAIL_ADDRESS, {
    successDuration: 2000
  });

  return (
    <header className={style.header}>
      <Nav />
      <h1 className={style.superHeroHeading}>
        Design Systems<br />
        <span className={style.strategist}>Strategist</span> & <br className={style.optionalBreak} />
        <span className={style.developer}>Developer</span>
      </h1>
      <h2 className={style.myName}>Brian Cleveland</h2>
      <h3 className={style.myTitle}>
        Lead Designer, Design Platform<br />
        at Stitch Fix
      </h3>
      <ul className={style.myLinks}>
        <li><a href="https://www.figma.com/file/k4atM81j9Nr2LZWZBwdT0i/Brian-Cleveland---Resume?node-id=1%3A39">Resume</a></li>
        <li><a href="https://www.linkedin.com/in/borudesign/">LinkedIn</a></li>
        <li><a href="https://github.com/yorthehunter/">GitHub</a></li>
        <li>
          <Tooltip tooltip="Copy email address to clipboard">
            <span className={style.looksLikeLink} onClick={setCopied}>{EMAIL_ADDRESS}</span>
          </Tooltip>
          {isCopied && <Checkmark className={style.checkmark} />}
        </li>
      </ul>
    </header>
  );
};

export default Header;
