import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.scss';

const TablesBooking = props => {
  return (
    <div className={styles.component}>
      <h2>Tables Booking view</h2>
    </div>
  );
};

TablesBooking.propTypes = {
  children: PropTypes.any,
};

export default TablesBooking;