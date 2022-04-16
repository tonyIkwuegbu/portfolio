<<<<<<< HEAD
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
=======
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.css";
import Button from "@mui/material/Button";
//import emailjs from "emailjs-com";

const Contact = () => {
  // const [message, setMessage] = useState (
  //   <p>Please enter your details correctly</p>
  // );
>>>>>>> 1b987b3d2afc2c9812a34224645220ca5cba07f3

  const sendEmail = (event) => {
    event.preventDefault() 

<<<<<<< HEAD
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
=======
    console.log("Thank you  for your submission!");

    // emailjs
    //   .sendForm(
    //     "gmail",
    //     "template_5ztfryj",
    //     e.target,
    //     "user_286yNR8cdPOFzEECcKLAB"
    //   )
    //   .then(
    //     () => {
    //       setMessage("Thank you  for your submission!");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // e.target.reset();
>>>>>>> 1b987b3d2afc2c9812a34224645220ca5cba07f3
  }

  return (
    <div className="contact">
      <h1>Contact Us!</h1>
<<<<<<< HEAD
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
     
=======

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63485.895699480236!2d6.888707213386244!3d6.012790145599542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043bd53c91b98b5%3A0x326cac44e3183674!2sNnewi!5e0!3m2!1sen!2sng!4v1648848766132!5m2!1sen!2sng"
        width="600"
        height="450"
        title="map"
        allowfullscreen=""
        loading="lazy"
        aria-hidden="false"
        tabIndex="0"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <h4>Address</h4>
      <p>Nnewi, Anambra State</p>

      <h4> Contact me directly on Whatsapp</h4>
      <a href="https://wa.link/yfy0ke" target="_blank" rel="noreferrer">
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

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={sendEmail}>
          <TextField
            id="filled-basic"
            name="name"
            type="text"
            label="Your Name"
            variant="filled"
            required
            sx={{ width: "40ch" }}
          />
          <br />
          <TextField
            id="filled-basic"
            name="email"
            label="Your Email"
            type="email"
            variant="filled"
            required
            sx={{ width: "40ch" }}
          />
          <br />
          <TextField
            id="filled-basic"
            name="message"
            label="Your message"
            placeholder="Tell me a little about your program..."
            multiline
            variant="filled"
            sx={{ width: "40ch" }}
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
          {/* <p> {message} </p> */}
        </form>
      </Box>
>>>>>>> 1b987b3d2afc2c9812a34224645220ca5cba07f3
    </div>
  );
};

export default Contact;
