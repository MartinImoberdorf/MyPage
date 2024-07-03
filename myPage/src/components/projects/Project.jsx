import React from 'react';
import './project.css';

import NRImage from '../../assets/projects/NR.png';
import FootballViewNotIAImage from '../../assets/projects/FootballViewNotIA.png';
import pythonIcon from '../../assets/icons/python.png'
import githubIcon from '../../assets/icons/github.png'
import cSharpIcon from '../../assets/icons/cSharp.png'
import unityIcon from '../../assets/icons/unity.png'

function Project() {
  return (
    <article class="Projects">
        <h1>Projects ⭐</h1>
        <div class="OneProject">
            <img src={NRImage} alt="Never Remember"/>
            <div>
                <h1>Never Remember</h1>
                <p>Is a Python app that utilizes JSON to help you remember important dates through notifications when you turn on your computer</p>
                <div class="OneProjectDiv">
                    <img src={pythonIcon} alt="pythonIcon" style={{ width: '30px' , height: '30px' }}/>
                    <a href="https://github.com/MartinImoberdorf/Never-Remember">
                        <img src={githubIcon} alt="githubIcon" style={{ width: '30px' , height: '30px' }}/>
                    </a>
                </div>
            </div>          
        </div>
        <div class="OneProject">
            <img src={FootballViewNotIAImage} alt="FootballViewNotIA"/>
            <div>
                <h1>Football View Without AI</h1>
                <p> is a Unity-based project that offers a unique football match visualization experience. Unlike current trends, this project stands out by eschewing the use of Artificial Intelligence (AI)</p>
                <div class="OneProjectDiv">
                    <img src={unityIcon} alt="unityIcon" style={{ width: '30px' , height: '30px' }}/>
                    <img src={cSharpIcon} alt="cSharpIcon" style={{ width: '30px' , height: '30px' }}/>
                    <a href="https://github.com/MartinImoberdorf/FootballViewNotIA">
                    <img src={githubIcon} alt="githubIcon" style={{ width: '30px' , height: '30px' }}/>
                    </a>
                </div>
            </div>          
        </div>
    </article>
  );
}

export { Project };