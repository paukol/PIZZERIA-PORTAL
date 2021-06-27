import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.link}>Home</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className={styles.link}>Login</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' className={styles.link}>Tables</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active' className={styles.link}>Waiter</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className={styles.link}>Kitchen</Button>
    </nav>
  );
};

PageNav.propTypes = {
  children: PropTypes.any,
};

export default PageNav;