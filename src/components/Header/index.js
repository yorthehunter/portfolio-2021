import React from 'react';
import useClipboard from "react-use-clipboard";
import Tooltip from '../Tooltip';
import Nav from '../Nav';
import { Link } from "@reach/router";
// import { ReactComponent as PdfDownload } from '../../icon/pdf-download.svg';
import { ReactComponent as Checkmark } from '../../icon/checkmark.svg';
import style from './style.module.scss'
import SuperHeroHeading from '../SuperHeroHeading';

const EMAIL_ADDRESS = "boru.design@gmail.com";

const Header = () => {
  const [isCopied, setCopied] = useClipboard(EMAIL_ADDRESS, {
    successDuration: 2000
  });

  return (
    <header className={style.header}>
      <Nav />
      <Link to={`/`}>
        <SuperHeroHeading />
      </Link>
      <h2 className={style.myName}>Brian Cleveland</h2>
      <h3 className={style.myTitle}>
        Design Systems Specialist<br />
        at Modern Health
      </h3>
      <ul className={style.myLinks}>
        <li>
          <a href="https://www.linkedin.com/in/borudesign/">
            LinkedIn
          </a>
        </li>
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
