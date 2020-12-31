import React from 'react'
import SuperHeroHeading from '../SuperHeroHeading';
import style from './style.module.scss';

const Resume = () => {
  return (
    <>
    <article className="article-content">
      <header>
        <h1 className="as-h4">Brian Cleveland</h1>
        <SuperHeroHeading tag='h2' />
      </header>
      <section className="work-history">
        <h2 className="eyebrow">Work History</h2>
        <article className="resume-work-history-item">
          <h3 className="as-h5 resume-work-history-heading">Lead Product Design, Design Platform | Stitch Fix</h3>
          <p className="resume-work-history-timeframe">
            <time dateTime="2019">2019</time> – <time dateTime="2020-06-01">June, 2020</time>
          </p>
          <p></p>
        </article>
      </section>
    </article>
    </>
  )
}

export default Resume
