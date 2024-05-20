import React, { useState } from "react";

function LinkPreview() {
  const [input, setInput] = useState();
  const [linkPreview, SetLinkPreview] = useState();
  const API_KEY = "a635965690cf24d2acfa1fa722525eb1";

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(
          input
        )}`
      );
      const data = await res.json();
      console.log(data);
      SetLinkPreview(data);
    } catch (error) {
      console.error("Error fetching link preview:", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <h4>Link Preview</h4>
          <div className="input-group mb-3 " style={{ width: "50%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Link URL"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="input-group-text btn-dark"
              id="basic-addon2"
              onClick={HandleSubmit}
            >
              Check
            </button>
          </div>
          {linkPreview && (
            <div className="card" style={{ width: "18rem" }}>
              <img src={linkPreview.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{linkPreview.title}</h5>
                <p className="card-text">{linkPreview.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LinkPreview;
