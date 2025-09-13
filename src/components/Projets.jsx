import React, { Component } from 'react';
import php1 from "../assets/PHP/a.png"
import php2 from "../assets/PHP/b.png"
import php3 from "../assets/PHP/c.png"
import php4 from "../assets/PHP/d.png"
import php5 from "../assets/PHP/e.png"
import php6 from "../assets/PHP/f.png"
import php7 from "../assets/PHP/g.png"
import php8 from "../assets/PHP/h.png"
import php9 from "../assets/PHP/i.png"
import php10 from "../assets/PHP/k.png"
import php11 from "../assets/PHP/l.png"
import php12 from "../assets/PHP/m.png"
import php13 from "../assets/PHP/n.png"
import php14 from "../assets/PHP/o.png"
import image1 from "../assets/1a.png"
import image2 from "../assets/1b.png"
import image3 from "../assets/1c.png"
import image4 from "../assets/1d.png"
import vue1 from "../assets/VueJs/a.png";
import vue2 from "../assets/VueJs/b.png";
import vue3 from "../assets/VueJs/c.png";
import vue4 from "../assets/VueJs/d.png";
import vue5 from "../assets/VueJs/e.png";
import vue6 from "../assets/VueJs/f.png";
import vue7 from "../assets/VueJs/g.png";
import vue8 from "../assets/VueJs/h.png";
import vue9 from "../assets/VueJs/i.png";
class Projets extends Component {
    constructor(props) {
        super(props);

        this.cards = [
            {
                title: "Gestion de Pharmacie",
                images: [php1,php2,php3,php4, php5, php6,php7,php8,php9,php10,php11,php12,php13,php14],
                text: "Une application Web de mettre en place les médicaments actuels: ses nombres d'entrées et le nombre d'achat de chaque Clients",
                icon: "&#128138;",
                link: "https://github.com/Tokinirina1869/PHP.git"
            },
            {
                title: "Gestion de l'Orphelinat",
                images: [php1,php12, php3],
                text: "Application Desktop développée en C Sharp, On utilise la gestion de Base de Données Mysql, qui gère le suivi des orphelins dans une enceinte cloturée",
                icon: "&#127968;",
                link: "https://github.com/Tokinirina1869/VueJs.git"
            },
            {
                title: "Gestion de paiement de Bourse",
                images: [image1, image2, image3, image4],
                text: "Une application Desktop développée en Java, on utilise PostgreSql pour la gestion de Base de Données en suivant le paiement du Bourse",
                icon: "&#128182;",
                link: "https://github.com/Tokinirina1869/Java.git"
            },
            {
                title: "Gestion des Employés",
                images: [vue1, vue2, vue3, vue4, vue5, vue6, vue7, vue8, vue9],
                text: "Une application Web développée en React Js pour le Frontend et PHP pour le Backend, on utilise PostgreSql pour la gestion de Base de Données.",
                icon: "&#128101;",
                link: "https://github.com/Tokinirina1869/VueJs.git"
            },
        ];

        // état initial
        this.state = {
            indexes: this.cards.map(() => 0),
            fade: this.cards.map(() => true),
        };

    }

    componentDidMount() {
         // équivalent du useEffect avec setInterval
        this.interval = setInterval(() => {
        // on enlève le fade
        this.setState({ fade: this.cards.map(() => false) });

        setTimeout(() => {
            // on change l'image et on remet fade
            this.setState(prevState => ({
            indexes: prevState.indexes.map((idx, cardIdx) =>
                (idx + 1) % this.cards[cardIdx].images.length
            ),
            fade: this.cards.map(() => true)
            }));
        }, 1000);
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { indexes, fade } = this.state;
        return (
            <div className="py-5" id="projets">
                <h2 className="fw-bold  text-center">Mes Projets</h2>
                <div className="container mt-5">
                <div className="row g-4">
                    {this.cards.map((card, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card Footer h-100 shadow">
                        <div className="card-body">
                            <div className="mb-3">
                            <span className="display-6 text-danger" dangerouslySetInnerHTML={{ __html: card.icon }}/>
                            </div>
                            <h3 className="card-title text-center fw-bold mt-2">{card.title}</h3>
                            <img src={card.images[indexes[index]]} alt={card.title} className="img-fluid card-img-top"
                                style={{ width: "100%", height: "auto", objectFit: "contain", transition: "opacity 1s ease-in-out", opacity: fade[index] ? 1 : 0
                                }}
                            />
                            <p className="card-text p-4" style={{ textAlign: "justify" }} > {card.text} </p>
                        </div>
                        <div className="card-footer bg-transparent border-0 text-end">
                            <a href={card.link} className='btn btn-primary'>Code Source<span className=" fs-4 fw-bold">&rarr;</span></a>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

            </div>
        );
    }
}

export default Projets;