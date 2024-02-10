import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Hours Volunteered Data
function createData(date, volunteerName, hoursVolunteered) {
  return { date, volunteerName, hoursVolunteered };
}

const rows = [
  createData('2022-01-01', 'John Doe', 5),
  createData('2022-01-02', 'Jane Doe', 4),
  createData('2022-01-03', 'Alice Smith', 6),
  createData('2022-01-04', 'Bob Johnson', 3),
  createData('2022-01-05', 'Emily Brown', 5),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function HoursVolunteered() {
  return (
    <React.Fragment>
      <Title>Hours Volunteered</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Volunteer Name</TableCell>
            <TableCell align="right">Hours Volunteered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.volunteerName}</TableCell>
              <TableCell align="right">{row.hoursVolunteered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more hours volunteered
      </Link>
    </React.Fragment>
  );
}
