
import React from 'react';
import styles from './NewBooking.module.scss';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



const NewBooking = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Paper className={styles.component} elevation={9}>
      <Container className={styles.component} component="main" maxWidth="lg">
        <CssBaseline />
        <div className={styles.paper}>
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <Typography component="h1" variant="h4">
                New Booking
              </Typography>
            </Grid>
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="center" spacing={3}>
              <Grid item>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
              <Grid item>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
          <form className={styles.form} noValidate>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={1} zeroMinWidth>
                <FormControl className={styles.formControl} margin="normal">
                  <InputLabel id="demo-simple-select-label">Table</InputLabel>
                  <Select
                    labelId="table"
                    id="demo-simple-select"
                  >  
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={1} zeroMinWidth>
                <FormControl className={styles.formControl} margin="normal">
                  <InputLabel>People</InputLabel>
                  <Select labelId="people">  
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box mt={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
                style={{ textDecoration: 'none' }}
                component={Link}
                to={`${process.env.PUBLIC_URL}/`}
              >
                Book now
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </Paper>
  );
};

export default NewBooking;