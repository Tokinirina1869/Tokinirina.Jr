import React, { Component } from 'react';
import {FaBootstrap, FaReact} from 'react-icons/fa';
import {SiExpress,SiHtml5,SiCss3,SiPhp, SiTailwindcss, SiCplusplus} from 'react-icons/si';
class Competence extends Component {

    render() {
        const Frameworks = [
            {icon: <FaReact color="#61DBFB" size={30}/>,nom: "React JS", niveau: 70},
            {icon: <FaBootstrap color="#7952B3" size={30}/>,nom: "Bootstrap", niveau: 60},
            {icon: <SiExpress color="gray" size={30} />,nom: "Laravel", niveau: 20},
            {icon: <SiTailwindcss color="#38B2AC" size={30}/>,nom: "Tailwind", niveau: 20}
        ];

        const Programmation = [
            {icon: <SiPhp color="#777BB4" size={40}/>,nom: "PHP", niveau: 70},
            {icon: <SiCplusplus color="#00599C" size={30}/>,nom: "C++", niveau: 40},
            {icon: <SiHtml5 color="#E34F26" size={30}/>,nom: "HTML5", niveau: 70},
            {icon: <SiCss3 color="#1572B6" size={30} />,nom: "CSS3", niveau: 60}
        ];

        return (
            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <h2 className="mb-3 text-center p-2">Frameworks</h2>
                            <div className="competences-list">
                                {
                                    Frameworks.map((competences,index) =>(
                                        <div className="mb-4" key={index}>
                                            <div className="d-flex justify-content-between mb-1">
                                                <span>{competences.icon}{competences.nom}</span>
                                                <span>{competences.niveau}%</span>
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
                        <div className="card p-4">
                            <h2 className="mb-3 text-center p-2">Langages de Programmation</h2>
                            <div className="competences-list">
                                {
                                    Programmation.map((competences,index) =>(
                                        <div className="mb-4" key={index}>
                                            <div className="d-flex justify-content-between mb-1">
                                                <span Footer>{competences.icon}{competences.nom}</span>
                                                <span Footer>{competences.niveau}%</span>
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
        );
    }
}
export default Competence;