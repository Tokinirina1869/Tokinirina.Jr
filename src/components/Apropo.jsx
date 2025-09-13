import React, { Component } from 'react';
import image from "../assets/Toky.jpg";
class Apropo extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const Image = {
            backgroundImage: `url(${image})`,
            backgroundSize : "cover",
            backgroundPosition : "center",
            backgroundRepeat : "no-repeat",
            minHeight: "20px",
            borderRadius : "10px",  
        };
        return (
            <div className="container mt-2">
                <img src={image} className="rounded-circle ms-5" alt="Tokinirina Jean Robert" width={200} height={200} style={{border: "5px solid white"}} />
                <h2 className="fw-bold tFooter">Développeur Web FullStack</h2>
                <h3 className="text-primary mt-4 fw-bold text-center">A propos de moi</h3>
                <p style={{textAlign: "justify"}} className="mt-3 px-3">
                    Je m'appelle <b>RANDRIANANDRASANA Tokinirina Jean Robert</b> mais tout le monde m'appellent <b>Toky</b>. 
                    Je suis une personne passionnée au monde de l'Informatique dépuis longtemps. Maintenant,
                    je suis un étudiant en Deuxième Année de Licence Professionnelle à l'Ecole Nationale de 
                    l'Informatique Tanambao Fianarantsoa, de Parcours Informatique Général. Etudiant ponctuel, autonome, sociable, curieux et autodidacte!!!
                </p> 
            </div>
        );
    }
}


export default Apropo;