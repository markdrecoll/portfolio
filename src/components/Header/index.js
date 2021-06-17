import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="header d-flex justify-content-center">
        <h5>Mark Drecoll</h5>

      </div>
      <div ClassName="d-flex justify-content-end">
        <h6><a href={process.env.PUBLIC_URL
          + "/assets/files/Mark_Drecoll_Resume.pdf"} target="_blank">Résumé
        </a> | <a href="https://github.com/markdrecoll" target="_blank">
            Github</a> | <a href="https://www.linkedin.com/in/markdrecoll/"
              target="_blank"> LinkedIn</a>
        </h6>
      </div>
    </header>
  );
}

export default Header;