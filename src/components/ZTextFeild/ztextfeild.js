import React from "react";
import TextField from "@mui/material/TextField";

const ZTextField = React.forwardRef((props, ref) => {
  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e); 
    }
  };

  return (
    <TextField
      fullWidth
      inputRef={ref}
      label={props?.label}
      name={props?.label || props.name}
      value={props?.value}
      onChange={handleChange} 
      required={props.required}
      variant={props.variant || "outlined"}
      error={props?.error}
      placeholder={props?.placeholder}
      helperText={props?.helperText}
      maxLength={props.maxLength}
      inputProps={props.inputProps}
      sx={props.sx}
      type={props.type}
      InputProps={props.InputProps}
    />
  );
});

export default ZTextField;