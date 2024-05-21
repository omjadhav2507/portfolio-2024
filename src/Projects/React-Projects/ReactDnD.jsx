import React, { useState } from "react";
import { Reorder } from "framer-motion";

function ReactDnD() {
  const [items, setItems] = useState([
    { id: 1, text: "HTML/CSS", icon: "fab fa-html5 me-2" },
    { id: 2, text: " JavaScript", icon: "fab fa-js me-2" },
    { id: 3, text: " React JS", icon: "fab fa-react me-2" },
    { id: 4, text: "Bootstrap", icon: "fab fa-bootstrap me-2" },
  ]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h4 className="mb-4">Drag-to-Reorder</h4>
        <div className="col-12 col-md-6">
          <Reorder.Group axis="y" values={items} onReorder={setItems}>
            {items.map((item) => (
              <Reorder.Item key={item.id} value={item}>
                <div className="card mb-3">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <i className={item.icon} style={{ fontSize: "1.5rem" }}></i>
                    <span className="ms-2">{item.text}</span>
                  </div>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}

export default ReactDnD;
