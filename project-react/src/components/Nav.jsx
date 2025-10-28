import { Link, useLocation } from "react-router-dom";
import "./../css/Home.css";      // ensures fonts/vars if you placed them here
import "./../css/Bosses.css";    // safe to import page css where needed
import "./../css/Characters.css";
import "./../css/Weapons.css";
import "./../css/World.css";
import "./../css/Lore.css";
import "./../css/Guides.css";
import "./../css/Community.css";
import "./../css/About.css";
import "./../css/Sign.css";

/* If you prefer, move nav-specific styles to a new file (e.g., css/Nav.css) */

const Nav = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "active" : undefined;

  return (
    <div className="top-nav">
      {/* no JS hamburger yet (not required) */}
      <nav className="nav-row" id="navRow">
        <Link className={isActive("/")} to="/">Home</Link>
        <Link className={isActive("/bosses")} to="/bosses">Bosses</Link>
        <Link className={isActive("/characters")} to="/characters">Characters</Link>
        <Link className={isActive("/weapons")} to="/weapons">Weapons &amp; Tools</Link>
        <Link className={isActive("/world")} to="/world">World Location</Link>
        <Link className={isActive("/lore")} to="/lore">Lore &amp; Story</Link>
        <Link className={isActive("/guides")} to="/guides">Guides &amp; Walkthrough</Link>
        <Link className={isActive("/community")} to="/community">Community</Link>
        <Link className={isActive("/about")} to="/about">About Us</Link>
        <Link className={isActive("/sign")} to="/sign">Sign In</Link>
      </nav>
    </div>
  );
};

export default Nav;
