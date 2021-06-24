import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEvent.scss';

const TablesEvents = props => {
  return (
    <div className={styles.component}>
      <h2>Tables Events view</h2>
    </div>
  );
};

TablesEvents.propTypes = {
  children: PropTypes.any,
};

export default TablesEvents;