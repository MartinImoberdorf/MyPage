import React from 'react';
import './project.css';

import AllInOneImage from '../../assets/projects/allInOne.png';
import RealTimeVehicleImage from '../../assets/projects/RealTimeVehicle.png';

import githubIcon from '../../assets/icons/github.png'
import pythonIcon from '../../assets/icons/python.png'
import javaIcon from '../../assets/icons/java.png'
import springBootIcon from '../../assets/icons/springBoot.png'
import JSIcon from '../../assets/icons/js.png'

function Project() {
    return (
        <article className="Projects">
                <h1>Projects</h1>
                <div className="OneProject">
                        <img src={AllInOneImage} alt="allInOne"/>
                        <div>
                                <h1>All In One</h1>
                                <p>Is a personal tool that allows you to gather all your social media and link profiles in one simple and clean interface. Stop searching across platforms or digging through notes to find your usernames — it’s all here.</p>
                                <div className="OneProjectDiv">
                                        <img src={javaIcon} alt="javaIcon" style={{ width: '30px' , height: '30px' }}/>
                                        <img src={springBootIcon} alt="springBootIcon" style={{ width: '30px' , height: '30px' }}/>
                                        <img src={pythonIcon} alt="pythonIcon" style={{ width: '30px' , height: '30px' }}/>
                                        <img src={JSIcon} alt="JSIcon" style={{ width: '30px' , height: '30px' }}/>
                                        <a href="https://github.com/MartinImoberdorf/ALL-IN-ONE">
                                                <img src={githubIcon} alt="githubIcon" style={{ width: '30px' , height: '30px' }}/>
                                        </a>
                                </div>
                        </div>          
                </div>
                <div className="OneProject">
                        <img src={RealTimeVehicleImage} alt="FootballViewNotIA"/>
                        <div>
                                <h1>Real-Time Fleet Telemetry & Anomaly Detection Platform</h1>
                                <p>This project implements a real-time, event-driven telemetry processing platform designed to ingest high-frequency vehicle data, evaluate behavioral anomalies using machine learning, and stream enriched results to clients with sub-second latency.</p>
                                <div className="OneProjectDiv">
                                        <img src={javaIcon} alt="javaIcon" style={{ width: '30px' , height: '30px' }}/>
                                        <img src={springBootIcon} alt="springBootIcon" style={{ width: '30px' , height: '30px' }}/>
                                        <img src={pythonIcon} alt="pythonIcon" style={{ width: '30px' , height: '30px' }}/>
                                        <img src={JSIcon} alt="JSIcon" style={{ width: '30px' , height: '30px' }}/>
                                        <a href="https://github.com/MartinImoberdorf/Real-Time-Fleet-Monitoring-System">
                                                <img src={githubIcon} alt="githubIcon" style={{ width: '30px' , height: '30px' }}/>
                                        </a>
                                </div>
                        </div>          
                </div>
                
        </article>
    );
}

export { Project };