import { Link, useLocation } from "react-router-dom";
import "./../css/Home.css";
import "./../css/Bosses.css";
import "./../css/Characters.css";
import "./../css/Weapons.css";
import "./../css/World.css";
import "./../css/Lore.css";
import "./../css/Guides.css";
import "./../css/Community.css";
import "./../css/About.css";
import "./../css/Sign.css";
import "./../css/Nav.css";
import { useState } from "react";

const Nav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "active" : undefined);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="top-nav">
      <nav id="main-nav" aria-label="Main">
        <button
          id="toggle-nav"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-list"
          onClick={toggleMenu}
          type="button"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <ul id="nav-list" className={menuOpen ? "" : "hide-small"}>
          <li>
            <Link className={isActive("/")} to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link className={isActive("/bosses")} to="/bosses" onClick={handleLinkClick}>
              Bosses
            </Link>
          </li>
          <li>
            <Link className={isActive("/characters")} to="/characters" onClick={handleLinkClick}>
              Characters
            </Link>
          </li>
          <li>
            <Link className={isActive("/weapons")} to="/weapons" onClick={handleLinkClick}>
              Weapons &amp; Tools
            </Link>
          </li>
          <li>
            <Link className={isActive("/world")} to="/world" onClick={handleLinkClick}>
              World Location
            </Link>
          </li>
          <li>
            <Link className={isActive("/lore")} to="/lore" onClick={handleLinkClick}>
              Lore &amp; Story
            </Link>
          </li>
          <li>
            <Link className={isActive("/guides")} to="/guides" onClick={handleLinkClick}>
              Guides &amp; Walkthrough
            </Link>
          </li>
          <li>
            <Link className={isActive("/community")} to="/community" onClick={handleLinkClick}>
              Community
            </Link>
          </li>
          <li>
            <Link className={isActive("/about")} to="/about" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link className={isActive("/sign")} to="/sign" onClick={handleLinkClick}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
