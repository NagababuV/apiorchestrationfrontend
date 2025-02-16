import React from "react";
import "../styles.css"; // ✅ Import global styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
