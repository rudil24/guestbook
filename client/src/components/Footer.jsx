import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} | Rudi Lewis | Licensed under the MIT License</p>
    </footer>
  );
}

export default Footer;