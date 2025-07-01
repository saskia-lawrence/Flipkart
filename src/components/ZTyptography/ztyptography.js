import React from "react";
import { Typography as MuiTypography } from "@mui/material";

const ZTypography = (props) => {
  return (
    <MuiTypography
      variant={props.variant}
      color="#424242"
      align={props.align || "center"}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize || "20px"}
      gutterBottom={props.gutterBottom}
      style={{ ...props.style }}
      {...props}
    >
      {props.children}
    </MuiTypography>
  );
};

export default ZTypography;
