import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

const mainListItemsVolunteer = (
    <React.Fragment>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="My Summary" />
        </ListItemButton>
        <ListItemButton component={Link} to="createform">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Create Form" />
        </ListItemButton>
        <ListItemButton component={Link} to="enrolled-activities">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Enrolled Activities" />
        </ListItemButton>
    </React.Fragment>
);

const secondaryListItemsVolunteer = (
    <React.Fragment>
        <ListItemButton component={Link} to="mycertificate">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="My Certificate" />
        </ListItemButton>
    </React.Fragment>
);

const mainListItemsAdmin = (
    <React.Fragment>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="My Summary" />
        </ListItemButton>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Create new Activity" />
        </ListItemButton>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Generate Report" />
        </ListItemButton>
    </React.Fragment>
);

const secondaryListItemsAdmin = (
    <React.Fragment>
        <ListItemButton component={Link} to="mycertificate">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Approve volunteers" />
        </ListItemButton>
        <ListItemButton component={Link} to="/takeattendance">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Take attendance" />
        </ListItemButton>
    </React.Fragment>
);

export const ListItems = {
    volunteer: {
        main: mainListItemsVolunteer,
        secondary: secondaryListItemsVolunteer,
    },
    admin: {
        main: mainListItemsAdmin,
        secondary: secondaryListItemsAdmin,
    },
};
