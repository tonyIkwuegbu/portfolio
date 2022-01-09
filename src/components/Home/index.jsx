import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p className="name">Hi,</p>
          <p className="name">I'm Tony</p>
          <p className="job">Front-end Developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img src={`${process.env.PUBLIC_URL}/main.png`} alt="person" />
      </div>
    </div>
  );
};

export default Home;
