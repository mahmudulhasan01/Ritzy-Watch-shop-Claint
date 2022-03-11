import { Box, Button, Container, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    // loginUser(
    //   loginData.email,
    //   loginData.password
    //   //  location, history
    // );
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <h3 className="mt-5 fw-bold text-center">Please Login </h3>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 1, md: 1 }}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <Box>
                <Grid container spacing={2}>
                  <form onSubmit={handleLoginSubmit}>
                    <TextField
                      sx={{ width: "75%", m: 3 }}
                      id="standard-basic"
                      label="Your Email"
                      name="email"
                      onBlur={handleOnBlur}
                      variant="standard"
                    />
                    <br />
                    <TextField
                      sx={{ width: "75%", m: 3 }}
                      id="standard-basic"
                      label="Your Password"
                      type="password"
                      name="password"
                      onBlur={handleOnBlur}
                      variant="standard"
                    />
                    <br /> <br />
                    <button type="submit" class="btn btn-dark px-5 w-75 ">
                      Login
                    </button>
                    <br /> <br />
                    <NavLink style={{ textDecoration: "none" }} to="/register">
                      <Button className="fw-bold" variant="text">
                        New User? Please Register
                      </Button>
                    </NavLink>
                    {/* {isLoading && <CircularProgress />} */}
                    {/* {user?.email && (
                      <Alert severity="success">Login successfully!</Alert>
                    )} */}
                    {/* {authError && <Alert severity="error">{authError}</Alert>} */}
                  </form>
                </Grid>
                <br />

                <button
                  // onClick={handleGoogleLogin}
                  className="bg-dark rounded p-1 px-3 me-4 btn"
                >
                  <i className="fab fa-google text-warning fs-3"></i>
                </button>
                <button
                  // onClick={handleGoogleLogin}
                  className="bg-dark rounded p-1 px-3 me-4 btn"
                >
                  <i className="fab fa-github text-warning fs-3"></i>
                </button>
                <button
                  // onClick={handleGoogleLogin}
                  className="bg-dark rounded p-1 px-3 me-4 btn"
                >
                  <i className="fab  fa-facebook-f text-warning fs-3"></i>
                </button>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img
              className="img-fluid mt-n1"
              src="https://i.ibb.co/R6mfVhF/loginimages.jpg"
              width="550px"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
