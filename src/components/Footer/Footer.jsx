import React from "react";
import "./Footer.css";
import { useCheckMobileScreen } from "../../utils/common";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "var(--black)", paddingTop: "1%" }}>
      <div className="flexColStart f-left">
        <img
          src="./ksb_assets/ksb_logo.png"
          alt="logo"
          width={useCheckMobileScreen() ? 100 : 200}
        />
      </div>
    </div>
  );
};

export default Footer;
