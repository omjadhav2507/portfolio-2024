import React, { useState } from "react";

function PasswordStrength() {
  const [password, setPassword] = useState("");

  const calculateStrength = () => {
    const strength = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const strengthScore = Object.values(strength).filter(Boolean).length;

    return {
      strength,
      strengthScore,
    };
  };

  const getColor = (score) => {
    if (score >= 3) return "text-success";
    if (score === 2) return "text-warning";
    return "text-danger";
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { strength, strengthScore } = calculateStrength();
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <h4>Password strengthScore</h4>
        <div className="col-md-4">
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-3">
            <strong>Strength:</strong>{" "}
            <span className={getColor(strengthScore)}>{strengthScore}/5</span>
          </div>
          <div className={`mt-3 ${getColor(strengthScore)}`}>
            {strength.length && <div>✓ Contains at least 8 characters</div>}
            {strength.uppercase && (
              <div>✓ Contains at least one uppercase letter</div>
            )}
            {strength.lowercase && (
              <div>✓ Contains at least one lowercase letter</div>
            )}
            {strength.digit && <div>✓ Contains at least one digit</div>}
            {strength.specialChar && (
              <div>✓ Contains at least one special character</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordStrength;
