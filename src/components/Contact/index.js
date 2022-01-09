import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.css";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState(
    <p>Please enter your details correctly</p>
  );

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_5ztfryj",
        e.target,
        "user_286yNR8cdPOFzEECcKLAB"
      )
      .then(
        () => {
          setMessage("Thank you  for your submission!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact">
      <h1>Contact me!</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252166.39753871926!2d7.254267964001987!3d9.054646210491764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja!5e0!3m2!1sen!2sng!4v1621591763826!5m2!1sen!2sng"
        title="abujaMap"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <h4>Address</h4>
      <p>Federal Capital Territory, Abuja</p>

      <h4> Contact me directly on Whatsapp</h4>
      <a href="https://wa.link/enmows" target="_blank" rel="noreferrer">
        <img
          src="https://img.icons8.com/color/452/whatsapp--v1.png"
          alt="whatsapp-icon"
        />
      </a>
      <br />
      <br />

      <h4>
        Interested in working together?please fill out the form below and i'll
        get back to you as soon as i can.
      </h4>
      <form onSubmit={sendEmail}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            name="name"
            type="text"
            label="Your Name"
            variant="filled"
            required
          />
          <br />
          <TextField
            id="filled-basic"
            name="email"
            label="Your Email"
            type="email"
            variant="filled"
            required
          />
          <br />
          <TextField
            id="filled-basic"
            name="message"
            label="Your message"
            placeholder="Tell me a little about your project..."
            multiline
            variant="filled"
            required
          />{" "}
          <br />
          <div>
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
            <Button variant="contained" color="secondary" type="reset">
              Clear
            </Button>
          </div>
          <p> {message} </p>
        </Box>
      </form>
    </div>
  );
};

export default Contact;
