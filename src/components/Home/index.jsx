import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p className="name">Welcome,</p>
          <p className="name">I'm Elvis...</p>
          <p className="job">CEO Dusk To Dawn</p>
        </h1>
        <Link to="about">
          <button className="btn"> More Info</button>
        </Link>
      </div>
      <div className="person">
        <img src={`${process.env.PUBLIC_URL}/main.png`} alt="person" />
      </div>
    </div>
  );
};

export default Home;
