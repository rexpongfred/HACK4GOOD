import {
    Typography,
    Divider,
    Stack,
    Card,
    CardHeader,
    Avatar,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Tooltip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { red } from "@mui/material/colors";
import React from "react";
import mockViewActivities from "./mockActivities";

function ViewActivities() {
    return (
        <>
            <Typography variant="h3">At a glance...</Typography>
            <Divider />
            <Stack spacing={3}>
                <Typography variant="h5">Activities</Typography>
                <Stack direction="row" spacing={3}>
                    {mockViewActivities.map((activity) => (
                        <Card
                            sx={{
                                maxWidth: 345,
                                backgroundColor: (theme) =>
                                    theme.palette.grey[800],
                            }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: red[500] }}
                                        aria-label="recipe"
                                    >
                                        R
                                    </Avatar>
                                }
                                title={activity.title}
                                subheader={activity.date}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={activity.image}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {activity.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Tooltip title="Save">
                                    <IconButton aria-label="save">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Register">
                                    <IconButton aria-label="register">
                                        <HowToRegIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    ))}
                </Stack>
                <Typography variant="h5">Workshops</Typography>
                <Typography variant="subtitle1">None for now...</Typography>
                <Typography variant="h5">Opportunities</Typography>
                <Typography variant="subtitle1">None for now...</Typography>
            </Stack>
        </>
    );
}

export default ViewActivities;
