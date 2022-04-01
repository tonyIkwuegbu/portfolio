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

  function sendEmail(e) {
    e.preventDefault();

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
  }

  return (
    <div className="contact">
      <h1>Contact Us!</h1>

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
    </div>
  );
};

export default Contact;
