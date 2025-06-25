import React from "react";
import ZTextField from "../components/ZTextFeild/ztextfeild";
import ZDropdown from "../components/ZDropdown/zdropdown";
import ZButton from "../components/ZButton/zbutton";
import ZDatePicker from "../components/ZDatePicker/zdatepicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import ZRadioButton from "../components/ZRadioButton/zradiobutton";
import ZToasterMsg from "../components/ZTosterMessage/ztostermsg";
import Zcheckbox from "../components/ZCheckbox/zcheckbox";
import { Card, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      dob: null,
      gender: "",
      isActive: false,
      snackbar: { open: false, message: "", severity: "success" },
      cities: [
        { id: 1, cName: "Chennai" },
        { id: 2, cName: "Madurai" },
        { id: 3, cName: "Dindigul" },
        { id: 4, cName: "Theni" },
      ],
      genderRb: ["Male", "Female", "others"],
      errors: {
        name: "",
        city: "",
        dob: "",
        gender: "",
      },
      touched: {
        name: false,
        city: false,
        dob: false,
        gender: false,
      },
    };
  }

  validate = () => {
    const errors = {
      name: "",
      city: "",
      dob: "",
      gender: "",
    };
    let isValid = true;

    // Name validation
    if (!this.state.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (this.state.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    // City validation
    if (!this.state.city) {
      errors.city = "City is required";
      isValid = false;
    }

    // Date of Birth validation
    if (!this.state.dob) {
      errors.dob = "Date of Birth is required";
      isValid = false;
    }

    // Gender validation
    if (!this.state.gender) {
      errors.gender = "Gender is required";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleBlur = (field) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
    this.validate();
  };

  btnHandler = (e) => {
    e.preventDefault();

    // Mark all fields as touched to show all errors
    this.setState(
      {
        touched: {
          name: true,
          city: true,
          dob: true,
          gender: true,
        },
      },
      () => {
        if (this.validate()) {
          this.setState({
            snackbar: {
              open: true,
              message: "Form submitted successfully!",
              severity: "success",
            },
            name: "",
            city: "",
            dob: null,
            gender: "",
            isActive: false,
            errors: {
              name: "",
              city: "",
              dob: "",
              gender: "",
            },
            touched: {
              name: false,
              city: false,
              dob: false,
              gender: false,
            },
          });
        } else {
          this.setState({
            snackbar: {
              open: true,
              message: "Please fix the errors in the form",
              severity: "error",
            },
          });
        }
      }
    );
  };

  render() {
    const cityOptions = this.state.cities.map((city) => ({
      value: city.id,
      label: city.cName,
    }));
    const genderOptions = this.state.genderRb.map((gender) => ({
      value: gender,
      label: gender,
    }));
    const eighteenYearsAgo = dayjs().subtract(18, "year");

    return (
      <React.Fragment>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Card
            sx={{
              maxWidth: 900,
              minHeight: 300,
              mx: "auto",
              mt: 6,
              p: 3,
              boxShadow: 3,
            }}
          >
            {/* Title (centered at the top) */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", mb: 4 }}
              color="primary"
              fontWeight="bold"
            >
              Sample Design
            </Typography>

            {/* Form Grid */}
            <Grid container spacing={3}>
              {/* Row 1: Name, City, DOB */}
              <Grid item xs={12} sm={6} md={4}>
                <ZTextField
                  label="Name"
                  name="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e })}
                  onBlur={() => this.handleBlur("name")}
                  error={this.state.touched.name && !!this.state.errors.name}
                  helperText={this.state.touched.name && this.state.errors.name}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ZDropdown
                  label="City"
                  name="City"
                  value={this.state.city}
                  options={cityOptions}
                  onChange={(e) => this.setState({ city: e.target.value })}
                  onBlur={() => this.handleBlur("city")}
                  error={this.state.touched.city && !!this.state.errors.city}
                  helperText={this.state.touched.city && this.state.errors.city}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ZDatePicker
                  label="Date of Birth"
                  name="Dob"
                  value={this.state.dob}
                  onChange={(newDate) => this.setState({ dob: newDate })}
                  onBlur={() => this.handleBlur("dob")}
                  error={this.state.touched.dob && !!this.state.errors.dob}
                  helperText={this.state.touched.dob && this.state.errors.dob}
                  maxDate={eighteenYearsAgo}
                  fullWidth
                />
              </Grid>

              {/* Row 2: Radio Buttons (Gender) */}
              <Grid item xs={12}>
                <ZRadioButton
                  label="Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={(e) => this.setState({ gender: e.target.value })}
                  onBlur={() => this.handleBlur("gender")}
                  error={
                    this.state.touched.gender && !!this.state.errors.gender
                  }
                  helperText={
                    this.state.touched.gender && this.state.errors.gender
                  }
                  options={genderOptions}
                />
              </Grid>

              {/* Row 3: Checkbox (Active) */}
              <Grid item xs={12}>
                <Zcheckbox
                  label="Active"
                  name="isActive"
                  checked={this.state.isActive}
                  onChange={(e) =>
                    this.setState({ isActive: e.target.checked })
                  }
                />
              </Grid>

              {/* Submit Button (right-aligned) */}
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                  <ZButton
                    label="Submit"
                    variant="contained"
                    onClick={this.btnHandler}
                  >
                    Submit
                  </ZButton>
                </Box>
              </Grid>
            </Grid>

            {/* Toast Message (hidden by default) */}
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
          </Card>
        </LocalizationProvider>
      </React.Fragment>
    );
  }
}

export default Sample;
