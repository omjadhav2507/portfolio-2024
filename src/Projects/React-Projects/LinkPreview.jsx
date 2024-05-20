import React, { useState } from "react";

function LinkPreview() {
  const [input, setInput] = useState("");
  const [linkPreview, setLinkPreview] = useState(null);
  const API_KEY = "a635965690cf24d2acfa1fa722525eb1";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(
          input
        )}`
      );
      const data = await res.json();
      setLinkPreview(data);
    } catch (error) {
      console.error("Error fetching link preview:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h4>Link Preview</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Link URL"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-dark" onClick={handleSubmit}>
              Check
            </button>
          </div>
          {linkPreview && (
            <div className="card" style={{ width: "100%" }}>
              {linkPreview.image && (
                <img
                  src={linkPreview.image}
                  className="card-img-top"
                  alt="Link Preview"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{linkPreview.title}</h5>
                <p className="card-text">{linkPreview.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LinkPreview;
