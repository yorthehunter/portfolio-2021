import React from 'react'
import PropTypes from 'prop-types';
import { ReactComponent as NewWindow } from '../../icon/new-window.svg';

const LinkToResume = ({ content }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={`https://docs.google.com/document/d/1kLPM3J0UI4z_MwjagwJL7NxS77G4LAbkAwE7P2W80xg/edit?usp=sharing`}>{content} <NewWindow /></a>
  )
}

LinkToResume.defaultProps = {
  content: 'Resume',
}
LinkToResume.propTypes = {
  content: PropTypes.string,
}

export default LinkToResume
