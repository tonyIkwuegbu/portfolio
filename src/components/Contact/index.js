import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./style.css";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import { Paper } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault() 

    emailjs
      .send(
        "service_jsvdjc8",
        "template_bwuzqjc",
        { name, email, message },
        "jG0jfyteyiFBUYSrM"
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setEmail('')
        setMessage('')
        setName('')
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  }

  return (
    <div className="contact">
      <h1>Contact Us!</h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252166.39753871926!2d7.254267964001987!3d9.054646210491764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja!5e0!3m2!1sen!2sng!4v1621591763826!5m2!1sen!2sng"
          title="abujaMap"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          aria-hidden="false"
          tabIndex="0"
        
        ></iframe>
        <h4>Address:Federal Capital Territory, Abuja</h4>
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

      
        <Paper sx={{ padding: 3, mt: 3, width: "35ch", backgroundColor:"#EEEEEE"}}>
          <h4>
            Interested in working together? please fill out the form below and
            i'll get back to you as soon as i can.
          </h4>
          <form onSubmit={sendEmail}>
            <TextField
              name="name"
              type="text"
              label="Your Name"
              variant="outlined"
              required
              sx={{ width: "35ch", mb: 2 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              
              name="email"
              label="Your Email"
              type="email"
              variant="outlined"
              required
              sx={{ width: "35ch", mb: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              
              name="message"
              label="Your message"
              placeholder="Tell me a little about your program..."
              multiline
              variant="outlined"
              required
              sx={{ width: "35ch", mb: 2 }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />{" "}
            <Button
              variant="contained"
              sx={{ width: "25ch" }}
              color="primary"
              type="submit"
            >
              Send Mail
            </Button>
          </form>
           
        </Paper>
     
    </div>
  );
};

export default Contact;
