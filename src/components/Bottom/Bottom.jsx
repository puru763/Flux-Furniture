import React from "react";
import "./Bottom.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

const Bottom = () => {
  return (
    <div className="bottom-container">
      <div className="bottom-icons">
      <div className="bicon">
        <InstagramIcon className="icon" />
      </div>
      <div className="bicon">
        <WhatsAppIcon className="icon" />
      </div>
      <div className="bicon">
        <CallIcon className="icon" />
      </div>
      </div>

      <div className="tag">@FLUX FURNITURE</div>
    </div>
  );
};

export default Bottom;
