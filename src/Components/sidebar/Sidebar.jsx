import React from "react";

import { styled, alpha } from "@mui/material/styles";
import { Toolbar, IconButton, Divider, List } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listitemsAdmin";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";

import useLogout from "../../hooks/useLogout";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
        backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
}));

function Sidebar({ open, toggleDrawer }) {
    const logout = useLogout();
    const navigate = useNavigate();

    const signOut = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1],
                    backgroundColor: (theme) =>
                        alpha(theme.palette.grey[600], 0.48),
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
                <Divider sx={{ my: 1 }} />
                <ListItemButton onClick={signOut}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </List>
        </Drawer>
    );
}

export default Sidebar;
