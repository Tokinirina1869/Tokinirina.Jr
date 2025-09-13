import React, { Component } from 'react';
import emailjs from "emailjs-com";
import { FaFacebook, FaLinkedin,FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kqm6gua', 
            'template_x6p97jn', 
            this.form.current, 
            'C8cwHsdPGvx-hD0y2' // key public
        )
        .then((result) => {
            console.log(result.text);
            alert("Email envoyé avec succès! ");
        }, (error) => {
            console.log(error.text);
            alert("Erreur lors de l'envoi un email! ");
        });

        e.target.reset();
    }

    render() {

        return (
             <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="p-4">
                        <h2 className="text-center fw-bold mt-3">
                            Envoyer un message
                        </h2>

                        <form ref={this.form} onSubmit={this.sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="nom" className="form-label fw-bold">Nom: </label>
                                <input type="text" name="nom" className="form-control" placeholder="Votre nom..." required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-bold">Email: </label>
                                <input type="email" name="email" className="form-control" placeholder="Votre email..." required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telephone" className="form-label fw-bold">Numéro Téléphone: </label>
                                <input type="tel" name="tel" className="form-control" placeholder="Votre numéro..." required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label fw-bold">Message: </label>
                                <textarea name="message" className="form-control" required/>
                            </div>

                            <button type="submit" className="btn btn-primary fw-bold w-100">
                                Envoyer
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;