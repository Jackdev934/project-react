import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Astora’s Archive • All rights reserved.</p>

        <p className="backend-link">
          Backend API hosted on Render:{" "}
          <a
            href="https://project-backend-fl7h.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="render-anchor"
          >
            https://project-backend-fl7h.onrender.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
