import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "../container/Flipkart/LoginPage/loginPage";
import RegisterPage from "../container/Flipkart/RegisterPage/registerPage";
// import ForgetPassword from "../container/Flipkart/ForgetPassword/forgetPassword";
import OtpVerification from "../container/Flipkart/OtpVerification/OtpVerification";
import ResetPassword from "../container/Flipkart/ResetPassword/resetPassword";
import Dashboard from "../container/Flipkart/Dashboard/dashbord";
import Cart from "../container/Flipkart/Cart/cart";
import Payment from "../container/Flipkart/WomensFashion/Payment/payment";
import WomensFashion from "../container/Flipkart/WomensFashion/womensfashion";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/forgetpassword" element={<ForgetPassword />} /> */}
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/womens" element={<WomensFashion />} />
      </Routes>
    </Router>
  );
}

export default Routing;
