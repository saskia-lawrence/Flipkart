export const isNotEmpty = (val) => {
  if (val !== undefined && val !== "" && val !== null) return true;
  return false;
};
