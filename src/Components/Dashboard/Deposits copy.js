import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

// Generate fake data rows
function createData(date, name, hours) {
  return { date, name, hours };
}

// Fake data
const rows = [
  createData('2022-01-01', 'John Doe', 5),
  createData('2022-01-02', 'Jane Doe', 4),
  createData('2022-01-03', 'Alice Smith', 6),
  createData('2022-01-04', 'Bob Johnson', 3),
  createData('2022-01-05', 'Emily Brown', 5),
];

export default function Deposits() {
  // Calculate total hours
  const totalHours = rows.reduce((total, row) => total + row.hours, 0);

  return (
    <React.Fragment>
      <Title style={{ fontSize: '60px', textAlign: 'center' }}>My Hours</Title>
      <Typography component="p" variant="h4" align="center" style={{ fontSize: '48px' }}>
        {totalHours + "h"}
      </Typography>
      <Typography variant="body1" align="center" style={{ marginTop: '16px' }}>
        Top 80th percentile
      </Typography>
    </React.Fragment>
  );
}
