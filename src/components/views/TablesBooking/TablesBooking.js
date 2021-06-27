
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';

const TablesBooking = props => {
  const id = props.match.params.id;

  return (
    <div className={styles.component}>
      <h2>Tables Booking view</h2>
      <h3>{id !== 'new' ? id : ' ' }</h3>
    </div>
  );
};

TablesBooking.propTypes = {
  children: PropTypes.any,
  match: PropTypes.object,
};

export default TablesBooking;