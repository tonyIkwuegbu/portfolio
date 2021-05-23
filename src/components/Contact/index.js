import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import Button from "@material-ui/core/Button";

const Contact = () => {
    const [message, setMessage] = useState();
   const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "35ch",
      },
    },
  }));
  const classes = useStyles();

  const handleChange = () =>{
      setMessage("Thank you for your submission!");
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
        loading="lazy"
      ></iframe>
      <h4>Address</h4>
      <p>Federal Capital Territory, Abuja</p>

      {/* 
        <h4> Contact me directly on Whatsapp</h4>
        <a href = "https://wa.link/enmows" 
        target= "_blank" 
        rel="noreferrer">
        <img src="https://img.icons8.com/color/452/whatsapp--v1.png" 
        alt="whatsapp-icon" 
        /> 
        </a>
        <br/><br/> */}

      <h4>
        Interested in working together?please fill out the form below and i'll
        get back to you as soon as i can.
      </h4>
      <form autoComplete="off" action="mailto:ikwuegbuanthony@gmail.com" method="post" enctype="text/plain" onSubmit= {handleChange} >
        <TextField
          id="filled-basic"
          type="text"
          className={classes.root}
          label="Your Name"
          variant="filled"
          required
        />
        <br />
        <TextField
          id="filled-basic"
          className={classes.root}
          label="Your Email"
          type="email"
          variant="filled"
          required
        />
        <br />
        <TextField
          id="filled-textarea"
          className={classes.root}
          label="Your message"
          placeholder="Tell me a little about your project..."
          multiline
          variant="filled"
          required
        />{" "}
        <br />
        <div>
        <Button variant="contained" color="primary" type="submit" >
         Send
        </Button>
        <Button variant="contained" color="secondary" type="reset" >
          Clear 
        </Button>
        </div>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Contact;
