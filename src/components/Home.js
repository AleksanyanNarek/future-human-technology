import '../styles/home.css';

import circleGradient from '../images/circlegradient.png'

function Home() {
    return (
        <div className="home backImg middle appChild">
            <img src={circleGradient} alt="circleGradient" />
            <div className="leftSpace homeInfo">
                <h1>Humans for the Future</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
        </div>
    );
}

export default Home;