import { Button } from "@mui/material";
import { isNotEmpty } from "../../utils/commonFunction/common";

export default function ZButton(props) {
  return (
    <Button
      {...props}
      label={props?.label}
      variant={props.variant || "contained"}
      disabled={props.disabled}
      onClick={props?.onClick}
      type={props.type}
      color={
        isNotEmpty(props.backgroundcolor) ? props.backgroundcolor : "primary"
      }
    >
      {props.children}
    </Button>
  );
}
