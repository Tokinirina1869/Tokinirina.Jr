import React, { Component } from 'react';
import { FaPhone,FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="container">
                <h2 className='fw-bold text-center'>Contacts</h2>
                <div className="row align-items-center">
                    <div className="col-md-4 mb-4">
                        <p className="mb-2">
                            <FaPhone className='me-2'/> 038 30 142 95 / 038 60 176 34
                        </p>
                        <p className="mb-2 d-flex">
                            <FaFacebook color='#1877F2' size={24} className='me-2' />
                            <a href="https://www.facebook.com/profile.php?id=61551872407721" target="_blank" rel="noopener noreferrer" className="nav-link transition">
                            Tokinirina
                            </a>
                        </p>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <p className="mb-2 d-flex">
                            <FaLinkedin color="#0A66C2" size={24} className='me-2'/>
                            <a href="https://www.linkedin.com/in/tokinirina-robert-b9aa01379/" target="_blank" rel="noopener noreferrer" className="nav-link transition">
                                Tokinirina Jean Robert
                            </a>
                        </p>
                        <p className="mb-2 d-flex">
                             <FaGithub color="#181717" size={24} className='me-2'/>
                            <a href="https://github.com/Tokinirina1869" target="_blank" rel="noopener noreferrer" className="nav-link transition">
                                Tokinirina1869
                            </a>
                        </p>
                    </div>
                    <div className="col-md-4 mb-2">
                        <p className="mb-2 d-flex">
                            <SiGmail color="#EA4335" size={24} className="me-2"/>
                            <a 
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=roberttokinirina@gmail.com"
                                target="_blank" rel="noopener noreferrer" className="nav-link transition">
                                roberttokinirina@gmail.com
                            </a>
                        </p>
                        <p className="mb-2 d-flex align-items-center">
                            <SiGmail color="#EA4335" size={24} className="me-2"/>
                            <a 
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=robertrandrianandrasana62@gmail.com"
                                target="_blank" rel="noopener noreferrer" className="nav-link transition">
                                robertrandrianandrasana62@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Footer;