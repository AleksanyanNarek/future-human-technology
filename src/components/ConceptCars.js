import '../styles/conceptCars.css';

import motobike from '../images/motobike.jpg';
import car from '../images/car.jpg';


function ConceptCars() {
    return (
        <div className="conceptCars backImg middle">
            <div className="conceptCarsInfo">
                <div className="conceptCarsImgs">
                    <img src={motobike} alt="motobike" />
                    <div className="imgsBottom">
                        <div><div className="imgsBottomBlue"></div></div>
                        <img className="bottomImg" src={car} alt="car" />
                    </div>
                </div>
                <div className="ConceptCarsText">
                    <h2>Concept Cars</h2>
                    <div className='bottBorder' style={{width: '100%'}}></div>
                    <p>I like futuristic designs a lot. I chose some of the most impressive concept car designs that I could find. Some of them are actually real and some of them are just that, nothing more than a design. You will also find two futuristic bikes. Hope you like the designs.</p>
                </div>
            </div>
        </div>
    );
}

export default ConceptCars;