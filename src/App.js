import React, {useState} from 'react';
import { Slider } from './Slider';
import {ContentCopm} from './ContentComp';
import './app.scss';
import { Dots } from './Dots';

//pics
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';


let sliderArr = [
  <ContentCopm src={img1} />,
  <ContentCopm src={img2} />,
  <ContentCopm src={img3} />,
  <ContentCopm src={img4} />,
  <ContentCopm src={img5} />
];

const stateObj = Object.fromEntries(sliderArr.map(n => [n, false]));
stateObj[1] = true;

const App = () => { 
  const [state, setState] = useState(stateObj);
  const [currentControl, setCurrentControl] = useState(1);
  const [x, setX] = useState(0);  

  const handleClick = (id) => {        
    setState({ ...stateObj, 1: false, [id]: true });
    setCurrentControl(id);
    setX((id -1)* -100);
  }
  const nextDot = (id) => {        
    setState({...stateObj, 1: false,  [id+1]: true});
  }
  const prevDot = (id) => {        
    setState({...stateObj, 1: false,  [id-1]: true});
  }
  
  return (
    <div className="App" >     
      <Slider
        sliderArr={sliderArr}
        nextDot={nextDot}
        prevDot={prevDot}
        state={currentControl}
        setState={setCurrentControl}
        x={x}
        setX={setX}
        />
      <Dots
        sliderArr={sliderArr}
        state={state}
        handleClick={handleClick}       
        />
    </div>
  );
}

export default App;
