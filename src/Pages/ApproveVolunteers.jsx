import { useState } from 'react';
import { Container, Grid, Typography, Paper, IconButton, FormControl, Select, MenuItem } from '@mui/material';
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

const activities = [
    {
        name: 'Beach Cleanup 21 Feb 2024 @ sentosa',
        people: [
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
        ]
    },
    {
        name: 'Park Restoration 24 Feb 2024 @ botanic gardens',
        people: [
            'Grace Lee',
            'William Garcia',
            'Ella Rodriguez',
            'James Martinez',
            'Ava Hernandez',
            'Alexander Nguyen',
            'Mia Lewis',
            'Benjamin Taylor',
            'Harper Anderson',
            'Ethan Thomas'
        ]
    }
];

function ApproveVolunteers() {

    const [approve, setApprove] = useState({});
    const [selectedActivity, setSelectedActivity] = useState('');

    const handleApprove = (personName, approve) => {
        setApprove(prevApprove => ({
            ...prevApprove,
            [personName]: approve ? 'Approved' : 'Not approved'
        }));
    };

    const handleChange = (event) => {
        setSelectedActivity(event.target.value);
    };

    return (
        <reactfragment>
            <Container maxWidth="x1">
                <Typography variant='h3'>Approve volunteers here!</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth style={{ backgroundColor: '#666', color: 'black' }}>
                            <Select
                                value={selectedActivity}
                                onChange={handleChange}
                                displayEmpty
                                style={{ backgroundColor: '#666', color: 'black' }}
                            >
                                <MenuItem value="" disabled style={{ backgroundColor: '#666', color: 'black' }}>Select an activity</MenuItem>
                                {activities.map((activity, index) => (
                                    <MenuItem key={index} value={activity.name} style={{ backgroundColor: '#666', color: 'black' }}>{activity.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                {selectedActivity && activities.map((activity, index) => (
                    activity.name === selectedActivity &&
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Typography variant='h4'>Activity Name:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='h4' sx={{ textAlign: 'left' }}>{activity.name}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            {activity.people.map((name, index) => (
                                <Grid item xs={12} key={index}>
                                    <Item>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item xs={4}>
                                                <Typography variant='body1'>{name}</Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <WhiteIconButton aria-label="mark approved" onClick={() => handleApprove(name, true)}>
                                                    <CheckCircleOutlineOutlined />
                                                </WhiteIconButton>
                                                <WhiteIconButton aria-label="mark not approved" onClick={() => handleApprove(name, false)}>
                                                    <CancelOutlined />
                                                </WhiteIconButton>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <StatusText variant='body2'>{approve[name]}</StatusText>
                                            </Grid>
                                        </Grid>
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ))}
            </Container>
        </reactfragment>
    )
}

export default ApproveVolunteers;
