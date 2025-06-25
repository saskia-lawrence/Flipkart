// import React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import {
//   Paper,
//   Typography,
//   Link,
//   Grid,
//   IconButton,
//   Stack,
// } from "@mui/material";
// import ZButton from "../../../components/ZButton/zbutton";
// import { withRouter } from "../../../route/navigation";
// import ZTextField from "../../../components/ZTextFeild/ztextfeild";
// import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
// import ecommercial from "../../../utils/assets/images/ecommercial.jpg";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import EmailIcon from "@mui/icons-material/Email";

// class ForgetPassword extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       snackbar: { open: false, message: "", severity: "" },
//       errors: {},
//     };
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     if (this.validateForm()) {
//       this.props.navigate("otpverification", {
//         state: { email: this.state.email },
//       });
//       this.setState({
//         snackbar: {
//           open: true,
//           message: "OTP sent to your registered email!",
//           severity: "success",
//         },
//         email: "",
//       });
//     } else {
//       this.setState({
//         snackbar: {
//           open: true,
//           message: "Please enter a valid email address",
//           severity: "error",
//         },
//       });
//     }
//   };

//   validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!this.state.email) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
//       newErrors.email = "Email is invalid";
//       valid = false;
//     }

//     this.setState({ errors: newErrors });
//     return valid;
//   };

//   handleBackToLogin = () => {
//     this.props.navigate("/");
//   };

//   render() {
//     return (
//       <Box
//         sx={{
//           backgroundImage: `url(${ecommercial})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Container maxWidth="sm">
//           <Paper
//             elevation={3}
//             sx={{
//               p: 4,
//               backgroundColor: "rgba(255, 255, 255, 0.99)",
//               borderRadius: 2,
//             }}
//           >
//             <Typography
//               variant="h4"
//               component="h1"
//               gutterBottom
//               sx={{ textAlign: "left", fontWeight: "bold", mb: 1 }}
//             >
//               Forgot Password
//             </Typography>

//             <Typography
//               variant="body1"
//               component="p"
//               gutterBottom
//               sx={{ textAlign: "left", mb: 3 }}
//             >
//               To recover password please enter your registered email and we will
//               send you OTP to your registered email
//             </Typography>

//             <Box
//               component="form"
//               onSubmit={this.handleSubmit}
//               sx={{ textAlign: "left" }}
//             >
//               <ZTextField
//                 margin="normal"
//                 fullWidth
//                 name="email"
//                 label="Email"
//                 type="email"
//                 id="email"
//                 autoComplete="email"
//                 maxlength={50}
//                 value={this.state.email}
//                 error={!!this.state.errors.email}
//                 helperText={this.state.errors.email}
//                 onChange={(e) => this.setState({ email: e })}
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   startAdornment: (
//                     <EmailIcon sx={{ color: "action.active", mr: 1 }} />
//                   ),
//                 }}
//               />

//               <ZButton
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 label="Submit"
//                 sx={{
//                   mt: 3,
//                   mb: 2,
//                   py: 1.5,
//                   backgroundColor: "primary.main",
//                   color: "white",
//                 }}
//               >
//                 Submit
//               </ZButton>

//               <Stack
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="center"
//                 spacing={1}
//                 sx={{ mt: 3, cursor: "pointer" }}
//                 onClick={this.handleBackToLogin}
//               >
//                 <ArrowBackIcon fontSize="small" />
//                 <Typography variant="body2">Back to Login</Typography>
//               </Stack>
//             </Box>
//           </Paper>
//         </Container>
//         <ZToasterMsg
//           open={this.state.snackbar.open}
//           message={this.state.snackbar.message}
//           severity={this.state.snackbar.severity}
//           duration={3000}
//           position={{ vertical: "bottom", horizontal: "center" }}
//           onClose={() =>
//             this.setState({
//               snackbar: { ...this.state.snackbar, open: false },
//             })
//           }
//         />
//       </Box>
//     );
//   }
// }

// export default withRouter(ForgetPassword);
