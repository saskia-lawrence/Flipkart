
import { useNavigate } from "react-router-dom";
import React from "react";

export const withRouter = (Component) => {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};