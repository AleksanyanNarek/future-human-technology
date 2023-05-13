import '../styles/jeffBezos.css';

import bubblesJeffBezos from '../images/bubblesJeffBezos.png';

function JeffBezos() {
    return (
        <div className="jeffBezos backImg middle">
            <img className="bubblesJ" src={bubblesJeffBezos} alt="bubblesJeffBezos" />
            <div className="leftSpace jeffBezosInfo">
                <div className="jefSpan">
                    <span>“</span>
                </div>
                <p>We need to know what the resources of the moon are. We have great evidence now because of different kinds of radar and spectroscopic analysis that people have been able to do. But we really do need to go visit there, and we can do that with a robot craft without any problem. </p>
                <div className="jefName">
                    <h5>- Jeff Bezos -</h5>
                </div>
            </div>
        </div>
    );
}

export default JeffBezos;