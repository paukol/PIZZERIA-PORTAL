import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEvents.module.scss';

const TablesEvents = props => {
  const id = props.match.params.id;

  return (
    <div className={styles.component}>
      <h2>Tables Events view</h2>
      <h3>{id !== 'new' ? id : ' ' }</h3>
    </div>
  );
};

TablesEvents.propTypes = {
  children: PropTypes.any,
  match: PropTypes.object,
};

export default TablesEvents;