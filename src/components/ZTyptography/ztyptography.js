import React from "react";
import { Typography as MuiTypography } from "@mui/material";
import { fonts } from "../../utils/constants/font";
import colors from "../../utils/constants/colors";
import { lable } from "../../utils/constants/lables";

function ZTypography(props) {
  const { flag, fontSize, fontFamily, lineHeight, color, labelText, children } =
    props;

  const computedFontSize =
    flag === lable.mainheader
      ? "18px"
      : flag === lable.subheading
      ? "16px"
      : flag === lable.label
      ? "14px"
      : flag === lable.value
      ? "14px"
      : flag === lable.error
      ? "14px"
      : fonts.size.medium;

  const computedColor =
    flag === lable.mainheader
      ? colors.primaryText
      : flag === lable.subheading
      ? colors.secondaryText
      : flag === lable.label
      ? colors.labelText
      : flag === lable.value
      ? colors.secondaryText
      : flag === lable.error
      ? colors.errorText
      : color || colors.secondaryText;

  return (
    <MuiTypography
      fontSize={fontSize || computedFontSize}
      color={color || computedColor}
      fontFamily={fontFamily || fonts.family.primary}
      lineHeight={lineHeight || fonts.lineHeight.normal}
      {...props} // Spread other props
    >
      {labelText || children}
    </MuiTypography>
  );
}

export default ZTypography;
