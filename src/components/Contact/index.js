import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import "./style.css";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [deliver, setDeliver] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jsvdjc8",
        "template_bwuzqjc",
        { name, email, message },
        "jG0jfyteyiFBUYSrM"
      )
      .then((response) => {
        console.log("SUCCESS", response.status, response.text);
        setEmail("");
        setName("");
        setMessage("");
        setTimeout(() => {
          setDeliver(`Thank you ${name}, I'll get back to you soon.`);
        }, 5000);
      })
      .catch((error) => {
        console.log("oops! Failed", error);
      });
  };

  return (
    <div className="contact">
      <div>
        <h1>Contact me!</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252166.39753871926!2d7.254267964001987!3d9.054646210491764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja!5e0!3m2!1sen!2sng!4v1621591763826!5m2!1sen!2sng"
          title="abujaMap"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <h4>Address: Federal Capital Territory, Abuja</h4>
      </div>

      <div>
        <h4> Contact me directly on Whatsapp</h4>
        <a href="https://wa.link/enmows" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/color/452/whatsapp--v1.png"
            alt="whatsapp-icon"
          />
        </a>
      </div>

      <Paper sx={{ mt: 2, width: "35ch", p: 3, backgroundColor: "#EEEEEE" }}>
        <h4>
          Interested in working together? please fill out the form below...
        </h4>
        <h4 style={{ color: "green" }}>{deliver}</h4>
        <form onSubmit={sendEmail}>
          <TextField
            sx={{ mb: 2, mt: 2, width: "35ch" }}
            name="name"
            type="text"
            label="Name"
            variant="outlined"
            required
            placeholder="please enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ mb: 2, width: "35ch" }}
            name="email"
            label="Email"
            type="email"
            placeholder="please enter your email"
            variant="outlined"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ mb: 2, width: "35ch" }}
            name="message"
            label="Your message"
            placeholder="Tell me a little about your project..."
            multiline
            variant="outlined"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />{" "}
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mb: 2, width: "25ch" }}
            >
              Send
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Contact;
