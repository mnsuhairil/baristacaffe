import {
  BusinessRounded,
  FacebookRounded,
  FaxRounded,
  Instagram,
  PhoneRounded,
  Twitter,
} from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const xsStyles = {
  display: "flex",
  alignItems: { xs: "center", md: "flex-start" },
  justifyContent: { xs: "center", md: "flex-start" },
};

function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar position="static" color="transparent" className="footerAppbar">
        <Toolbar>
          <Box flexGrow={1}>
            <Grid
              container
              pb={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* Left content */}
              <Grid container item xs={12} sm={5} md={5}>
                <Grid item xs={12} sx={xsStyles}>
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      textAlign: "left",
                      color: "white",
                    }}
                    variant="h6"
                  >
                    Powered by
                  </Typography>
                </Grid>

                {/* Image */}
                <Grid item xs={12} paddingBottom={2} sx={xsStyles}>
                  {/* <img
                    src={TulusLogo}
                    alt="Logo Tulus"
                    style={{
                      width: theme.breakpoints.down("sm") ? "160px" : "160px",
                      marginLeft: "-10px",
                    }}
                  /> */}
                </Grid>

                {/* Phone */}
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    color="white"
                    paddingBottom={"1%"}
                  >
                    <Grid item xs={2} md={1}>
                      <Box
                        bgcolor="white"
                        borderRadius="50%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="26px"
                        height="26px"
                      >
                        <PhoneRounded
                          style={{ color: "black", fontSize: "18px" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="subtitle2">
                        +603 5567 0103
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Fax */}
                <Grid item xs={12}>
                  <Grid container alignItems="center" color="white">
                    <Grid item xs={2} md={1}>
                      <Box
                        bgcolor="white"
                        borderRadius="50%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="26px"
                        height="26px"
                      >
                        <FaxRounded
                          style={{ color: "black", fontSize: "18px" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="subtitle2">
                        +603 5569 4030 (fax)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Address */}
                <Grid item xs={12} paddingBottom={2}>
                  <Grid container alignItems="center" color="white">
                    <Grid item xs={2} md={1}>
                      <Box
                        bgcolor="white"
                        borderRadius="50%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="26px"
                        height="26px"
                      >
                        <BusinessRounded
                          style={{ color: "black", fontSize: "18px" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="subtitle2">
                        Unit 3-12-09 UOA Bussiness Park, 1, Jalan Pengaturan
                        U1/51a, Section U1, 40150 Shah Alam, Selangor
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Social Media Icons */}
                <Grid item xs={12} ml={-0.2}>
                  <FacebookRounded
                    fontSize={isSmallScreen ? "small" : "large"}
                    style={{ color: "white", fontSize: "26px" }}
                  />
                  <Twitter
                    fontSize={isSmallScreen ? "small" : "large"}
                    style={{ color: "white", fontSize: "26px" }}
                  />
                  <Instagram
                    fontSize={isSmallScreen ? "small" : "large"}
                    style={{ color: "white", fontSize: "26px" }}
                  />
                </Grid>

                {/* Text */}
                <Grid
                  item
                  xs={12}
                  sx={{
                    paddingBottom: "5%",
                  }}
                >
                  <Typography variant="body2" color="white">
                    Tulus Digital Sdn Bhd (930302 -A)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3} md={3} marginBottom={"-1%"}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent="center"
                    alignItems="center"
                    pb={1}
                  >
                    {/* Image 1 */}
                    {/* <img
                      src={PlayStore}
                      alt="playStoreImageButton"
                      style={{ width: "60%" }}
                    /> */}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {/* Image 2 */}
                    {/* <img
                      src={AppStore}
                      alt="appsStoreImageButton"
                      style={{ width: "60%" }}
                    /> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;

// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Button,
//   AppBar,
//   Toolbar,
//   IconButton,
//   InputBase,
//   Hidden,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { alpha, styled } from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// const theme = createTheme();
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     // transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "6ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// const Footer = () => {
//   return (
//     <AppBar
//       sx={{
//         bottom: 0,
//         position: "fixed",
//         top: "auto",
//       }}
//       color="primary"
//       variant="outlined"
//     >
//       <Container>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="body2" color="text.secondary">
//             Made with love for developers.
//           </Typography>
//           <Grid container spacing={2}>
//             <Hidden only={["md", "lg", "xl"]}>
//               <Grid item>
//                 <IconButton color="inherit">
//                   <FacebookIcon />
//                 </IconButton>
//               </Grid>
//               <Grid item>
//                 <IconButton color="inherit">
//                   <InstagramIcon />
//                 </IconButton>
//               </Grid>
//               <Grid item>
//                 <IconButton color="inherit">
//                   <LinkedInIcon />
//                 </IconButton>
//               </Grid>
//             </Hidden>
//             <Grid item>
//               <Button variant="outlined" color="inherit">
//                 Blog
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button variant="outlined" color="inherit">
//                 FAQ
//               </Button>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// const LandingPage = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         sx={{
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           backgroundColor: "#ecbdfc",
//         }}
//       >
//         <Container maxWidth="md">
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               // justifyContent: "center",
//               height: "calc(100vh - 68px)",
//             }}
//           >
//             <Typography variant="h3" color="text.primary" align="center">
//               Find Your Perfect Cup of Coffee
//             </Typography>
//             <Box sx={{ mt: 3 }}>
//               <Search>
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   placeholder="Search Baverage, coffee..."
//                   inputProps={{ "aria-label": "search" }}
//                 />
//               </Search>
//             </Box>
//           </Box>
//         </Container>
//         {/* <Footer /> */}
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default LandingPage;
