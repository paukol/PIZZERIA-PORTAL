
import React from 'react';
import styles from '../Tables/Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2> 
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active' className={styles.link}>New booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} activeClassName='active' className={styles.link}>Edit any Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active' className={styles.link}>New event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`} activeClassName='active' className={styles.link}>Edit any Events</Link>  
  </div>
);

export default Tables;