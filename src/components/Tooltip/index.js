import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const Tooltip = ({ children, tooltip }) =>
  <span className={style.hasTooltip} data-tooltip={tooltip}>
    { children }
  </span>

Tooltip.propTypes = {
  tooltip: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
