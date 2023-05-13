import '../styles/robotsAI.css';

import flyCar from '../images/flyCar.png';
import handsBig from '../images/handsBig.jpg';

function RobotsAI() {
    return (
        <div className="robotsAI middle appChild">
            <div className="leftSpace blackP robotsAIinfo">
                <div className="robotsAIleft">
                    <h4>AI PERSPECTIVES</h4>
                    <h2>Robots and AI</h2>
                    <div className="robotsAIleftText">
                        <h3>Finding your place in a robotic world</h3>
                        <p>How many want to subject themselves to black lung disease and a host of other health problems from that job? This is why coal mining towns are dying out. Young people in these towns are moving on to the brighter job prospects. And technology is taking over what’s left of the mining industry. Green energy is taking over, and with it, a host of new, clean jobs and careers. It’s the march of civilization that will never cease.</p>
                    </div>
                </div>
                <div className="robotsAIright">
                    <div className='robotsAIimages'>
                        <img className="flycar" src={flyCar} alt="flyCar" />
                        <img src={handsBig} alt="handsBig" />
                    </div>
                    <p>Robots and AI will certainly replace jobs – boring, dangerous, and dirty ones mostly. Consider coal mining for example. How many people still want to go down into a mineshaft and dig out coal?</p>
                </div>
            </div>
        </div>
    );
}

export default RobotsAI;