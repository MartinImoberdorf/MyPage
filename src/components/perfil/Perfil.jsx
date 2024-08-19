import React from 'react';
import './perfil.css';

import avatar from '../../assets/avatar.png';
import linkedinIcon from '../../assets/icons/linkedin.png'
import githubIcon from '../../assets/icons/github.png'

function Perfil() {
  return (
    <article className="Home">
      <img className="imgAvatar" src={avatar} alt="Avatar" />
      <div>
        <h1>Martin Imoberdorf</h1>
        <h3>Systems Engineering Student</h3>
        <div className="redes">
          <a href="https://www.linkedin.com/in/martin-jos%C3%A9-imoberdorf-844886202/">
            <img src={linkedinIcon} alt="linkedinIcon" style={{ width: '35px' , height: '35px' }}/>
          </a>
          <a href="https://github.com/MartinImoberdorf">
            <img src={githubIcon} alt="githubIcon" style={{ width: '35px' , height: '35px' }}/>
          </a>
        </div>
      </div>
    </article>
  );
}

export { Perfil };
