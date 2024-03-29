import { Helmet } from "react-helmet-async";
// @mui
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
// hooks
// import useResponsive from "../hooks/useResponsive";
// components
// import Logo from "../Components/logo";
// sections
import { Outlet } from "react-router-dom";

// typewriter effect
import { TypeAnimation } from "react-type-animation";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const StyledSection = styled("div")(({ theme }) => ({
    width: "100%",
    maxWidth: 1280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // boxShadow: theme.customShadows.card,
    // backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled("div")(({ theme }) => ({
    maxWidth: 480,
    margin: "auto",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
    // const mdUp = useResponsive("up", "md");

    return (
        <>
            <Helmet>
                <title> Login | Cyfer </title>
            </Helmet>

            <StyledRoot>
                {/* <Logo
                    sx={{
                        position: "fixed",
                        top: { xs: 0, sm: 0, md: 0 },
                        left: { xs: 16, sm: 24, md: 40 },
                    }}
                /> */}

                {
                    <StyledSection>
                        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    "Find new volunteering roles",
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    "Track upcoming volunteering activities",
                                    1000,
                                    "Submit Feedback for activities",
                                    1000,
                                    "Request for volunteering certificate",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                // style={{
                                //     fontSize: "2em",
                                //     display: "inline-block",
                                // }}
                                repeat={Infinity}
                            />
                        </Typography>
                        <img src="assets/background.jpg" alt="login" />
                    </StyledSection>
                }

                <Container maxWidth="sm">
                    <StyledContent>
                        {/* <Typography variant="h4" gutterBottom>
                            Sign in to Minimal
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 5 }}>
                            Don’t have an account? {""}
                            <Link variant="subtitle2">Get started</Link>
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Button
                                fullWidth
                                size="large"
                                color="inherit"
                                variant="outlined"
                            >
                                <Iconify
                                    icon="eva:google-fill"
                                    color="#DF3E30"
                                    width={22}
                                    height={22}
                                />
                            </Button>

                            <Button
                                fullWidth
                                size="large"
                                color="inherit"
                                variant="outlined"
                            >
                                <Iconify
                                    icon="eva:facebook-fill"
                                    color="#1877F2"
                                    width={22}
                                    height={22}
                                />
                            </Button>

                            <Button
                                fullWidth
                                size="large"
                                color="inherit"
                                variant="outlined"
                            >
                                <Iconify
                                    icon="eva:twitter-fill"
                                    color="#1C9CEA"
                                    width={22}
                                    height={22}
                                />
                            </Button>
                        </Stack> */}

                        {/* <Divider sx={{ my: 3 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                            >
                                OR
                            </Typography>
                        </Divider> */}

                        <Outlet />
                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}
