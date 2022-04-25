import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="rupay"
            src="https://th.bing.com/th/id/OIP.YLnkxv33Lv-PjEGS4ksLPwHaEY?pid=ImgDet&w=221&h=130&c=7&dpr=1.25"
          />
        </div>
        <div className="card-name">
          <img
            alt="upi"
            src="https://razorpay.com/assets/upi-autopay/logo-mobile.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
