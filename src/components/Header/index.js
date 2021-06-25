import React from "react";
import "./style.css";

function Header() {
  return (
    // <header className="header">
    //   <div className="header d-flex justify-content-center">
    //     <h5>Mark Drecoll</h5>

    //   </div>
    //   <div ClassName="d-flex justify-content-end">
    //     <h6><a href={process.env.PUBLIC_URL
    //       + "/assets/files/Mark_Drecoll_Resume.pdf"} target="_blank">Résumé
    //     </a> | <a href="https://github.com/markdrecoll" target="_blank">
    //         Github</a> | <a href="https://www.linkedin.com/in/markdrecoll/"
    //           target="_blank"> LinkedIn</a>
    //     </h6>
    //   </div>
    // </header>



    // <nav
    //   className="navbar navbar-expand-lg navbar-light mt-n4"
    //   style={{ backgroundColor: 'rgb(202, 183, 118)' }}>

    //     <div>

    //     </div>
      
    
    // </nav>

    // <nav
    //     className="navbar navbar-expand-lg navbar-light"
    //     style={{ color: '#C2C1C3', backgroundColor: '#14212A' }}
    //   >
    //     <div className="container-fluid">
    //       <div>
    //         <a
    //           href="#home"
    //           className="nav-link text-light"
    //         >
    //           Mark Drecoll | Full Stack Developer
    //         </a>
    //       </div>
    //       <div>
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarTogglerDemo01"
    //           aria-controls="navbarTogglerDemo01"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span className="navbar-toggler-icon"></span>
    //         </button>

    //         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li className="nav-item">
    //               <a
    //                 href={process.env.PUBLIC_URL+"/assets/files/Mark_Drecoll_Resume.pdf"}
    //                 target="_blank"
    //                 className="nav-link text-light"
    //               >
    //                 Résumé
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 href="https://github.com/markdrecoll"
    //                 target="_blank"
    //                 className="nav-link text-light"
    //               >
    //                 Github
    //               </a>
    //             </li>

    //             <li className="nav-item">
    //               <a
    //                 href="https://www.linkedin.com/in/markdrecoll/"
    //                 target="_blank"
    //                 className="nav-link text-light"
    //               >
    //                 LinkedIn
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>


  );
}

export default Header;