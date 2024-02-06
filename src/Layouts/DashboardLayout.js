import { useState } from "react";
import { Outlet } from "react-router-dom";

// // @mui
import { styled } from "@mui/material/styles";

// sidebar and header
// import Sidebar from "../Components/SideNav/Sidebar";
import Header from "../Components/header/Header";
import Sidebar from "../Components/sidebar/Sidebar";
// import { WalletProvider } from "../context/WalletProvider";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

export default function DashboardLayout() {
    // const [open, setOpen] = useState(false);
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        // <WalletProvider>
        <StyledRoot>
            {/* <Header onOpenNav={() => setOpen(true)} /> */}
            <Header open={open} toggleDrawer={toggleDrawer} />

            {/* <Sidebar openNav={open} onCloseNav={() => setOpen(false)} /> */}
            <Sidebar open={open} toggleDrawer={toggleDrawer} />
            <Main>
                <Outlet />
            </Main>
        </StyledRoot>
        // </WalletProvider>
    );
}
