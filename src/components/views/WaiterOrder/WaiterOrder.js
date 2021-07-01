import React from 'react';
import styles from './WaiterOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const demoMenu = [
  { id: '1', name: 'cake', option: ['cream', 'chocolate', 'no sugar'] },
  { id: '2', name: 'breakfeast', option: ['tea', 'cappuccino', 'espresso'] },
  { id: '3', name: 'pizza', option: ['tuna', 'onin', 'olives'] },
  { id: '4', name: 'salad', option: ['egg', 'tomato', 'cheese'] },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '20px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const OrderInfo = () => {
  const classes = useStyles();
  return (
    <Paper className={styles.component} elevation={9}>
      <Grid container justify="space-around">
        <Grid item xs={3}>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/:id`}>
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5" component="h5">
            New Order
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify="space-between">
        <Grid item xs={6}>
          <FormControl
            id="table"
            variant="outlined"
            mediumWidth
            margin="normal"
          >
            <InputLabel id="table" variant="outlined">
              Table
            </InputLabel>
            <Select labelId="table">
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid className={classes.root}>
        {demoMenu.map((dish) => (
          <Accordion key={dish.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{dish.name}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <FormControl size="large" margin="normal" component="fieldset">
                <FormGroup row>
                  {dish.option.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      control={
                        <Checkbox color="primary" value name={dish.name} />
                      }
                      label={opt}
                    />
                  ))}
                </FormGroup>
              </FormControl>

              <FormControl
                size="small"
                margin="dense"
                variant="outlined"
              >
                <InputLabel id="demo-simple-select-outlined-label" shrink={true}>
                  Amount
                </InputLabel>
                <Select>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>

      <Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          component={Link}
          to={`${process.env.PUBLIC_URL}/waiter`}
        >
          Add order
        </Button>
      </Grid>
    </Paper>
  );
};

export default OrderInfo;


