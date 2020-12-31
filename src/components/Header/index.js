import React from 'react';
import useClipboard from "react-use-clipboard";
import Tooltip from '../Tooltip';
import Nav from '../Nav';
import { Link } from "@reach/router";
// import { ReactComponent as PdfDownload } from '../../icon/pdf-download.svg';
import { ReactComponent as Checkmark } from '../../icon/checkmark.svg';
import style from './style.module.scss'
import SuperHeroHeading from '../SuperHeroHeading';
import { ReactComponent as LinkedIn } from '../../icon/linkedin.svg';
import { ReactComponent as GitHub } from '../../icon/github.svg';
import { ReactComponent as Email } from '../../icon/email.svg';

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
        Principal Design Engineer<br />
        at Anomalie
      </h3>
      <ul className={style.myLinks}>
        {/* <li>
          <a style={{ marginRight: '0.5rem' }} href="https://www.figma.com/file/k4atM81j9Nr2LZWZBwdT0i/Brian-Cleveland---Resume?node-id=1%3A39">View Resume</a>
          <span className={style.or}>::</span>
          <a href={`${process.env.PUBLIC_URL}/brian_cleveland_resume.pdf`} className={style.pdfDownload} download><PdfDownload /></a>
        </li> */}
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
