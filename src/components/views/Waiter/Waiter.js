import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active' className={styles.link}>New Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/123abc`} activeClassName='active' className={styles.link}>Edit any order</Link>
    </div>
  );
};


export default Waiter;