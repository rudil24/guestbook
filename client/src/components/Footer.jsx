import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      {/* we'll link to our local license.md file with the ISC hyperlink below*/}
      <p>&copy; {currentYear} | Rudi Lewis | License: <a href="https://en.wikipedia.org/wiki/ISC_license" target="_blank" rel="noopener noreferrer">ISC</a></p>
    </footer>
  );
}

export default Footer;