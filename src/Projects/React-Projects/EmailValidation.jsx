import React, { useState } from "react";

function EmailValidation() {
  const [isvalid, setIsValid] = useState(false);

  const inputhandle = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Email Validation</h2>
          <form className="d-flex flex-column align-items-center">
            <input
              type="text"
              autoComplete="off"
              onChange={inputhandle}
              className="form-control mb-3"
              style={{ width: "100%" }}
              placeholder="Enter your email"
            />
          </form>
          <p className="text-center">
            <span
              className={`text-white p-2 ${
                isvalid ? "bg-success" : "bg-danger"
              }`}
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              {isvalid ? "Valid input" : "Input not valid"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailValidation;
