import './styles/App.css';

import Home from './components/Home';
import HumanRobot from './components/HumanRobot';
import RocketSection from './components/RocketSection';
import Technologies from './components/Technologies';
import JeffBezos from './components/JeffBezos';
import ConceptCars from './components/ConceptCars';
import RobotsAI from './components/RobotsAI';
import RoboticImgs from './components/RoboticImgs';

function App() {
  return (
    <div className="App">
      <Home />
      <HumanRobot />
      <RocketSection />
      <Technologies />
      <div className='appChild'>
        <JeffBezos />
        <ConceptCars />
      </div>
      <RobotsAI />
      <RoboticImgs />
    </div>
  );
}

export default App;