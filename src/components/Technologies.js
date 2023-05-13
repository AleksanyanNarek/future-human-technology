import '../styles/technologies.css';

import bubblesTechnologies from '../images/bubblesTechnologies.png';

import gear from '../images/gear.svg';
import engineering from '../images/engineering.svg';
import industry from '../images/Industry.svg';

function Technologies() {
    return (
        <div className="technologies middle appChild">
            <img className="bubblesT" src={bubblesTechnologies} alt="bubblesTechnologies" />
            <div className="leftSpace blackP technologiesInfo">
                <h4>TECHNOLOGY NEWS</h4>
                <h2>Robotic Technologies</h2>
                <div className="technologiesPgraphs">
                    <div className="technologiesPgraph">
                        <img src={gear} alt="gear" />
                        <h3>Robotization</h3>
                        <p>When the first industrial revolution hit ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    </div>
                    <div className="technologiesPgraph">
                        <img src={engineering} alt="engineering" />
                        <h3>Engineering</h3>
                        <p>When the first industrial revolution hit ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    </div>
                    <div className="technologiesPgraph">
                        <img src={industry} alt="industry" />
                        <h3>Industry</h3>
                        <p>When the first industrial revolution hit ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;