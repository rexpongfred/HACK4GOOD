import React from "react";
// import { useState } from "react";

import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Card, CardContent, Grid } from "@mui/material";

const threads = [
    {
        id: 1,
        title: "Fundrasing activity @ bishan",
        content: "Fundraising for the needy at bishan community centre",
        date: "2022-02-10",
    },
    {
        id: 2,
        title: "Volunteering at NKF dialysis centre",
        content: "Interactions with patients at NKF dialysis centre",
        date: "2022-02-11",
    },
    {
        id: 3,
        title: "Volunteering at Singapore Children Society",
        content:
            "Interactions with children at the Singapore children society. Tuition provided to children as well.",
        date: "2022-02-12",
    },
];

function MyCertificate() {
    const handleDownload = (thread) => {
        // Logic to handle download post
        console.log("Downloading post:", thread.title);
    };

    return (
        <Container maxWidth="m" style={{ textAlign: "center" }}>
            <Typography variant="h4" style={{ margin: "5px" }}>
                My completed activities
            </Typography>

            <Grid container direction={"column"} spacing={2}>
                {threads.map((thread) => (
                    <Grid item key={thread.id} xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.grey[800],
                            }}
                        >
                            <CardContent style={{ textAlign: "left" }}>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    align="left"
                                >
                                    {thread.title}Date: {thread.date}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="h6"
                                    align="left"
                                >
                                    Date: {thread.date}
                                </Typography>
                                <Typography color="textSecondary" variant="h7">
                                    {thread.content}
                                </Typography>
                            </CardContent>
                            <Button
                                onClick={() => handleDownload(thread)}
                                variant="outlined"
                                color="primary"
                                style={{ margin: "5px" }}
                            >
                                Download Certificate
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default MyCertificate;
