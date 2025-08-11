import { useState, useRef, useEffect } from "react";
import {FaBootstrap, FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaReact, FaWhatsapp} from 'react-icons/fa';
import {SiExpress,SiHtml5,SiCss3,SiPhp, SiTailwindcss, SiGmail, SiCplusplus} from 'react-icons/si';
import emailjs from "emailjs-com";
import image from '../assets/Toky.jpg';
import image1 from "../assets/1a.png";
import image2 from "../assets/1b.png";
import image3 from "../assets/1c.png";
import image4 from "../assets/1d.png";

function Projets(){

    const [menuState, setMenuState] = useState(false);
    const form = useRef();

    const sendemail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cpy0mjj', 'template_20lg1ph', form.current, '8W8QRmRhPj8Aj3YCn')
        .then((result) => {
            console.log(result.text);
            alert("Email envoyé avec succès! ");
        }, (error) => {
            console.log(error.text);
            alert("Erreur lors de l'envoi un email! ");
        });

        e.target.reset();
    }

    const toggleMenu = () => {
        setMenuState(!menuState)
    }


    const Image = {
        backgroundImage: `url(${image})`,
        backgroundSize : "cover",
        backgroundPosition : "center",
        backgroundRepeat : "no-repeat",
        minHeight: "20px",
        borderRadius : "10px",  
    }; 
    const cards = [
        {
            title:"Gestion de Pharmacie",
            images: [image,image2,image3,image4],
            text: "Un projet permet de faire le CRUD (Create Read Update Delete), jusqu'à la génération du réçu de client achétés des médicaments.",
            icon: "&#128138;"
            
        },
        {
            title:"Gestion de l'Orphelinat",
            images: [image,image1,image3,image4],
            text: "Comprehensive documentation covering every aspect of the Laravel framework. Perfect for all experience levels.",
            icon: "&#127968;"
            
        },
        {
            title:"Gestion de paiement de Bourse",
            images: [image,image2,image1,image4],
            text: "Comprehensive documentation covering every aspect of the Laravel framework. Perfect for all experience levels.",
            icon: "&#128182;"
            
        },
          {
            title:"Gestion des Employés",
            images: [image,image1,image2,image3],
            text: "Comprehensive documentation covering every aspect of the Laravel framework. Perfect for all experience levels.",
            icon: "&#128101;"
            
        },
    ];

    const Frameworks = [
        {icon: <FaReact color="#61DBFB" size={30}/>,nom: "React JS", niveau: 60},
        {icon: <FaBootstrap color="#7952B3" size={30}/>,nom: "Bootstrap", niveau: 70},
        {icon: <SiExpress color="gray" size={30} />,nom: "Express JS", niveau: 60},
        {icon: <SiTailwindcss color="#38B2AC" size={30}/>,nom: "Tailwind", niveau: 60}
    ];

    const Programmation = [
        {icon: <SiPhp color="#777BB4" size={40}/>,nom: "PHP", niveau: 60},
        {icon: <SiCplusplus color="#00599C" size={30}/>,nom: "C++", niveau: 70},
        {icon: <SiHtml5 color="#E34F26" size={30}/>,nom: "HTML5", niveau: 60},
        {icon: <SiCss3 color="#1572B6" size={30} />,nom: "CSS3", niveau: 60}
    ];
    const qualites = [
        {nom: "Autodidacte", niveau: 90},
        {nom: "Sociable", niveau: 95},
        {nom: "Dynamique", niveau: 95}
    ]

    const Langue = [
        {nom: "Malagasy", niveau:98},
        {nom: "Français", niveau: 60},
        {nom: "Anglais", niveau: 60}
    ]

    const [indexes, setIndexes] = useState(cards.map(() =>0 ))
    const [fade, setFade] = useState(cards.map(() => true ))

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(cards.map(() => false));

            setTimeout(() => {
                setIndexes((prevIndexes) =>
                    prevIndexes.map((idx, cardIdx) => 
                    (idx + 1) % cards[cardIdx].images.length) 
                )
                setFade(cards.map(() =>true))
            }, 1000)
        },2000)

        return () => clearInterval(interval)
    });

    return (
        <>

            <nav className="navbar card navbar-expand-lg navbar-dark fw-bold bg-primary fixed-top">
                <div className="container">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <div className="bg-white text-primary fw-bold rounded-circle d-flex justify-content-center align-items-center me-2">
                            J.R
                        </div>
                        Porfolio
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded={ menuState ? "true":"false" } aria-label="Toggle navigation" onClick={toggleMenu}> 
                        { menuState ? (
                            <span style={{ fontSize: "1.5rem", color: "white"}}>&#x2715;</span>): ( <span className="navbar-toggler-icon"></span> )
                        }
                        
                    </button>

                    <div className={`collapse navbar-collapse ${menuState ? "show" : ""}`} id="navbarNav">
                        <ul className="nav navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#accueil" className="nav-link btn-lg fw-bold active" onClick={()=>setMenuState(false)}>Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projets" className="nav-link btn-lg fw-bold" onClick={()=>setMenuState(false)}>Projets</a>
                            </li>
                            <li className="nav-item">
                                <a href="#competences" className="nav-link btn-lg fw-bold" onClick={()=>setMenuState(false)}>Compétences</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contacts" className="nav-link btn-lg fw-bold" onClick={()=>setMenuState(false)}>Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>  
            </nav>

            <div className="bg-dark text-white py-4 card" id="accueil">
                <div className="container mt-2">
                <div className="row d-flex bg-dark">
                    <h1 className="fw-bold p-4 text-center">Développeur d'Application Web</h1>
                    <div className="col-lg-6 text-center">
                        <img src={image} className="rounded-circle ms-5" alt="Tokinirina Jean Robert" width={200} height={200} style={{border: "5px solid white"}} />
                        <p className="p-4 fs-4 fw-bold">Développé par : <span>Tokinirina Jean Robert</span></p>
                    </div>
                    
                    <div className="col-lg-6">
                        <p style={{textAlign: "justify"}} className="p-4">
                            Je m'appelle <b>RANDRIANANDRASANA Tokinirina Jean Robert</b>, étudiant en deuxième année (<b>L<sub>2</sub></b>) 
                            de la Formation de Licence Professionnelle à l'Ecole Nationale d'Informatique (<b>ENI</b>)
                            Tanambao Fianarantsoa, Mention Informatique de Parcours: Informatique Générale (<b>IG</b>).
                            Je suis un développeur web passionné par la création de solutions numériques éfficaces. 
                            Mon objectif est de fournir des applications web performantes, accessibles et maintenables.<br/>
                            <a href="#contacts" className="btn btn-primary btn-lg fw-bold ms-5 mt-5">Contactez-moi</a>
                        </p> 
                    </div>
                </div>
                </div>
            </div>

            <div className="bg-dark text-white py-5" id="projets">
                <h2 className="fw-bold text-white text-center">Mes Projets de l'année 2025</h2>
                <div className="container mt-5">
                    <div className="row g-4">
                        {cards.map((card,index) =>(
                            <div className="col-md-6" key={index}>
                                <div className="card bg-dark text-white h-100 shadow">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <span className="display-6 text-danger" dangerouslySetInnerHTML={{ __html:card.icon }} />
                                        </div>
                                        <h3 className="card-title text-center fw-bold mt-2">{card.title}</h3>
                                        <img src={card.images[indexes[index]]} alt={card.title} className="card card-img-top" style={{height: "40vh", objectFit: "cover",
                                        transition: "opacity 5s ease-in-out",
                                        opacity: fade[index] ? 1 : 0}}/>
                                        <p className="card-text p-4" style={{textAlign: "justify"}}>{card.text}</p>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 text-end">
                                        <span className="text-white fs-4 fw-bold">&rarr;</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-dark text-white py-4 card" id="competences">
                <h2 className="text-center text-white fw-bold">Mes Compétences </h2>
                <div className="container mt-5">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card bg-dark p-4">
                                <h2 className="mb-3 text-white text-center p-2">Frameworks</h2>
                                <div className="competences-list">
                                    {
                                        Frameworks.map((competences,index) =>(
                                            <div className="mb-4" key={index}>
                                                <div className="d-flex justify-content-between mb-1">
                                                    <span className=" text-white">{competences.icon}{competences.nom}</span>
                                                    <span className=" text-white ">{competences.niveau}%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary " role="progressbar" style={{width: `${competences.niveau}%`}} aria-valuenow={competences.niveau} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-dark p-4">
                                <h2 className="mb-3 text-white text-center p-2">Langages de Programmation</h2>
                                <div className="competences-list">
                                    {
                                        Programmation.map((competences,index) =>(
                                            <div className="mb-4" key={index}>
                                                <div className="d-flex justify-content-between mb-1">
                                                    <span className=" text-white ">{competences.icon}{competences.nom}</span>
                                                    <span className=" text-white ">{competences.niveau}%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary " role="progressbar" style={{width: `${competences.niveau}%`}} aria-valuenow={competences.niveau} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-dark p-4">
                                <h2 className="mb-3 text-white text-center p-2">Qualités</h2>
                                <div className="competences-list">
                                    {
                                        qualites.map((competences,index) =>(
                                            <div className="mb-4" key={index}>
                                                <div className="d-flex justify-content-between mb-1">
                                                    <span className=" text-white ">{competences.nom}</span>
                                                    <span className=" text-white ">{competences.niveau}%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary " role="progressbar" style={{width: `${competences.niveau}%`}} aria-valuenow={competences.niveau} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card bg-dark p-4">
                                <h2 className="mb-3 text-white text-center p-2">Langues</h2>
                                <div className="competences-list">
                                    {
                                        Langue.map((competences,index) =>(
                                            <div className="mb-4" key={index}>
                                                <div className="d-flex justify-content-between mb-1">
                                                    <span className=" text-white ">{competences.nom}</span>
                                                    <span className=" text-white ">{competences.niveau}%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-primary " role="progressbar" style={{width: `${competences.niveau}%`}} aria-valuenow={competences.niveau} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5" id="contacts">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="text-center text-white fw-bold mt-3">
                                Envoyer un message
                            </h2>

                            <form ref={form} onSubmit={sendemail}>
                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label text-white fw-bold">Nom: </label>
                                    <input type="text" name="nom" className="form-control" placeholder="Votre nom..." required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-white fw-bold">Email: </label>
                                    <input type="email" name="email" className="form-control" placeholder="Votre email..." required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telephone" className="form-label text-white fw-bold">Numéro Téléphone: </label>
                                    <input type="number" name="phone" className="form-control" minLength={12} maxLength={12} placeholder="Votre numéro..." required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label text-white fw-bold">Message: </label>
                                    <textarea name="message" className="form-control" required/>
                                </div>

                                <button type="submit" className="btn btn-primary fw-bold w-100">
                                    Envoyer
                                </button>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center text-white fw-bold mt-5">Vous pouvez me suivre sur les réseaux sociaux et sur Github. </h2>
                        <div className="py-4">
                            <ul className="nav navbar nav-expand-lg mt-5" style={{minHeight: "45vh"}}>
                                <li className="nav-item">
                                    <a href="https://www.facebook.com/profile.php?id=61551872407721" target="_blank" rel="noopener noreferrer" className="nav-link transition">
                                        <span style={{fontSize: "2rem"}} className="ms-1"><FaFacebook color="#1877F2" size={30}/> &rarr;</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.linkedin.com/in/tokinirina-robert-b9aa01379/" target="_blank" rel="noopener noreferrer" className="nav-link transition">
                                        <span style={{fontSize: "2rem"}} className="ms-1"><FaLinkedin color="#0A66C2" size={30}/> &rarr;</span>
                                    </a>
                                </li>
                                <li className="nav-item text-center">
                                    <a href="mailto:roberttokinirina@gmail.com" target="_blank" rel="noopener noreferrer" className="nav-link transition">
                                        <span style={{fontSize: "2rem"}} className="ms-1"><SiGmail color="#EA4335" size={30}/> &rarr;</span> 
                                    </a>
                                </li>
                                <li className="nav-item text-center">
                                    <a href="https://github.com/Tokinirina1869" target="_blank" rel="noopener noreferrer" className="nav-link transition">
                                        <span style={{fontSize: "2rem"}} className="ms-1"><FaGithub color="#181717" size={30}/> &rarr;</span> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-center text-white py-3">@Copy-2025 Portfolio-Toky-Robert Privacy 
                
            </footer>
        </>
    )
}

export default Projets