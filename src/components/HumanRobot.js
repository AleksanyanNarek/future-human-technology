import '../styles/humanRobot.css';

import bubblesHumanRobot from '../images/bubblesHumanRobot.png'

function HumanRobot() {
    return (
        <div className="humanRobot middle appChild">
            <img src={bubblesHumanRobot} alt="bubblesHumanRobot" />
            <div className="leftSpace blackP humanRobotInfo">
                <h4>TECHNOLOGY NEWS</h4>
                <h2>Human-robot</h2>
                <div className='bottBorder'></div>
                <p>In human-robot collaboration, the robot assists the human operator. This means: The machine does not replace the human, but complements his capabilities and relieves him of arduous tasks. These can include overhead work, for example, or the lifting of heavy loads. Autonomous, collaborative robots are also used to supply production workstations</p>
                <button>LEARN MORE</button>
            </div>
        </div>
    );
}

export default HumanRobot;