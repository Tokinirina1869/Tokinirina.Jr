import React, { Component } from "react";
import { Chrono } from "react-chrono";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Formation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: window.innerWidth < 768 ? "VERTICAL_ALTERNATING" : "HORIZONTAL"
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth < 768) {
      this.setState({ mode: "VERTICAL_ALTERNATING" }); // 📱 mobile
    } else {
      this.setState({ mode: "HORIZONTAL" }); // 💻 desktop
    }
  };

  render() {
    const Star= String.fromCharCode(9733);
    return (
      <div className="container card">
      
        <Chrono mode={this.state.mode} hideControls
            disableToolbar theme={{
              primary: "#0d6efd",
              cardForeColor: "#000000"
          }}>
          <div>
            <h4 className="text-primary fw-bold"> {Star} 2024 - 2025</h4>
            <p className="mb-0 text-center fw-bold" style={{textAlign: "justify", color: "blue"}}>
              Deuxième Année de Licence Professionnelle à l’Ecole Nationale d'Informatique (ENI).
              <br /><span className="fw-bold">Parcours: Informatique Générale (IG)</span>.
            </p>
          </div>

            <div>
              <h4 className="text-primary fw-bold"> {Star} 2023 - 2024</h4>
              <p className="mb-0 text-center fw-bold" style={{textAlign: "justify", color: "blue"}}>
                <strong>Première Année</strong> de Licence Professionnelle à l’Ecole Nationale d'Informatique (ENI).  
              <br />Parcours: Informatique Générale (IG).
              </p>
            </div>
            <div>
              <h4 className="text-primary fw-bold">{Star} 2022 - 2023</h4>
              <p className="mb-0 text-center fw-bold" style={{textAlign: "justify", color: "blue"}}>
                <strong>Obtention du Diplôme Baccalauréat</strong> au Lycée Catholique Saint Louis de Gonzague Mahasoabe.  
              <br />Série D, Mention: Assez-Bien.
              </p>
            </div>
        </Chrono>

      </div>
    );
  }
}

export default Formation;
