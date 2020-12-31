import React from 'react'
import PropTypes from 'prop-types';
import style from './style.module.scss'

const SuperHeroHeading = ({ tag }) => {
  const Tag = tag;
  return (
    <Tag className={style.superHeroHeading}>
      Design Systems<br />
      <span className={style.strategist}>Strategist</span> &amp; <br className={style.optionalBreak} />
      <span className={style.developer}>Developer</span>
    </Tag>
  )
}

SuperHeroHeading.defaultProps = {
  tag: 'h1',
}

SuperHeroHeading.propTypes = {
  tag: PropTypes.string,
}

export default SuperHeroHeading
