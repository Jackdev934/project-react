const Header = ({ title = "Astora's Archive" }) => {
  return (
    <header className="title-bar">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
