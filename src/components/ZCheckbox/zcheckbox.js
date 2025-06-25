import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { isNotEmpty } from "../../utils/commonFunction/common";

const Zcheckbox = (props) => {
  const onChange = (e) => {
    props?.onChange(e.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isNotEmpty(props?.checked) ? props.checked : false}
          onChange={(e) => {
            onChange(e);
          }}
          name={props?.name}
          color="primary"
        />
      }
      label={props?.label}
    />
  );
};

export default Zcheckbox;
