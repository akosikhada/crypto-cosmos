import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="footer">
      <p>© {currentYear} Crypto Cosmos. All rights reserved.</p>
    </div>
  );
};

export default Footer;
