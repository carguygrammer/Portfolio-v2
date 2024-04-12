import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [hamburgerNavVisible, setHamburgerNavVisible] = useState(false);
  return (
    <>
      <nav className="navbar">
        <ul className="nav__list">
          <a className="nav__link--item selected" href="#homepage">
            <li>Home</li>
          </a>
        </ul>

        <ul className="nav__list">
          <a className="nav__link--item" href="#about">
            <li>About</li>
          </a>
          <a className="nav__link--item" href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a className="nav__link--item" href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
      <nav className="navbar hamburger-nav">
        {!hamburgerNavVisible && (
          <TiThMenuOutline onClick={() => setHamburgerNavVisible(true)} />
        )}
        {hamburgerNavVisible && (
          <div className="hamburger--visible">
            <ul className="nav__list">
              <a className="nav__link--item" href="#homepage">
                <li onClick={() => setHamburgerNavVisible(false)}>Home</li>
              </a>
              <a className="nav__link--item" href="#about">
                <li onClick={() => setHamburgerNavVisible(false)}>About</li>
              </a>
              <a className="nav__link--item" href="#portfolio">
                <li onClick={() => setHamburgerNavVisible(false)}>Portfolio</li>
              </a>
              <a className="nav__link--item" href="#contact">
                <li onClick={() => setHamburgerNavVisible(false)}>Contact</li>
              </a>
            </ul>
            <span
              style={{
                color: "white",
                fontSize: "2rem",
                marginTop: "2em",
              }}
              onClick={() => setHamburgerNavVisible(false)}
            >
              <IoMdClose />
            </span>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
