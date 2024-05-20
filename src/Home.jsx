import React from "react";
import "./index.css";
import AI from "./assets/ImaginAI.png";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-4 mb-0 p-4">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-4 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4 fw-bold logo">Portfolio</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                aria-current="page"
                style={{ color: "black" }}
              >
                omjadhs715@gmail.com
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/omjadhav2507"
                className="nav-link"
                style={{ color: "black" }}
              >
                <i className="fab fa-github" style={{ fontSize: "1.5rem" }}></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/om-jadhav-05598924a/"
                className="nav-link"
                style={{ color: "black" }}
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </li>
          </ul>
        </header>
      </div>

      <div className="container">
        <div className="p-2 mb-0 bg-light ">
          <div className="row align-items-center">
            <div className="col-md-6 ">
              <div className="container-fluid py-5">
                <div>
                  <h1
                    className="fw-bold"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Om Jadhav
                  </h1>
                  <p className="fw-light">UI Developer / Designer</p>
                  <p
                    className="col-md-12 fs-4 fw-normal "
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    A Computer Applications graduate from Pune, I am passionate
                    about blending design and technology. Specializing in User
                    Interface design and front-end development.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://ideogram.ai/api/images/direct/bEJXE3quTVKWWOrVcQfyMw.png"
                alt="Om Jadhav"
                className="img-fluid rounded-3"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-6 p-4">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 p-4 ">
          <div className="col d-flex align-items-start ">
            <div>
              <h2 className="fw-bold mb-2" style={{ fontSize: "1.3rem" }}>
                <span>
                  <i className="fa-solid fa-briefcase me-2"></i>
                </span>
                Skills
              </h2>
              <div className="mb-3">
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  Interface Design
                </span>

                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  Problem Solving
                </span>

                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  Design Thinking
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  Analytical
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  Web Design
                </span>
              </div>
            </div>
          </div>

          <div className="col d-flex align-items-start">
            <div>
              <h2 className="fw-bold mb-3" style={{ fontSize: "1.3rem" }}>
                <span>
                  <i className="fa-solid fa-code me-2"></i>
                </span>
                Technical Skills
              </h2>
              <p>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-python"></i> Python
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-html5"></i> HTML/CSS
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-js"></i> JavaScript
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fas fa-database"></i> SQL
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-php"></i> PHP
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-node-js"></i> Node.js
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-node-js "></i> Express.js
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fas fa-database"></i> MongoDB
                </span>
              </p>
            </div>
          </div>

          <div className="col d-flex align-items-start">
            <div>
              <h2 className="fw-bold mb-3" style={{ fontSize: "1.3rem" }}>
                <span>
                  <i className="fa-solid fa-pen-nib me-2"></i>
                </span>
                Frameworks & Tools
              </h2>
              <span
                className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                style={{
                  fontSize: "1rem",
                  padding: "0.3rem",
                  color: "black",
                }}
              >
                <i className="fab fa-react"></i> React JS
              </span>
              <span
                className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                style={{
                  fontSize: "1rem",
                  padding: "0.3rem",
                  color: "black",
                }}
              >
                <i className="fab fa-bootstrap"></i> Bootstrap
              </span>
              <span
                className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                style={{
                  fontSize: "1rem",
                  padding: "0.3rem",
                  color: "black",
                }}
              >
                <i className="fab fa-tailwind"></i> Tailwind CSS
              </span>
              <span
                className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                style={{
                  fontSize: "1rem",
                  padding: "0.3rem",
                  color: "black",
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </span>
              <span
                className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                style={{
                  fontSize: "1rem",
                  padding: "0.3rem",
                  color: "black",
                }}
              >
                <i className="fab fa-figma"></i> Figma
              </span>
              <span
                className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                style={{
                  fontSize: "1rem",
                  padding: "0.3rem",
                  color: "black",
                }}
              >
                <i className="fab fa-wordpress"></i> WordPress
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-6">
        <div>
          <h2
            className="fw-bold p-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Projects
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={AI}
                className="card-img-top"
                alt="Project"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <a
                  href="https://imagin-ai-mu.vercel.app/"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <h5 className="card-title" style={{ margin: 0 }}>
                    <i className="fa-solid fa-link"></i> ImaginAI
                  </h5>
                </a>

                <p className="card-text p-2">
                  An AI-powered text-to-image generator that provides you with
                  endless results in real-time.
                </p>
              </div>
              <div className="card-footer">
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-html5"></i> HTML/CSS
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-react"></i> React
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-bootstrap"></i> Bootstrap
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fa-solid fa-microchip"></i> Generative AI APIs
                </span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"
                className="logo react card-img-top"
                alt="React logo"
                style={{ height: "300px" }}
              />

              <div className="card-body">
                <Link
                  to="/reactUI"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <h5 className="card-title" style={{ margin: 0 }}>
                    {" "}
                    <i className="fa-solid fa-link me-2"></i>React Small
                    Projects
                  </h5>{" "}
                </Link>
                <p className="card-text p-2">
                  These are some projects I built during the 30 Days of React
                  challenge. This month-long journey enhanced my design skills
                  and solidified core concepts.
                </p>
              </div>
              <div className="card-footer">
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-html5"></i> HTML/CSS
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-react"></i> React
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-bootstrap"></i> Bootstrap
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fa-solid fa-microchip"></i>APIs
                </span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src="https://assets.justinmind.com/wp-content/uploads/2023/04/angular-material-ui-library-header-justinmind-768x492.png"
                className="card-img-top"
                alt="Project"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <Link
                  to="/figmaUI"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <h5 className="card-title" style={{ margin: 0 }}>
                    {" "}
                    <i className="fa-solid fa-link me-2"></i>Figma Web UI
                    Components
                  </h5>{" "}
                </Link>

                <p className="card-text p-2">
                  Designed a comprehensive set of standard web UI components in
                  Figma , Each component is created with different variants and
                  fully utilizes Figma's auto layout feature.
                </p>
              </div>
              <div className="card-footer">
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fab fa-figma"></i> Figma
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  <i className="fa-solid fa-circle-half-stroke"></i> UI Design
                </span>
                <span
                  className="badge border border-dark me-2 mb-2 hover-bg-dark hover-text-white"
                  style={{
                    fontSize: "1rem",
                    padding: "0.3rem",
                    color: "black",
                  }}
                >
                  Web Design
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container"></div>
      </div>
    </>
  );
}

export default Home;
