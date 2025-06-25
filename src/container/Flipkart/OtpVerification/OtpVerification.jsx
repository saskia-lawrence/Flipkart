import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Paper, Typography, Stack, Button, IconButton } from "@mui/material";
import ZButton from "../../../components/ZButton/zbutton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate, useLocation } from "react-router-dom";
import ZTextField from "../../../components/ZTextFeild/ztextfeild";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import ecommercial from "../../../utils/assets/images/ecommercial.jpg";
import { lable } from "../../../utils/constants/lables";

class OtpVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ["", "", "", "", "", ""],
      snackbar: { open: false, message: "", severity: "" },
      errors: {},
      timer: 60,
      isTimerRunning: true,
      isOtpWrong: false,
    };
    this.otpInputRefs = Array(6)
      .fill()
      .map(() => React.createRef());
    this.timerInterval = null;
  }

  componentDidMount() {
    this.startTimer();
    const { location } = this.props;
    if (location?.state?.resetOtp) {
      this.setState({ otp: ["", "", "", "", "", ""] });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  startTimer = () => {
    this.setState({ timer: 60, isTimerRunning: true });
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.timer <= 1) {
          clearInterval(this.timerInterval);
          return { timer: 0, isTimerRunning: false };
        }
        return { timer: prevState.timer - 1 };
      });
    }, 1000);
  };

  handleResendClick = () => {
    this.startTimer();
    this.setState({
      otp: ["", "", "", "", "", ""],
      isOtpWrong: false,
      snackbar: {
        open: true,
        message: "OTP resent successfully!",
        severity: lable.severity.success,
      },
    });
  };

  handleOtpChange = (index, e) => {
    const value = typeof e === "object" ? e?.target?.value : e;

    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...this.state.otp];
      newOtp[index] = value.slice(0, 1);
      this.setState({ otp: newOtp, isOtpWrong: false });

      if (value && index < 5) {
        setTimeout(() => {
          const nextInput =
            this.otpInputRefs[index + 1]?.current?.querySelector("input");
          nextInput?.focus();
        }, 0);
      }
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const otpCode = this.state.otp.join("");
    const { navigate, location } = this.props;

    if (otpCode === "123456") {
      this.setState({
        snackbar: {
          open: true,
          message: "OTP verified successfully!",
          severity: lable.severity.success,
        },
      });

      navigate("/resetpassword", {
        state: {
          Email: location?.state?.Email || "",
        },
      });
    } else {
      this.setState(
        {
          otp: ["", "", "", "", "", ""],
          isOtpWrong: true,
          snackbar: {
            open: true,
            message: "Invalid OTP. Please try again.",
            severity: lable.severity.error,
          },
        },
        () => {
          if (this.otpInputRefs[0]?.current) {
            const firstInput =
              this.otpInputRefs[0].current.querySelector("input");
            firstInput?.focus();
          }
        }
      );
    }
  };

  handleBack = () => {
    this.props.navigate("/");
  };

  render() {
    const { timer, isTimerRunning, isOtpWrong } = this.state;

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
                color: "text.primary",
              }}
            >
              <ArrowBack />
            </IconButton>

            <Typography
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
              {lable.otpVerification.title}
            </Typography>

            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={{ textAlign: "left", mb: 3 }}
            >
              {lable.otpVerification.message}
            </Typography>

            <Box
              component="form"
              onSubmit={this.handleSubmit}
              sx={{ textAlign: "left" }}
            >
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mb: 2 }}
              >
                {this.state.otp.map((digit, index) => (
                  <ZTextField
                    key={index}
                    ref={this.otpInputRefs[index]}
                    value={digit}
                    onChange={(e) => this.handleOtpChange(index, e)}
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: "center", fontSize: "1.5rem" },
                    }}
                    sx={{
                      width: "50px",
                      height: "50px",
                      "& .MuiInputBase-root": {
                        height: "100%",
                      },
                      "& .MuiInputBase-input": {
                        textAlign: "center",
                        height: "100%",
                        padding: 0,
                      },
                      "& fieldset": {
                        borderColor: isOtpWrong ? "error.main" : undefined,
                      },
                    }}
                    error={isOtpWrong}
                  />
                ))}
              </Stack>

              {isOtpWrong && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{ textAlign: "center", mb: 2 }}
                >
                  {lable.otpVerification.invalidOtp}
                </Typography>
              )}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                sx={{ mb: 3 }}
              >
                <Typography variant="body2">
                  {isTimerRunning
                    ? `${lable.otpVerification.resendTimer} ${timer} ${lable.otpVerification.seconds}`
                    : lable.otpVerification.didNotReceive}
                </Typography>
                {!isTimerRunning && (
                  <Button
                    variant="text"
                    onClick={this.handleResendClick}
                    sx={{ minWidth: 0, color: "primary.main" }}
                  >
                    {lable.otpVerification.resend}
                  </Button>
                )}
              </Stack>

              <ZButton
                type="submit"
                fullWidth
                variant="contained"
                label={lable.otpVerification.confirm}
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  backgroundColor: "primary.main",
                  color: "white",
                }}
              >
                {lable.otpVerification.confirm}
              </ZButton>
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

// Create a wrapper component to use hooks
function OtpVerificationWrapper(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return <OtpVerification {...props} navigate={navigate} location={location} />;
}

export default OtpVerificationWrapper;
