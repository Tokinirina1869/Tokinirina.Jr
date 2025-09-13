import Navigation from "./Navigation";
import Apropo from "./Apropo";
import Formation from "./Formation";
import Projets from "./Projets";
import Competence from './Competence';
import Contact from './Contact';
import Footer from './Footer';
import { Component } from 'react';

class Projet extends Component{

    render()
    {
        // const { t } = this.props;
         return(
            <div>
                <nav className="navbar card navbar-expand-lg navbar-dark fw-bold bg-primary fixed-top">
                    <Navigation />
                </nav>

                <div className="text-center p-5 card" id="apropos">
                    <Apropo />
                </div>

                <div className="py-5" id="projets">
                    <Projets />
                </div>
                <div className="py-5" id="formation">
                    <h2 className="text-center fw-bold p-5">
                        Formations Professionnelles
                    </h2>
                    <Formation />
                </div>
                <div className="py-4 card" id="competences">
                    <h2 className="text-center fw-bold">Mes Compétences </h2>
                    <Competence />
                </div>

                <div className="container mt-5" id="contacts">
                <Contact />
                </div>

                <footer className='mt-4 p-4'>
                    <Footer />
                    <hr />
                    <div className="mb-4 text-center">
                        <button className="btn btn-outline-primary me-2">Français 🇫🇷</button>
                        <button className="btn btn-outline-success me-2">English 🇬🇧</button>
                        <button className="btn btn-outline-warning me-2">Malagasy 🇲🇬</button>
                        <button className="btn btn-none">&copy; Copy Right Portfolio-Toky-Robert 2025.</button>
                    </div>
                </footer>
            </div>
        )
    }
   
}

export default Projet