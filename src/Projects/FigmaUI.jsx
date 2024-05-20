import React from "react";
import Navbar101 from "../assets/Navbar101.png";
import Navbar102 from "../assets/Navbar102.png";
import Navbar103 from "../assets/Navbar103.png";
import Navbar104 from "../assets/Navbar104.png";
import Navbar105 from "../assets/Navbar105.png";

import Hero101 from "../assets/Hero101.png";
import Hero102 from "../assets/Hero102.png";
import Hero103 from "../assets/Hero103.png";
import Hero104 from "../assets/Hero104.png";
import Hero105 from "../assets/Hero105.png";
import Hero106 from "../assets/Hero106.png";

import Feature101 from "../assets/Features-101.png";
import Feature102 from "../assets/Features-102.png";
import Feature103 from "../assets/Features-103.png";
import Feature104 from "../assets/Features-104.png";

function FigmaUI() {
  return (
    <>
      <div className="container py-2">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h2 className="card-title" style={{ margin: 0 }}>
              {" "}
              <i className="fab fa-figma me-2 mb-4"></i>Figma Web UI Components
            </h2>{" "}
            <p className="col-md-8 fs-6">
              Designed a comprehensive set of standard web UI components in
              Figma , Each component is created with different variants and
              fully utilizes Figma's auto layout feature.
            </p>
          </div>
        </div>
        <div className="p-4 " style={{ backgroundColor: "#F0F0F0" }}>
          <h4>Navbar</h4>
          <img src={Navbar101} className="img-fluid mt-2 shadow-sm" alt="..." />
          <img src={Navbar102} className="img-fluid mt-4 shadow-sm" alt="..." />
          <img src={Navbar103} className="img-fluid mt-4 shadow-sm" alt="..." />
          <img src={Navbar104} className="img-fluid mt-4 shadow-sm" alt="..." />
          <img src={Navbar105} className="img-fluid mt-4 shadow-sm" alt="..." />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <h4>Hero Section</h4>
          <img src={Hero101} className="img-fluid mt-2  shadow-sm" alt="..." />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <img src={Hero102} className="img-fluid mt-2  shadow-sm" alt="..." />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <img src={Hero103} className="img-fluid mt-2  shadow-sm" alt="..." />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <img src={Hero104} className="img-fluid mt-2  shadow-sm" alt="..." />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <img src={Hero105} className="img-fluid mt-2  shadow-sm" alt="..." />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <img src={Hero106} className="img-fluid mt-2  shadow-sm" alt="..." />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <h4>Feature Section</h4>
          <img
            src={Feature101}
            className="img-fluid mt-2  shadow-sm"
            alt="..."
          />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <img
            src={Feature102}
            className="img-fluid mt-2  shadow-sm"
            alt="..."
          />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <img
            src={Feature103}
            className="img-fluid mt-2  shadow-sm"
            alt="..."
          />
        </div>
        <div className="p-4 mt-5 " style={{ backgroundColor: "#F0F0F0" }}>
          <img
            src={Feature104}
            className="img-fluid mt-2  shadow-sm"
            alt="..."
          />
        </div>
      </div>
    </>
  );
}

export default FigmaUI;
