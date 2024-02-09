import { Box, Button, Card, Container, Typography, Grid, CardContent, TextField } from '@mui/material'
import { useState, React } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const cardData = [
    {
        title: "Card 1",
        description: "Lorem ipsum dolor sit amet...",
    },
    {
        title: "Card 2",
        description: "Lorem ipsum dolor sit amet...",
    },
    {
        title: "Card 3",
        description: "Lorem ipsum dolor sit amet...",
    }
];

function CreateForm() {
    const [open, setOpen] = useState(false);
    const [activityData, setActivityData] = useState({
        name: '',
        dateTime: '',
        description: '',
        location: ''
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setActivityData({ ...activityData, [name]: value });
    };

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Activity data:', activityData);
        handleClose();
    };

    return (
        <Container maxWidth="m" >
            <Typography variant="h4" margin={2}  >
                Live form postings (Use bottom right button to add activities)
            </Typography>
            <Grid container spacing={4}>
                {cardData.map((data, index) => (
                    <Grid item xs={6} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {data.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {data.description}
                                </Typography>
                                <Box mt={2}>
                                    <Button variant="contained" color="primary"  >
                                        View more details
                                    </Button>
                                </Box>
                                <Box mt={2}>
                                    <Button variant="contained" color="primary">
                                        Edit form
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={4}>
                </Grid>
            </Grid>


            <div>
                <Fab color="primary" aria-label="add" onClick={handleOpen} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    <AddIcon />
                </Fab>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add new activity</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form to add a new activity.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="Name of activity"
                            type="text"
                            fullWidth
                            value={activityData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="dateTime"
                            name="dateTime"
                            // label="Time and date of activity"
                            type="datetime-local"
                            fullWidth
                            value={activityData.dateTime}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            name="description"
                            label="Description of activity"
                            type="text"
                            fullWidth
                            value={activityData.description}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="location"
                            name="location"
                            label="Location of activity"
                            type="text"
                            fullWidth
                            value={activityData.location}
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Container>

    )
}

export default CreateForm