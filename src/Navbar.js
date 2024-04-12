const Navbar = () => {
  return (
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
  );
};

export default Navbar;
