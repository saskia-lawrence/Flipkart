import React, { Component } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Link as MuiLink,
  Divider,
  Grid,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ZButton from "../../../components/ZButton/zbutton";
import Google from "@mui/icons-material/Google";
import ZTextField from "../../../components/ZTextFeild/ztextfeild";
import ZCheckbox from "../../../components/ZCheckbox/zcheckbox";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import ecommercial from "../../../utils/assets/images/ecommercial.jpg";
import { ApiUrl } from "../../../utils/api/apiUrl";
import { PostApi } from "../../../utils/api/networking";
import { lable } from "../../../utils/constants/lables";
import ZTypography from "../../../components/ZTyptography/ztyptography";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Email: "",
        Password: "",
        rememberMe: true,
      },
      errors: { Email: "", Password: "" },
      touched: { Email: false, Password: false },
      snackbar: {
        open: false,
        message: "",
        severity: "",
      },
    };

    this.navigate = props.navigate;
    this.location = props.location;
  }

  handleChange = (field, value) => {
    this.setState(
      (prevState) => ({
        form: { ...prevState.form, [field]: value },
        touched: { ...prevState.touched, [field]: true },
      }),
      () => this.validateField(field, value)
    );
  };

  validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "Email":
        if (!value) error = lable.required;
        else if (!/\S+@\S+\.\S+/.test(value)) error = lable.login.invalidEmail;
        break;
      case "Password":
        if (!value) error = lable.required;
        else if (value.length < 6) error = lable.login.passwordMinLength;
        else if (value.length > 10) error = lable.login.passwordMaxLength;
        break;
      default:
        break;
    }

    this.setState((prevState) => ({
      errors: { ...prevState.errors, [field]: error },
    }));
  };

  validateForm = () => {
    const { Email, Password } = this.state.form;
    let valid = true;
    const newErrors = { Email: "", Password: "" };

    if (!Email) {
      newErrors.Email = lable.required;
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      newErrors.Email = lable.login.invalidEmail;
      valid = false;
    }

    if (!Password) {
      newErrors.Password = lable.required;
      valid = false;
    } else if (Password.length < 6) {
      newErrors.Password = lable.login.passwordMinLength;
      valid = false;
    } else if (Password.length > 10) {
      newErrors.Password = lable.login.passwordMaxLength;
      valid = false;
    }

    this.setState({
      errors: newErrors,
      touched: { Email: true, Password: true },
    });

    return valid;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (!this.validateForm()) {
      this.setState({
        snackbar: {
          open: true,
          message: lable.login.formErrors,
          severity: lable.severity.error,
        },
      });
      return;
    }

    try {
      const response = await PostApi(ApiUrl.LoginViaUsernameAndPassword, {
        Email: this.state.form.Email,
        Password: this.state.form.Password,
      });

      const success = response?.data?.table1?.[0]?.status === "S";

      if (success) {
        const userData =
          response.data.table0.find(
            (user) => user.Email === this.state.form.Email
          ) || {};

        const { UserName, Email, Mobile } = userData;

        this.setState({
          snackbar: {
            open: true,
            message: response.data.table1[0]?.message || lable.login.success,
            severity: lable.severity.success,
          },
        });

        setTimeout(() => {
          this.navigate("/dashboard", {
            state: {
              user: {
                username: UserName,
                email: Email,
                mobile: Mobile,
              },
            },
          });
        }, 1500);
      } else {
        this.setState({
          snackbar: {
            open: true,
            message:
              response?.message ||
              response?.data?.table1?.[0]?.message ||
              lable.login.invalidCredentials,
            severity: lable.severity.error,
          },
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      this.setState({
        snackbar: {
          open: true,
          message: error.message || lable.login.failed,
          severity: lable.severity.error,
        },
      });
    }
  };
  validateEmailOnly = () => {
    const { Email } = this.state.form;
    let valid = true;
    let error = "";

    if (!Email) {
      error = lable.required;
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      error = lable.login.invalidEmail;
      valid = false;
    }

    this.setState(
      (prevState) => ({
        errors: { ...prevState.errors, Email: error },
        touched: { ...prevState.touched, Email: true },
      }),
      () => valid
    );
  };

  handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!this.state.form.Email) {
      this.setState({
        errors: { ...this.state.errors, Email: lable.required },
        touched: { ...this.state.touched, Email: true },
        snackbar: {
          open: true,
          message: lable.login.enterEmail,
          severity: lable.severity.error,
        },
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(this.state.form.Email)) {
      this.setState({
        errors: { ...this.state.errors, Email: lable.login.validEmail },
        touched: { ...this.state.touched, Email: true },
        snackbar: {
          open: true,
          message: lable.login.validEmail,
          severity: lable.severity.error,
        },
      });
      return;
    }

    try {
      const response = await PostApi(ApiUrl.UserNameCheck, {
        Email: this.state.form.Email,
      });

      if (response?.exists === 1) {
        this.navigate("/otpverification", {
          state: {
            Email: this.state.form.Email,
            resetOtp: true,
            from: this.location.pathname,
          },
        });
      } else {
        this.setState({
          snackbar: {
            open: true,
            message: lable.login.emailNotFound,
            severity: lable.severity.error,
          },
        });
      }
    } catch (error) {
      this.setState({
        snackbar: {
          open: true,
          message: lable.login.emailCheckError,
          severity: lable.severity.error,
        },
      });
    }
  };

  handleSnackbarClose = () => {
    this.setState((prevState) => ({
      snackbar: { ...prevState.snackbar, open: false },
    }));
  };

  render() {
    const { form, errors, touched, snackbar } = this.state;

    return (
      <Box
        sx={{
          backgroundImage: `url(${ecommercial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}
          >
            {/* Main Title */}
            <ZTypography
              flag={lable.mainheader}
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: "24px" }}
            >
              {lable.login.title}
            </ZTypography>

            {/* New User Text */}
            <ZTypography flag={lable.label} gutterBottom>
              {lable.login.newUser}{" "}
              <ZTypography
                component={Link}
                to="/register"
                color="primary"
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  display: "inline",
                }}
                flag={lable.label}
              >
                {lable.login.registerNow}
              </ZTypography>
            </ZTypography>

            {/* Google Button (unchanged) */}
            <ZButton
              variant="outlined"
              fullWidth
              startIcon={
                <Google
                  sx={{
                    color: "#4285F4",
                    background: "#fff",
                    borderRadius: "50%",
                    p: 0.5,
                  }}
                />
              }
              sx={{ textTransform: "none", borderColor: "#ddd", mb: 2 }}
            >
              {lable.login.continueWithGoogle}
            </ZButton>

            {/* Divider with OR text */}
            <Divider sx={{ my: 2 }}>
              <ZTypography flag={lable.label} color="text.secondary">
                {lable.login.or}
              </ZTypography>
            </Divider>

            <Box component="form" onSubmit={this.handleSubmit}>
              {/* Form fields (unchanged) */}
              <ZTextField
                fullWidth
                label={lable.login.emailLabel}
                type="email"
                value={form.Email}
                error={!!errors.Email && touched.Email}
                helperText={touched.Email ? errors.Email : ""}
                onChange={(e) => this.handleChange("Email", e.target.value)}
              />

              <ZTextField
                fullWidth
                label={lable.login.passwordLabel}
                type="password"
                value={form.Password}
                error={!!errors.Password && touched.Password}
                helperText={touched.Password ? errors.Password : ""}
                onChange={(e) => this.handleChange("Password", e.target.value)}
                sx={{ mt: 2 }}
              />

              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{ mt: 1 }}
              >
                <Grid item>
                  <ZCheckbox
                    name="rememberMe"
                    label={lable.login.rememberMe}
                    checked={form.rememberMe}
                    onChange={(e) =>
                      this.setState((prevState) => ({
                        form: {
                          ...prevState.form,
                          rememberMe: e.target.checked,
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
                  <ZTypography
                    component="button"
                    onClick={this.handleForgotPassword}
                    color="primary"
                    flag={lable.label}
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      border: "none",
                      background: "none",
                      p: 0,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {lable.login.forgotPassword}
                  </ZTypography>
                </Grid>
              </Grid>

              <ZButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                {lable.login.signIn}
              </ZButton>

              {/* Footer Agreement Text */}
              <ZTypography flag={lable.label} align="center" sx={{ mt: 2 }}>
                {lable.login.agreementText}{" "}
                <ZTypography
                  component="a"
                  href="#"
                  color="primary"
                  flag={lable.label}
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    display: "inline",
                  }}
                >
                  {lable.login.privacyPolicy}
                </ZTypography>{" "}
                {lable.login.and}{" "}
                <ZTypography
                  component="a"
                  href="#"
                  color="primary"
                  flag={lable.label}
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    display: "inline",
                  }}
                >
                  {lable.login.cookiePolicy}
                </ZTypography>
                .
              </ZTypography>
            </Box>
          </Paper>
        </Container>

        <ZToasterMsg
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          duration={3000}
          position={{ vertical: "bottom", horizontal: "center" }}
          onClose={this.handleSnackbarClose}
        />
      </Box>
    );
  }
}

// Wrapper component remains the same
function LoginPageWrapper(props) {
  const navigate = useNavigate();
  const location = useLocation();
  return <LoginPage {...props} navigate={navigate} location={location} />;
}

export default LoginPageWrapper;
