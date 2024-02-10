import React from "react";

import { useState, useEffect } from "react";

import { styled, alpha } from "@mui/material/styles";
import {
    Toolbar,
    IconButton,
    Divider,
    List,
    Box,
    Link,
    Avatar,
    Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ListItems } from "./listitems";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";

import useLogout from "../../hooks/useLogout";

import { useNavigate } from "react-router-dom";

import { jwtDecode as jwt_decode } from "jwt-decode";
import useAuth from "../../hooks/useAuth";

const drawerWidth = 240;

const StyledAccount = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

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

    const { auth } = useAuth();

    const [role, setRole] = useState("volunteer");
    const [username, setUsername] = useState("");

    useEffect(() => {
        const decoded = auth?.accessToken
            ? jwt_decode(auth.accessToken)
            : undefined;

        setRole(decoded?.UserInfo?.role || "volunteer");
        setUsername(decoded?.UserInfo?.username || "");
    }, [auth.accessToken]);

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
            {open ? (
                <Box sx={{ mb: 5, mx: 2.5, mt: 5 }}>
                    <Link underline="none">
                        <StyledAccount>
                            <Avatar src="www.doge.png" alt="photoURL" />

                            <Box sx={{ ml: 2 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "text.primary" }}
                                >
                                    {username}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    {role}
                                </Typography>
                            </Box>
                        </StyledAccount>
                    </Link>
                </Box>
            ) : (
                ""
            )}

            <List component="nav">
                {ListItems[role].main}
                <Divider sx={{ my: 1 }} />
                {ListItems[role].secondary}
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
