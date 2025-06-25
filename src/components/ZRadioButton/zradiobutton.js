import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { isNotEmpty } from "../../utils/commonFunction/common";

const ZRadioButton = (props) => {
  const onChange = (e) => {
    props?.onChange(e.target.value);
  };
  return (
    <FormControl fullWidth>
      {props.label && <FormLabel>{props.label}</FormLabel>}
      <RadioGroup
        row
        style={{ width: "100%" }}
        name={props.name}
        value={props?.value || ""}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {isNotEmpty(props?.options)
          ? props.options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))
          : null}
      </RadioGroup>
      {props?.helperText && (
        <span style={{ color: "red", fontSize: "0.8em" }}>
          {props.helperText}
        </span>
      )}
    </FormControl>
  );
};

export default ZRadioButton;
