import React from "react";
import { Snackbar, Alert } from "@mui/material";

const ZToasterMsg = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.duration}
      onClose={props.onClose}
      anchorOrigin={props.position}
    >
      <Alert
        onClose={props.onClose}
        severity={props.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default ZToasterMsg;
