import React from "react";
import Bottom from "../Bottom/Bottom";
import cimg from "./contact.jpg";
import "./Contact.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <div className="contact-box">
      <div className="contact-container">

        <div className="first-container">
        <div className="contact-data">
          <span className="contact-head"> Contact Us And Get Your Deal Of Choice</span> <br />
          Get the information to start decorating your home with FLUX Furnituring makes it easier to do what you do best -- create.
        </div>
        <div className="contact-img">
          <img src="https://media.istockphoto.com/id/1044827658/photo/an-elegant-navy-blue-sofa-in-the-middle-of-a-bright-living-room-interior-with-gold-metal-side.jpg?s=612x612&w=0&k=20&c=13hiA0lCPkUMUxngbbG6UyGqJC4oP0DpQzZvZzxvXIc=" alt="" />
        </div>

  

        </div>
       

        <div className="contact-details">
          <div className="onebox">
            <div className="cicon">
              <CallIcon />
            </div>
            Call Us
          </div>
          <div className="secondbox">
            {" "}
            <div className="cicon">
              <EmailIcon />
            </div>
            Send Us Email
          </div>
          <div className="thirdbox">
            {" "}
            <div className="cicon">
              <WhatsAppIcon />
            </div>
            Live Chat With Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
