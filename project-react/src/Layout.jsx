import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: 12, padding: 12 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/bosses">Bosses</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/weapons">Weapons</NavLink>
        <NavLink to="/world">World</NavLink>
        <NavLink to="/lore">Lore</NavLink>
        <NavLink to="/guides">Guides</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/sign">Sign In</NavLink>
      </nav>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
