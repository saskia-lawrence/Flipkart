import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function ZAutocomplete(props) {
  const {
    options = [],
    value = null,
    onChange = () => {},
    label = "",
    placeholder = "",
    error = false,
    helperText = "",
    disabled = false,
    getOptionLabel,
    required = false,
  } = props;

  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      sx={{ minWidth: 200 }}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          disabled={disabled}
          required={required}
        />
      )}
      fullWidth
    />
  );
}
