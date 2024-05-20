import React from "react";
import EmailValidation from "./React-Projects/EmailValidation";
import Todo from "./React-Projects/Todo";
import PasswordStrength from "./React-Projects/PasswordStrength";
import LinkPreview from "./React-Projects/LinkPreview";
import LiveFilter from "./React-Projects/LiveFilter";

function ReactUI() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h2 className="card-title" style={{ margin: 0 }}>
            {" "}
            <i className="fab fa-react me-2 mb-4"></i>React Small Projects
          </h2>{" "}
          <p className="col-md-8 fs-6">
            These are some projects I built during the 30 Days of React
            challenge. This month-long journey enhanced my design skills and
            solidified core concepts.
          </p>
        </div>
        <div
          className="d-flex justify-content-center p-5"
          style={{ backgroundColor: "#F0F0F0", textAlign: "center" }}
        >
          <Todo />
        </div>
        <div className="p-4 mt-4 " style={{ backgroundColor: "#F0F0F0" }}>
          <EmailValidation />
        </div>
        <div
          className="d-flex justify-content-center p-5 mt-4"
          style={{ backgroundColor: "#F0F0F0", textAlign: "center" }}
        >
          <PasswordStrength />
        </div>
        <div
          className="d-flex justify-content-center p-5 mt-4"
          style={{ backgroundColor: "#F0F0F0", textAlign: "center" }}
        >
          <LinkPreview />
        </div>
        <div
          className="d-flex justify-content-center p-5 mt-4"
          style={{ backgroundColor: "#F0F0F0", textAlign: "center" }}
        >
          <LiveFilter />
        </div>
      </div>
    </>
  );
}

export default ReactUI;
