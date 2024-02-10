import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography, Box } from "@mui/material";

const EnrolledActivities = () => {
    const enrolledActivities = [
        {
            id: 1,
            title: "Hiking",
            description: "Explore nature on a scenic trail.",
            duration: "2 hours",
            location: "National Park",
            date: "2024-02-10",
            status: "completed",
        },
        {
            id: 2,
            title: "Picnic",
            description: "Enjoy a relaxing picnic in the park.",
            duration: "3 hours",
            location: "City Park",
            date: "2024-02-15",
            status: "inProgress",
        },
        // Add more enrolled activities here
    ];

    const getStatusLabelColor = (status) => {
        switch (status) {
            case "completed":
                return "green";
            case "inProgress":
                return "orange";
            case "absent":
                return "red";
            default:
                return "transparent";
        }
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Enrolled Activities
            </Typography>

            <Grid container spacing={2}>
                {enrolledActivities.map((activity) => (
                    <Grid item key={activity.id} xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ backgroundColor: "#666" }}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {activity.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    Description: {activity.description}
                                </Typography>
                                <Typography color="textSecondary">
                                    Duration: {activity.duration}
                                </Typography>
                                <Typography color="textSecondary">
                                    Location: {activity.location}
                                </Typography>
                                <Typography color="textSecondary">
                                    Date: {activity.date}
                                </Typography>
                            </CardContent>
                            <Box
                                component="span"
                                sx={{
                                    position: "absolute",
                                    top: "5px",
                                    right: "5px",
                                    borderRadius: "50%",
                                    width: "15px",
                                    height: "15px",
                                    backgroundColor: getStatusLabelColor(
                                        activity.status
                                    ),
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "black", // Adjust text color to black
                                    fontSize: "10px",
                                }}
                            >
                                {/* Display a short label for status */}
                                {activity.status.charAt(0).toUpperCase()}
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default EnrolledActivities;
