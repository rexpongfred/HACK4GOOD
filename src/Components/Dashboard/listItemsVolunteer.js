import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/volunteer"> {/* Link to "/dashboard" */}
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="My Summary" />
        </ListItemButton>
        <ListItemButton component={Link} to="/opportunities"> {/* Link to "/opportunities" */}
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Opportunities" />
        </ListItemButton>
        <ListItemButton component={Link} to="/enrolled-activities"> {/* Link to "/enrolled-activities" */}
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Enrolled Activities" />
        </ListItemButton>
        {/* Add more links for other pages */}
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/my-certificate"> {/* Link to "/my-certificate" */}
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="My Certificate" />
        </ListItemButton>
        {/* Add more links for other pages */}
    </React.Fragment>
);
