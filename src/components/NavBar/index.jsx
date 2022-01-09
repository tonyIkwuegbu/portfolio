import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, [screenWidth]);

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/brand.png`} alt="brand" />
          </Link>
        </div>

        <div className="list-wrapper">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/bars-collection-view-application-grid-menu-44415.png"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <img
            src="https://cdn3.iconfinder.com/data/icons/e-commerce-simple-ui-elements/100/TWalsh__close1-512.png"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#4071f4" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#4071f4" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handleClose}
                style={{ color: location.pathname === "/skills" && "#4071f4" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={handleClose}
                style={{
                  color: location.pathname === "/projects" && "#4071f4",
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#4071f4" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
