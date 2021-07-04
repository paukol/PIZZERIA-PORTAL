import React from 'react';
import styles from './TablesBooking.module.scss';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const demoBooking = {
  date: '2021-07-26',
  time: '16:00',
  table: '1',
  name: 'Paulina',
  contact: 'pk@email.com',
  people: '2',
  
};

const TablesBooking = () => {
  const { id } = useParams();
  return (
    <Paper elevation={9} className={styles.component}>
      <Grid container justify="center" spacing={1}>
        <Grid item>
          <Typography component="h1" variant="h4">
            Reservation {id}
          </Typography>
        </Grid>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>People</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {demoBooking.date}
            </TableCell>
            <TableCell> {demoBooking.date}</TableCell>
            <TableCell> {demoBooking.time}</TableCell>
            <TableCell> {demoBooking.name}</TableCell>
            <TableCell> {demoBooking.contact}</TableCell>
            <TableCell> {demoBooking.people}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};



export default TablesBooking;