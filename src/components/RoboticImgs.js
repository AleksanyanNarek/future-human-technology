import robotWithCup from '../images/robotWithCup.jpg';
import robot from '../images/robot.jpg';
import robotHead from '../images/robotHead.jpg';
import robotHand from '../images/robotHand.jpg';

import '../styles/roboticImgs.css';

function RoboticImgs() {
    return (
        <div className="roboticImgs backImg appChild">
            <div className="roboticImgsInfo">
                <div className="imagesRI">
                    <div className="img img1RI">
                        <img src={robotWithCup} alt="robotWithCup" />
                    </div>
                    <div className="img start img2RI">
                        <img src={robot} alt="robot" />
                    </div>
                    <div className="img img3RI">
                        <img src={robotHead} alt="robotHead" />
                    </div>
                    <div className="img start img4RI">
                        <img src={robotHand} alt="robotHand" />
                    </div>
                </div>
                <p className="roboticImgsP">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
        </div>
    );
}

export default RoboticImgs;