import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ZTextField = React.forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const isPasswordField =
    props.label?.toLowerCase?.() === "password" ||
    props.name?.toLowerCase?.() === "password" ||
    props.label?.toLowerCase?.() === "confirm password" ||
    props.name?.toLowerCase?.() === "confirm password";

  return (
    <TextField
      fullWidth
      inputRef={ref}
      label={props.label}
      name={props.name}
      value={props.value || ""}
      onChange={handleChange}
      required={props.required}
      variant={props.variant || "outlined"}
      error={props.error}
      placeholder={props.placeholder}
      helperText={props.helperText}
      type={
        isPasswordField
          ? showPassword
            ? "text"
            : "password"
          : props.type || "text"
      }
      inputProps={{ maxLength: props.maxLength, ...props.inputProps }}
      sx={props.sx}
      InputProps={{
        ...props.InputProps,
        endAdornment: isPasswordField ? (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ) : (
          props.InputProps?.endAdornment
        ),
      }}
    />
  );
});

export default ZTextField;
