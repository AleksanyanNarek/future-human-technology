import robotFace from '../images/robotFace.jpg';
import rocket from '../images/rocket.jpg';
import futureCar from '../images/futureCar.jpg';
import handsSmall from '../images/handsSmall.jpg';

import bubblesRocketSection from '../images/bubblesRocketSection.png';
import circlegradientHands from '../images/circlegradientHands.jpg';
import circlegradient from '../images/circlegradient.png';

import '../styles/rocketSection.css';

function RocketSection() {
    return (
        <div className="rocketSection backImg middle appChild">
            <img className="bubbleRS" src={bubblesRocketSection} alt="bubblesRocketSection" />
            <div className="gradCircles" >
                <img className="gradCirclesHands" src={circlegradientHands} alt="circlegradientHands" />
                <img className="gradCirclesCircle" src={circlegradient} alt="circlegradient" />
            </div>
            <div className="middle" style={{height: "100%", width: "100%", justifyContent: "center"}}>
                <div className="rocketSectionInfo">
                    <div className="imagesRS">
                        <div className="img img1RS">
                            <img src={robotFace} alt="robotFace" />
                        </div>
                        <div className="img img2RS">
                            <img src={rocket} alt="rocket" />
                        </div>
                        <div className="img end img3RS">
                            <img src={futureCar} alt="futureCar" />
                        </div>
                        <div className="img end img4RS">
                            <img src={handsSmall} alt="handsSmall" />
                        </div>
                    </div>
                    <p className="rocketSectionP">Maximum flexibility in production. Relief of employees by performing ergonomically unfavorable work steps that could not previously be automated</p>
                </div>
            </div>
        </div>
    );
}

export default RocketSection;