import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Grid,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { alpha, styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

import customTheme from "./../component/customTheme";

const theme = createTheme();

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha("#c7c7c7", 0.15),
  "&:hover": {
    backgroundColor: alpha("#c7c7c7", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
}));

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: alpha(theme.palette.common.white, 0),
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        minHeight: "80px",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Grid container direction={"row"} width="100%">
          <Grid item xs={10}>
            <Typography
              className="type-text"
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "text.secondary",
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              Barista Cafe
            </Typography>
          </Grid>
          <Grid item xs={2}>
            {" "}
            <Grid container direction={"row"}>
              <Grid item xs={6}>
                <Button
                  className="btn"
                  color="inherit"
                  sx={{ color: "text.secondary", fontSize: "1.2em" }}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  className="btn"
                  color="inherit"
                  sx={{ color: "text.secondary", fontSize: "1.2em" }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const LandingPage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.primary",
        }}
      >
        <Header />
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "calc(100vh - 68px)",
            }}
          >
            <Typography
              variant="h3"
              color="text.secondary"
              align="center"
              fontSize={"4.5rem"}
              fontWeight={"600"}
            >
              Find Your Perfect Cup of Coffee
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid
                container
                display={"flex"}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={10}>
                  <Search sx={{ padding: "5px" }}>
                    <SearchIconWrapper>
                      <SearchIcon sx={{ marginBottom: "5px" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      sx={{ fontFamily: "Poppins" }}
                      placeholder="Search Beverage, coffee..."
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
