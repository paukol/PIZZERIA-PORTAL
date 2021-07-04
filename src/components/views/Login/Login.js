import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Login = () => (
  <Paper className={styles.component} elevation={9}> 
    <Typography 
      variant="h5" 
      component="h1"
    >
       Sign in
    </Typography>
    <form className={styles.form} noValidate>
      <TextField 
        variant="outlined" 
        margin="normal" 
        required id="login" 
        label="Login" name="login" 
        autoComplete="login" 
        utoFocus 
      />
      <TextField 
        variant="outlined" 
        margin="normal" 
        required name="password" 
        label="Password" 
        type="password" 
        id="password" 
        autoComplete="current-password" 
      />
      <FormControlLabel 
        control={<Checkbox value="remember" color="primary" />} 
        label="Remember me" 
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        component={Link} 
        to={`${process.env.PUBLIC_URL}/`}
      >
        Sign In
      </Button>
    </form>
  </Paper>
);


export default Login;