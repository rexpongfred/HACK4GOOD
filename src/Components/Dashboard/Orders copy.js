import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate fake data rows for volunteers
// function createData(date, activityName, hoursVolunteered) {
//   return { date, activityName, hoursVolunteered };
// }

// Fake data for volunteers
const rawData = [
    { date: "2022-01-01", activityName: "Hack 4 Good", hours: 5 },
    { date: "2022-01-02", activityName: "Yellow Ribbon Run", hours: 4 },
    {
        date: "2022-01-03",
        activityName: "Down Syndrome Assiciation Singapore",
        hours: 6,
    },
    { date: "2022-01-04", activityName: "Run for Good", hours: 3 },
    { date: "2022-01-05", activityName: "Soup Kitchen Superstars", hours: 5 },
];

function preventDefault(event) {
    event.preventDefault();
}

export default function HoursVolunteered() {
    return (
        <React.Fragment>
            <Title>My Activity</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Activity Name</TableCell>
                        <TableCell align="right">Hours Volunteered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rawData.map((row) => (
                        <TableRow key={row.date}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.activityName}</TableCell>
                            <TableCell align="right">{row.hours}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link
                color="primary"
                href="#"
                onClick={preventDefault}
                sx={{ mt: 3 }}
            >
                See more hours volunteered
            </Link>
        </React.Fragment>
    );
}
