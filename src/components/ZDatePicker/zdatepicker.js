import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { useState } from "react";
import { format, isValid } from "date-fns";

const ZDatePicker = (props) => {
  const [open, setOpen] = useState(false);

  const formatDate = (date) => {
    if (!date || !isValid(new Date(date))) return "";
    return format(new Date(date), "dd MMM yyyy");
  };
  const onChange = (e) => {
    props?.onChange(e.target.value);
  };
  return (
    <DatePicker
      label={props?.label}
      value={props?.value}
      onChange={(e) => {
        onChange(e);
      }}
      maxDate={props?.maxDate}
      sx={{ cursor: "pointer" }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      slots={{
        textField: (params) => (
          <TextField
            {...params}
            name={props?.name}
            fullWidth
            required={props?.required}
            error={props?.error}
            helperText={props?.helperText}
            onClick={() => setOpen(true)}
            onFocus={() => setOpen(true)}
            value={formatDate(params.value)}
            sx={{
              "& .MuiInputBase-input": {
                cursor: "pointer",
              },
              "& .MuiOutlinedInput-root": {
                cursor: "pointer",
              },
            }}
          />
        ),
      }}
      slotProps={{
        textField: {
          variant: "outlined",
        },
        inputAdornment: {
          sx: { cursor: "pointer" },
        },
      }}
      disableOpenPicker={false}
      enableAccessibleFieldDOMStructure={false}
    />
  );
};

export default ZDatePicker;
