import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";




import { Card, CardContent, Typography } from '@mui/material';

//import { Card, CardContent, Typography } from '@material-ui/core';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 300,
//     margin: 10,
//   },
// });

const Opportunities = () => {
    //   const classes = useStyles();

    const Opportunities = [
        { id: 1, title: 'Hiking', description: 'Explore nature on a scenic trail.' },
        { id: 2, title: 'Picnic', description: 'Enjoy a relaxing picnic in the park.' },
        { id: 3, title: 'Cycling', description: 'Go for a bike ride around the city.' },
        { id: 4, title: 'Yoga', description: 'Practice mindfulness with a yoga session.' },
    ];

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Opportunities
            </Typography>

            <Grid container spacing={2}>
                {Opportunities.map((activity) => ( // Add parameter 'activity' here
                    <Grid item key={activity.id} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {activity.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {activity.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Opportunities;
