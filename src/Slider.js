import React, {useState} from 'react';
import './slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export const Slider = ({
    sliderArr,
    nextDot,
    prevDot,
    state,
    setState,
    x,
    setX
}) => {

  
   

    const goLeft = () => {           
        x === 0
            ? setX(-100 * (sliderArr.length - 1))
            : setX(x + 100);
        
        if (x === 0) {
            setState(sliderArr.length) 
            prevDot(sliderArr.length + 1);
        } else {
            setState(state - 1);
            prevDot(state);
        }         
    }

    const goRight = () => {          
        x === -100 * (sliderArr.length - 1)
            ? setX(0)
            : setX(x - 100)   
            
        if (x === -100 * (sliderArr.length - 1)) {
            setState(1)
            nextDot(0); 
        } else {
            setState(state + 1);
            nextDot(state)
        }     
    }
    
    return (
        <div className='slider'>
            {sliderArr.map((item, index) => {
                return (
                    <div
                        key={index}
                        className='slide'                        
                        style={{
                        transform: `translateX(${x}%)`
                    }}>
                        {item}
                    </div>
                )
            })}
            <button id='goLeft' onClick={goLeft}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <button id='goRight' onClick={goRight}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    )
}