const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav__list">
        <a className="nav__link--item selected">
          <li>Home</li>
        </a>
      </ul>

      <ul className="nav__list">
        <a className="nav__link--item">
          <li>About</li>
        </a>
        <a className="nav__link--item">
          <li>Portfolio</li>
        </a>
        <a className="nav__link--item">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
