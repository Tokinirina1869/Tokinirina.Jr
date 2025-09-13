import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: false,
      theme: "dark",
    };
  }

  componentDidMount() {
    document.body.setAttribute("data-bs-theme", this.state.theme);
    document.body.style.color = this.state.theme === "dark" ? "white" : "black";
  }

  toggleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === "light" ? "dark" : "light",
      }),
      () => {
        const theme = this.state.theme;
        document.body.setAttribute("data-bs-theme",theme);
        document.body.style.color = theme === "dark" ? "white" : "black";
      }
    );
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ menuState: !prevState.menuState }));
  };

  render() {
    const { menuState, theme } = this.state;

    return (
      <div className="container" style={{ color: theme === "dark" ? "white" : "black" }}>
        <a href="#" className="navbar-brand d-flex align-items-center">
          <div className="bg-success text-primary fw-bold rounded-circle d-flex justify-content-center align-items-center me-2">
            J.R
          </div>
          Jean Robert
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={menuState ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={this.toggleMenu}
        >
          {menuState ? (
            <span style={{ fontSize: "1.5rem", color: "white" }}>&#x2715;</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div className={`collapse navbar-collapse ${menuState ? "show" : ""}`} id="navbarNav">
          <ul className="nav navbar-nav ms-auto">
            {["apropos", "formation", "projets", "competences", "contacts"].map((section) => (
              <li className="nav-item btn btn-outline-primary me-2" key={section}>
                <a
                  href={`#${section}`}
                  className="nav-link btn-lg fw-bold"
                  onClick={() => this.setState({ menuState: false })}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <Button onClick={this.toggleTheme}
                variant={theme === "light" ? "dark" : "light"}>
                {theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
