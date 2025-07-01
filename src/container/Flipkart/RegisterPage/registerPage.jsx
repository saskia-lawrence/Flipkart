import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Paper, Divider, Grid, Link } from "@mui/material";
import ZButton from "../../../components/ZButton/zbutton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { withRouter } from "../../../route/navigation";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import IconButton from "@mui/material/IconButton";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import ZTextField from "../../../components/ZTextFeild/ztextfeild";
import ecommercial from "../../../utils/assets/images/ecommercial.jpg";
import { ApiUrl } from "../../../utils/api/apiUrl";
import { PostApi } from "../../../utils/api/networking";
import { lable } from "../../../utils/constants/lables";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: 0,
      Username: "",
      Email: "",
      Mobile: "",
      Password: "",
      ConfirmPassword: "",
      snackbar: { open: false, message: "", severity: "" },
      errors: {
        Username: "",
        Email: "",
        Mobile: "",
        Password: "",
        ConfirmPassword: "",
      },
      touched: {
        Username: false,
        Email: false,
        Mobile: false,
        Password: false,
        ConfirmPassword: false,
      },
    };
  }

  handleChange = (field, value) => {
    this.setState(
      {
        [field]: value,
        touched: { ...this.state.touched, [field]: true },
      },
      () => {
        if (this.state.touched[field]) {
          this.validateField(field, value);
        }
      }
    );
  };

  validateField = (field, value) => {
    let error = "";
    const stringValue = String(value || "");

    switch (field) {
      case "Username":
        if (!stringValue.trim()) {
          error = lable.required;
        }
        break;
      case "Email":
        if (!stringValue.trim()) {
          error = lable.required;
        } else if (!/\S+@\S+\.\S+/.test(stringValue)) {
          error = lable.login.invalidEmail;
        }
        break;
      case "Mobile":
        if (!value.trim()) {
          error = lable.required;
        } else if (!/^[6-9]\d{9}$/.test(value)) {
          error = lable.register.mobileInvalid;
        }
        break;
      case "Password":
        if (!value.trim()) {
          error = lable.required;
        } else if (value.length < 6) {
          error = lable.login.passwordMinLength;
        } else if (value.length > 10) {
          error = lable.login.passwordMaxLength;
        }
        break;
      case "ConfirmPassword":
        if (!value.trim()) {
          error = lable.resetPassword.confirmPasswordRequired;
        } else if (value !== this.state.Password) {
          error = lable.resetPassword.passwordMismatch;
        }
        break;
      default:
        break;
    }

    this.setState({
      errors: { ...this.state.errors, [field]: error },
    });
  };

  validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!this.state.Username.trim()) {
      newErrors.Username = lable.required;
      valid = false;
    }

    if (!this.state.Email.trim()) {
      newErrors.Email = lable.required;
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(this.state.Email)) {
      newErrors.Email = lable.login.invalidEmail;
      valid = false;
    }

    if (!this.state.Mobile.trim()) {
      newErrors.Mobile = lable.required;
      valid = false;
    } else if (!/^[6-9]\d{9}$/.test(this.state.Mobile)) {
      newErrors.Mobile = lable.register.mobileInvalid;
      valid = false;
    }

    if (!this.state.Password.trim()) {
      newErrors.Password = lable.required;
      valid = false;
    } else if (this.state.Password.length < 6) {
      newErrors.Password = lable.login.passwordMinLength;
      valid = false;
    } else if (this.state.Password.length > 10) {
      newErrors.Password = lable.login.passwordMaxLength;
      valid = false;
    }

    if (!this.state.ConfirmPassword.trim()) {
      newErrors.ConfirmPassword = lable.resetPassword.confirmPasswordRequired;
      valid = false;
    } else if (this.state.ConfirmPassword !== this.state.Password) {
      newErrors.ConfirmPassword = lable.resetPassword.passwordMismatch;
      valid = false;
    }

    this.setState({
      errors: newErrors,
      touched: {
        Username: true,
        Email: true,
        Mobile: true,
        Password: true,
        ConfirmPassword: true,
      },
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

    let params = {
      flag: "I",
      UserId: this.state.UserId,
      Username: this.state.Username,
      Email: this.state.Email,
      Mobile: this.state.Mobile,
      Password: this.state.Password,
      ConfirmPassword: this.state.ConfirmPassword,
    };

    try {
      const response = await PostApi(ApiUrl.AddRegForm, params);

      if (response.status === "S") {
        this.props.navigate("/");
        this.setState({
          snackbar: {
            open: true,
            message: lable.register.success,
            severity: lable.severity.success,
          },
          Username: "",
          Email: "",
          Mobile: "",
          Password: "",
          ConfirmPassword: "",
          errors: {
            Username: "",
            Email: "",
            Mobile: "",
            Password: "",
            ConfirmPassword: "",
          },
          touched: {
            Username: false,
            Email: false,
            Mobile: false,
            Password: false,
            ConfirmPassword: false,
          },
        });
      } else {
        if (
          response.message &&
          response.message.toLowerCase().includes("email")
        ) {
          this.setState({
            Email: "",
            snackbar: {
              open: true,
              message: response.message || lable.register.emailExists,
              severity: lable.severity.error,
            },
          });
        } else {
          this.setState({
            snackbar: {
              open: true,
              message: response.message || lable.register.failed,
              severity: lable.severity.error,
            },
          });
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      this.setState({
        snackbar: {
          open: true,
          message: error.message || lable.register.error,
          severity: lable.severity.error,
        },
      });
    }
  };

  render() {
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
            sx={{
              p: 4,
              backgroundColor: "rgba(255, 255, 255, 0.99)",
              borderRadius: 2,
              position: "relative",
            }}
          >
            <IconButton
              onClick={() => this.props.navigate("/")}
              sx={{
                position: "absolute",
                left: 10,
                top: 3,
                color: "primary.main",
                zIndex: 1,
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <ZTypography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              {lable.register.title}
            </ZTypography>

            <Box
              component="form"
              onSubmit={this.handleSubmit}
              sx={{ textAlign: "left" }}
            >
              <ZTextField
                margin="normal"
                fullWidth
                name="Username"
                label={lable.register.usernameLabel}
                type="text"
                id="Username"
                autoComplete="username"
                maxLength={50}
                value={this.state.Username}
                error={
                  !!this.state.errors.Username && this.state.touched.Username
                }
                helperText={
                  this.state.touched.Username ? this.state.errors.Username : ""
                }
                onChange={(e) => this.handleChange("Username", e.target.value)}
                sx={{ mb: 2 }}
              />

              <ZTextField
                margin="normal"
                fullWidth
                name="Mobile"
                label={lable.register.mobileLabel}
                type="tel"
                id="Mobile"
                autoComplete="tel"
                maxLength={10}
                value={this.state.Mobile}
                error={!!this.state.errors.Mobile && this.state.touched.Mobile}
                helperText={
                  this.state.touched.Mobile ? this.state.errors.Mobile : ""
                }
                onChange={(e) => this.handleChange("Mobile", e.target.value)}
                sx={{ mb: 2 }}
              />

              <ZTextField
                margin="normal"
                fullWidth
                name="Email"
                label={lable.login.emailLabel}
                type="email"
                id="Email"
                autoComplete="email"
                maxLength={50}
                value={this.state.Email}
                error={!!this.state.errors.Email && this.state.touched.Email}
                helperText={
                  this.state.touched.Email ? this.state.errors.Email : ""
                }
                onChange={(e) => this.handleChange("Email", e.target.value)}
                sx={{ mb: 2 }}
              />

              <ZTextField
                margin="normal"
                fullWidth
                name="Password"
                label={lable.login.passwordLabel}
                type="password"
                id="Password"
                maxLength={10}
                autoComplete="new-password"
                error={
                  !!this.state.errors.Password && this.state.touched.Password
                }
                helperText={
                  this.state.touched.Password ? this.state.errors.Password : ""
                }
                value={this.state.Password}
                onChange={(e) => this.handleChange("Password", e.target.value)}
                sx={{ mb: 2 }}
              />

              <ZTextField
                margin="normal"
                fullWidth
                name="ConfirmPassword"
                label={lable.resetPassword.confirmPasswordLabel}
                type="password"
                id="ConfirmPassword"
                maxLength={10}
                autoComplete="new-password"
                error={
                  !!this.state.errors.ConfirmPassword &&
                  this.state.touched.ConfirmPassword
                }
                helperText={
                  this.state.touched.ConfirmPassword
                    ? this.state.errors.ConfirmPassword
                    : ""
                }
                value={this.state.ConfirmPassword}
                onChange={(e) =>
                  this.handleChange("ConfirmPassword", e.target.value)
                }
                sx={{ mb: 2 }}
              />

              <ZButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  backgroundColor: "primary.main",
                  color: "white",
                }}
              >
                {lable.register.submitButton}
              </ZButton>

              <ZTypography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                {lable.register.agreementText}{" "}
                <Link href="#" underline="hover">
                  {lable.login.privacyPolicy}
                </Link>{" "}
                {lable.login.and}{" "}
                <Link href="#" underline="hover">
                  {lable.login.cookiePolicy}
                </Link>
              </ZTypography>
            </Box>
          </Paper>
        </Container>
        <ZToasterMsg
          open={this.state.snackbar.open}
          message={this.state.snackbar.message}
          severity={this.state.snackbar.severity}
          duration={3000}
          position={{ vertical: "bottom", horizontal: "center" }}
          onClose={() =>
            this.setState({
              snackbar: { ...this.state.snackbar, open: false },
            })
          }
        />
      </Box>
    );
  }
}

export default withRouter(RegisterPage);
