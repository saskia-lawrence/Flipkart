// Routing.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../container/Flipkart/LoginPage/loginPage";
import RegisterPage from "../container/Flipkart/RegisterPage/registerPage";
import OtpVerification from "../container/Flipkart/OtpVerification/OtpVerification";
import ResetPassword from "../container/Flipkart/ResetPassword/resetPassword";
import Dashboard from "../container/Flipkart/Dashboard/dashbord";
import Cart from "../container/Flipkart/Cart/cart";
import Payment from "../container/Flipkart/Payment/payment";
import WomensFashion from "../container/Flipkart/WomensFashion/womensfashion";
import PageLayout from "../container/Flipkart/PageLayout/pagelayout";
import OrderConfirmation from "../container/Flipkart/OrderConfirmation/orderconfirmation";
import Orders from "../container/Flipkart/Orders/orders";
import MensFashion from "../container/Flipkart/MensFashion/mensfashion";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route element={<PageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/womens" element={<WomensFashion />} />
          <Route path="/mens" element={<MensFashion />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
