import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrder.module.scss';

const WaiterOrder = props => {
  const id = props.match.params.id;

  return (
    <div className={styles.component}>
      <h2>Waiter Order view</h2>
      <h3>{id !== 'new' ? id : ' ' }</h3>
    </div>
  );
};

WaiterOrder.propTypes = {
  children: PropTypes.any,
  match: PropTypes.object,
};

export default WaiterOrder;