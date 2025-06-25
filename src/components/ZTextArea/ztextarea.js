import TextArea from "@mui/material/TextField";

const ZTextArea = (props) => {
  const onChange = (e) => {
    props?.onChange(e.target.value);
  };

  return (
    <TextArea
      fullWidth
      label={props?.label}
      name={props?.label || props.name}
      value={props?.value}
      onChange={(e) => {
        onChange(e);
      }}
      required={props.required}
      variant={"outlined" || props.variant}
      error={props?.error}
      placeholder={props?.placeholder}
      helperText={props?.helperText}
      maxLength={props.maxLength}
    />
  );
};

export default ZTextArea;
