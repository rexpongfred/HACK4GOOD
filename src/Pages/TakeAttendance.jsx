import { useState } from 'react';
import { Container, Grid, Typography, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { CheckCircleOutlineOutlined, CancelOutlined } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#666',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StatusText = styled(Typography)({
  width: '64px', // Adjust the width as needed
});

const WhiteIconButton = styled(IconButton)({
  color: 'white',
});

function TakeAttendance() {
  const [attendance, setAttendance] = useState({});

  const handleAttendance = (personName, present) => {
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [personName]: present ? 'Present' : 'Absent'
    }));
  };

  const peopleNames = [
    'John Doe',
    'Jane Smith',
    'David Johnson',
    'Emily Brown',
    'Michael Wilson',
    'Emma Martinez',
    'Christopher Jones',
    'Olivia Taylor',
    'Daniel Anderson',
    'Sophia Thomas'
  ];

  return (
    <Container maxWidth="x1">
      <Typography variant='h3'>Mark attendance for today's activity here!</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant='h4'>Activity Name:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h4' sx={{ textAlign: 'left' }}>Beach Cleanup</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {peopleNames.map((name, index) => (
          <Grid item xs={12} key={index}>
            <Item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={4}>
                  <Typography variant='body1'>{name}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <WhiteIconButton aria-label="mark present" onClick={() => handleAttendance(name, true)}>
                    <CheckCircleOutlineOutlined />
                  </WhiteIconButton>
                  <WhiteIconButton aria-label="mark absent" onClick={() => handleAttendance(name, false)}>
                    <CancelOutlined />
                  </WhiteIconButton>
                </Grid>
                <Grid item xs={4}>
                  <StatusText variant='body2'>{attendance[name]}</StatusText>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TakeAttendance;
