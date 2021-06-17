import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>
          Mark Drecoll | mark@markdrecoll.com | <a href={process.env.PUBLIC_URL
            +"/assets/files/Mark_Drecoll_Resume.pdf"} target="_blank">Résumé
            </a> | <a href="https://github.com/markdrecoll" target="_blank">
              Github</a> | <a href="https://www.linkedin.com/in/markdrecoll/"
              target="_blank"> LinkedIn</a>
      </span>
    </footer>
  );
}

export default Footer;