const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav__list">
        <a className="nav__link--item selected" href="#">
          <li>Home</li>
        </a>
      </ul>

      <ul className="nav__list">
        <a className="nav__link--item" href="#">
          <li>About</li>
        </a>
        <a className="nav__link--item" href="#">
          <li>Portfolio</li>
        </a>
        <a className="nav__link--item" href="#">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
