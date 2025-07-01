import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Paper, Divider, Grid, Link, IconButton } from "@mui/material";
import ZButton from "../../../components/ZButton/zbutton";
import { useNavigate, useLocation } from "react-router-dom";
import ZTextField from "../../../components/ZTextFeild/ztextfeild";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import ecommercial from "../../../utils/assets/images/ecommercial.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import { PostApi } from "../../../utils/api/networking";
import { ApiUrl } from "../../../utils/api/apiUrl";
import { lable } from "../../../utils/constants/lables";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: props.location?.state?.Email || "",
      Password: "",
      ConfirmPassword: "",
      snackbar: { open: false, message: "", severity: "" },
      errors: {},
      isLoading: false,
    };
  }

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
      errors: { ...this.state.errors, [field]: "" },
    });
  };

  validateForm = () => {
    let valid = true;
    const newErrors = {};
    const { resetPassword } = lable;

    if (!this.state.Password) {
      newErrors.Password = resetPassword.newPasswordLabel + " is required";
      valid = false;
    } else if (this.state.Password.length < 8) {
      newErrors.Password = "Password must be at least 8 characters";
      valid = false;
    }

    if (!this.state.ConfirmPassword) {
      newErrors.ConfirmPassword = resetPassword.confirmPasswordRequired;
      valid = false;
    } else if (this.state.Password !== this.state.ConfirmPassword) {
      newErrors.ConfirmPassword = resetPassword.passwordMismatch;
      valid = false;
    }

    this.setState({ errors: newErrors });
    return valid;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (!this.validateForm()) return;

    this.setState({ isLoading: true });

    try {
      const params = {
        Flag: "U",
        Email: this.state.Email,
        Password: this.state.Password,
        ConfirmPassword: this.state.ConfirmPassword,
      };

      const response = await PostApi(ApiUrl.AddRegForm, params);

      if (
        response &&
        (response === "S" || response.status === "S" || response.data === "S")
      ) {
        this.setState({
          snackbar: {
            open: true,
            message: lable.resetPassword.successMessage,
            severity: lable.severity.success,
          },
          Password: "",
          ConfirmPassword: "",
        });

        setTimeout(() => {
          this.props.navigate("/");
        }, 1500);
      } else {
        this.setState({
          snackbar: {
            open: true,
            message:
              response?.message ||
              "Password reset completed but with unexpected response",
            severity: lable.severity.warning,
          },
        });
      }
    } catch (error) {
      console.error("Password reset error:", error);
      this.setState({
        snackbar: {
          open: true,
          message: error.message || "An error occurred during password reset",
          severity: lable.severity.error,
        },
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleBack = () => {
    this.props.navigate("/otpverification", {
      state: {
        resetOtp: true,
        Email: this.state.Email,
      },
    });
  };

  render() {
    const { resetPassword } = lable;

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
              onClick={this.handleBack}
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <ZTypography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mb: 1,
                px: 4,
              }}
            >
              {resetPassword.title}
            </ZTypography>

            <ZTypography
              variant="body1"
              component="p"
              gutterBottom
              sx={{ textAlign: "center", mb: 3 }}
            >
              {resetPassword.instruction}
            </ZTypography>

            <Box
              component="form"
              onSubmit={this.handleSubmit}
              sx={{ textAlign: "left" }}
            >
              <ZTextField
                margin="normal"
                fullWidth
                name="Password"
                label={resetPassword.newPasswordLabel}
                type="password"
                id="Password"
                autoComplete="new-password"
                value={this.state.Password}
                error={!!this.state.errors.Password}
                helperText={this.state.errors.Password}
                onChange={(e) => this.handleChange("Password", e.target.value)}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <LockIcon sx={{ color: "action.active", mr: 1 }} />
                  ),
                }}
              />

              <ZTextField
                margin="normal"
                fullWidth
                name="ConfirmPassword"
                label={resetPassword.confirmPasswordLabel}
                type="password"
                id="ConfirmPassword"
                autoComplete="new-password"
                value={this.state.ConfirmPassword}
                error={!!this.state.errors.ConfirmPassword}
                helperText={this.state.errors.ConfirmPassword}
                onChange={(e) =>
                  this.handleChange("ConfirmPassword", e.target.value)
                }
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <LockIcon sx={{ color: "action.active", mr: 1 }} />
                  ),
                }}
              />

              <ZButton
                type="submit"
                fullWidth
                variant="contained"
                label={
                  this.state.isLoading
                    ? resetPassword.processing
                    : resetPassword.submitButton
                }
                disabled={this.state.isLoading}
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  backgroundColor: "primary.main",
                  color: "white",
                }}
              />
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

// Wrapper component to use hooks
function ResetPasswordWrapper(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return <ResetPassword {...props} navigate={navigate} location={location} />;
}

export default ResetPasswordWrapper;
