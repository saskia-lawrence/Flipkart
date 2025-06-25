import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { isNotEmpty } from "../../utils/commonFunction/common";

const ZDropdown = (props) => {
  const onChange = (e) => {
    props?.onChange(e.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel>{props?.label}</InputLabel>
      <Select
        name={props?.name || props?.label}
        value={props?.value || ""}
        onChange={(e) => {
          onChange(e);
        }}
        sx={{ minWidth: 200 }}
        label={props?.label}
      >
        <MenuItem value="">--select--</MenuItem>
        {isNotEmpty(props?.options)
          ? props.options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option?.label}
              </MenuItem>
            ))
          : null}
      </Select>
      {props?.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
};

export default ZDropdown;
