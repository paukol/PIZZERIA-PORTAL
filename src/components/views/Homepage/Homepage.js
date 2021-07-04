import React from 'react';
import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const demoList = [
  {
    table: '1',
    name: 'Paula',
    time: '12:00',
    people: '2',
    id: '1',
  },
  {
    table: '2',
    name: 'Paula',
    time: '16:00',
    people: '2',
    id: '9',
  },
  {
    table: '1',
    name: 'Paula',
    time: '19:00',
    people: '3',
    id: '3',
  },
  {
    table: '2',
    name: 'Paula',
    time: '21:30',
    people: '4',
    id: '4',
  },
];
const Homepage = () => (
  <Paper className={styles.component} elevation={9}>
    <Grid container justify="center">
      <Grid item>
        <Typography className={styles.title} variant="h5" component="h5">
          RESERVATIONS FOR TODAY
        </Typography>
      </Grid>
    </Grid>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>People</TableCell>
          <TableCell>Details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoList.map((demoList) => (
          <TableRow key={demoList.table}>
            <TableCell component="th" scope="row">
              {demoList.table}
            </TableCell>
            <TableCell>{demoList.time}</TableCell>
            <TableCell>{demoList.people}</TableCell>
            <TableCell>
              <Button
                className={styles.booked}
                component={Link}
                to={`${process.env.PUBLIC_URL}/tables/booking/${demoList.id}`}
              >
                SEE DETAILS
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Homepage;