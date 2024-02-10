import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import {
    Toolbar,
    IconButton,
    Typography,
    Badge,
    AppBar as MuiAppBar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../hooks/useAuth";
import { jwtDecode as jwt_decode } from "jwt-decode";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

function Header({ open, toggleDrawer }) {
    const { auth } = useAuth();

    const decoded = auth?.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined;

    const username = decoded?.UserInfo?.username || "";

    return (
        <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: "24px", // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: "36px",
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    {username}
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
