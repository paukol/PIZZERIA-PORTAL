import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrder.scss';

const WaiterOrder = props => {
  return (
    <div className={styles.component}>
      <h2>Waiter Order view</h2>
    </div>
  );
};

WaiterOrder.propTypes = {
  children: PropTypes.any,
};

export default WaiterOrder;