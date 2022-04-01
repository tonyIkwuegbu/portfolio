import "./style.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, red, blue } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Projects = () => {
  return (
      <div className="cards"> 
    <Card className="card-div" sx={{ maxWidth: 300, bgcolor: "#e5e5e5" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Whatsapp Web 2.0 clone"
      />

      <CardMedia
        component="img"
        height="190"
        image="https://techbooky.com/wp-content/uploads/2019/05/whatsapp-banner.png"
        alt="logo"
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "500" }}
        >
          A Whatsapp version 2 clone messaging app built with Nextjs. This App
          is authenticated using Google OAuth.
        </Typography>
      </CardContent>
      <CardActions Spacing>
        <div>
          <Link
            href="https://whatsappv2clone.netlify.app/"
            target="_blank"
            underline="hover"
            style={{ color: "gray", fontWeight: "500" }}
          >
            Demo
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/tonyIkwuegbu/whatsapp-v2.1"
            target="_blank"
            underline="hover"
            style={{ color: "gray", fontWeight: "500" }}
          >
            Github
          </Link>
        </div>
      </CardActions>
    </Card>

{/* gmail */}
    <Card className="card-div" sx={{ maxWidth: 300, bgcolor: "#e5e5e5" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Gmail clone"
      />

      <CardMedia
        component="img"
        height="190"
        image="https://thumbs.dreamstime.com/b/logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-paper-texture-glossy-emblem-wallpaper-210442689.jpg"
        alt="logo"
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "500" }}
        >
         A Gmail clone app built with React/Redux, that automatically organizes successively related messages into a conversational thread in realtime.
        </Typography>
      </CardContent>
      <CardActions Spacing>
        <div>
          <Link
            href="https://main--clone.web.app"
            target="_blank"
            underline="hover"
            style={{ color: "gray", fontWeight: "500" }}
          >
            Demo
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/tonyIkwuegbu/google-mail-clone"
            target="_blank"
            underline="hover"
            style={{ color: "gray", fontWeight: "500" }}
          >
            Github
          </Link>
        </div>
      </CardActions>
    </Card>


    <Card className="card-div" sx={{ maxWidth: 300, bgcolor: "#e5e5e5" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Facebook 2.0 clone"
      />

      <CardMedia
        component="img"
        height="190"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWkI7LFzEFHMqlYaR0JjiG9zFGZm2uFAyhc1J-p20J4Ldly4wuJqrGEw-lmBqom7SxMU&usqp=CAU"
        alt="logo"
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "500" }}
        >
          A Facebook version 2 clone app built with Nextjs/TailwindCSS, that automatically organizes successively related posts and photos into a conversational thread in realtime.
        </Typography>
      </CardContent>
      <CardActions Spacing>
        <div>
          <Link
            href="https://facebookbyzetrov.netlify.app/"
            target="_blank"
            underline="hover"
            style={{ color: "gray", fontWeight: "500" }}
          >
            Demo
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/tonyIkwuegbu/facebook-v2-clone"
            target="_blank"
            underline="hover"
            style={{ color: "gray", fontWeight: "500" }}
          >
            Github
          </Link>
        </div>
      </CardActions>
    </Card>
    </div>
  );
};

export default Projects;
