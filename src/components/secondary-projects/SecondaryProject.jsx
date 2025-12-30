import React from 'react';
import './secondaryProject.css';

import pythonIcon from '../../assets/icons/python.png'
import jsIcon from '../../assets/icons/js.png'
import htmlIcon from '../../assets/icons/html.png'
import cssIcon from '../../assets/icons/css.png'
import javaIcon from '../../assets/icons/java.png'
import springBootIcon from '../../assets/icons/springBoot.png'
import dockerIcon from '../../assets/icons/docker.png'
import mongoDBIcon from '../../assets/icons/mongoDB.png'
import promtheusIcon from '../../assets/icons/prometheus.png'
import keycloakIcon from '../../assets/icons/keycloak.png'
import flaskIcon from '../../assets/icons/flask.png'
import tailwindIcon from '../../assets/icons/tailwind.png'

function SecondaryProject() {
  return (
    <article className="projects-secondary">
        <a className="one-project-secondary" href="https://github.com/MartinImoberdorf/API-Champions-League-Winners">
            <h3>API Champions League</h3>
            <h4>API with FastAPI</h4>
            <div>
                <img src={pythonIcon} alt="pythonIcon"/>
            </div>
        </a>

        <a className="one-project-secondary" href="https://github.com/MartinImoberdorf/OnlineShoppingApp-Microservices">
            <h3>Online Shopping App - Microservices</h3>
            <h4></h4>
            <div>
                <img src={javaIcon} alt="javaIcon"/>
                <img src={springBootIcon} alt="springBootIcon"/>
                <img src={dockerIcon} alt="dockerIcon"/>
                <img src={mongoDBIcon} alt="mongoDBIcon"/>
                <img src={promtheusIcon} alt="prometheusIcon"/>
                <img src={keycloakIcon} alt="keycloakIcon"/>
            </div>
            
        </a>

        <a className="one-project-secondary" href="https://github.com/MartinImoberdorf/ForumCommunity-with-Flask">
            <h3>ForumCommunity-with-Flask</h3>
            <h4></h4>
            <div>
                <img src={pythonIcon} alt="pythonIcon"/>
                <img src={flaskIcon} alt="flaskIcon"/>
                <img src={htmlIcon} alt="htmlIcon"/>
                <img src={cssIcon} alt="cssIcon"/>
            </div>
        </a>

        <a className="one-project-secondary" href="https://github.com/MartinImoberdorf/An-Easy-Way-to-Master-Phrasal-Verbs">
            <h3>An Easy Way to Master Phrasal Verbs</h3>
            <h4></h4>
            <div>
                <img src={htmlIcon} alt="htmlIcon"/>
                <img src={cssIcon} alt="cssIcon"/>
                <img src={jsIcon} alt="jsIcon"/>
                <img src={tailwindIcon} alt="tailwindIcon"/>
            </div>
        </a>
        
    </article>
  );
}

export { SecondaryProject };