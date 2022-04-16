import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
       <footer>
            <div className="logo">
           <Link to="#">
            <FacebookIcon style={{color:"#4D96FF"}} className="icon"/>
          </Link>
          <Link to="#">
            <InstagramIcon style={{color:"#F10086"}} className="git"/>
          </Link>
          <Link to="#">
            <TwitterIcon style={{color:"#4D96FF"}} className="icon"/>
          </Link>
         
        </div>

       </footer>
    )
}

export default Footer;
