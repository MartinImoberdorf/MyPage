import React from 'react';
import './secondaryProject.css';


import pythonIcon from '../../assets/icons/python.png'
import jsIcon from '../../assets/icons/js.png'
import htmlIcon from '../../assets/icons/html.png'
import cssIcon from '../../assets/icons/css.png'
import reactIcon from '../../assets/icons/react.png'
import cSharpIcon from '../../assets/icons/cSharp.png'
import unityIcon from '../../assets/icons/unity.png'

function SecondaryProject() {
  return (
    <article class="Projects-secondary">
        <a class="OneProject-Secondary" href="https://github.com/MartinImoberdorf/API-Champions-League-Winners">
            <h3>API Champions League</h3>
            <h4>API with FastAPI</h4>
            <div>
                <img src={pythonIcon} alt="pythonIcon" style={{ width: '30px' , height: '30px' }}/>
            </div>
        </a>

        <a class="OneProject-Secondary" href="https://github.com/MartinImoberdorf/CalculatorWithReact">
            <h3>Calculator</h3>
            <h4>Calculator with React</h4>
            <div>
                <img src={jsIcon} alt="jsIcon" style={{ width: '30px' , height: '30px' }}/>
                <img src={htmlIcon} alt="htmlIcon" style={{ width: '30px' , height: '30px' }}/>
                <img src={cssIcon} alt="cssIcon" style={{ width: '30px' , height: '30px' }}/>
                <img src={reactIcon} alt="reactIcon" style={{ width: '30px' , height: '30px' }}/>
            </div>
            
        </a>

        <a class="OneProject-Secondary" href="https://github.com/MartinImoberdorf/MyTimetableZoom2022">
            <h3>My Timetable</h3>
            <h4>A automatization for virtual Zoom classes</h4>
            <div>
                <img src={pythonIcon} alt="pythonIcon" style={{ width: '30px' , height: '30px' }}/>
            </div>
        </a>

        <a class="OneProject-Secondary" href="https://github.com/MartinImoberdorf/REFLEX">
            <h3>Reflex</h3>
            <h4>Video game to practice reflexes</h4>
            <div>
                <img src={unityIcon} alt="unityIcon" style={{ width: '30px' , height: '30px' }}/>
                <img src={cSharpIcon} alt="cSharpIcon" style={{ width: '30px' , height: '30px' }}/>
            </div>
        </a>
        
    </article>
  );
}

export { SecondaryProject };