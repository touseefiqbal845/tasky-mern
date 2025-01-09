import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bgimg from "../../assets/backimage.webp";

import bg from "../../assets/sigin.avif";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import authService from "../../services/MauthServices";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  width: "40%",
  height: "90%",
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: "16px",
  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
  // padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const center = {
  position: "relative",
  top: "50%",
  left: "30%",
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const [loginError, setLoginError] = useState("");
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError({
      email: false,
      password: false,
    });

    const { email, password } = values;

    if (!email || !password) {
      setError((prev) => ({
        ...prev,
        email: !email,
        password: !password,
      }));

      return;
    }

    try {
      const data = { email, password };
      console.log("Request Data:", data);
      const response = await authService.login(data);
      console.log("Response:", response);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setLoginError(
        error.response?.data?.message || "Login failed. Please try again."
      );
      console.error("Login Error:", error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Failed! Enter correct username and password.
        </Alert>
      </Snackbar>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(10px)",
          webkitBackdropFilter: "blur(10px)",
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={12}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                }}
              >
                <Container>
                  <Box height={35} />
                  <Box sx={center}>
                    <Avatar
                      sx={{
                        ml: "85px",
                        mb: "4px",
                        bgcolor: "rgb(255, 192, 0)",
                      }}
                    >
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                      component="h1"
                      variant="h4"
                      sx={{
                        color: "black",
                        ml: "50px",
                      }}
                    >
                      Sign In
                    </Typography>
                  </Box>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 2 }}
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <CustomInput
                          name="email"
                          type="email"
                          title="Email"
                          error={error.email}
                          inputFontSize={12}
                          placeholder="Email"
                          height="1.7vh"
                          fontWeight={400}
                          fontSize={14}
                          showLabel={true}
                          value={values.email}
                          onChange={handleChange}
                          helperText="Email is required"
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <CustomInput
                          name="password"
                          type="email"
                          title="Password"
                          error={error.password}
                          inputFontSize={12}
                          placeholder="Password"
                          height="1.7vh"
                          fontWeight={400}
                          fontSize={14}
                          showLabel={true}
                          value={values.password}
                          onChange={handleChange}
                          helperText="Paasword is required"
                        />
                        <div>
                          {loginError && (
                            <Typography
                              variant="body2"
                              color="error"
                              sx={{ mt: 2, textAlign: "center" }}
                            >
                              {loginError}
                            </Typography>
                          )}
                        </div>
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <Stack direction="row" spacing={2}>
                          <FormControlLabel
                            sx={{ width: "60%", color: "black" }}
                            onClick={() => setRemember(!remember)}
                            control={<Checkbox checked={remember} />}
                            label="Remember me"
                          />
                          <Typography
                            variant="body1"
                            component="span"
                            sx={{
                              color: "black",
                            }}
                            onClick={() => {
                              navigate("/forgot-password");
                            }}
                            style={{
                              marginTop: "10px",
                              cursor: "pointer",
                              color: "rgb(255, 192, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Forgot password?
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "5em" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth="true"
                          size="large"
                          sx={{
                            mt: "15px",
                            // mr: "20px",
                            borderRadius: 28,
                            color: "black",
                            minWidth: "170px",
                            backgroundColor: "rgb(255, 192, 0)",
                          }}
                        >
                          Sign In
                        </Button>
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <Stack direction="row" spacing={2}>
                          <Typography
                            variant="body2"
                            sx={{
                              mt: 2,
                              color: "#555",
                              textAlign: "center",
                            }}
                          >
                            Not registered yet?{" "}
                            <span
                              style={{
                                color: "rgb(255, 192, 0)",
                                cursor: "pointer",
                              }}
                              onClick={() => navigate("/")}
                            >
                              Create an account
                            </span>
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
