import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import bell from '../assets/bell.wav'

const Timer = ({setOpenModal,openModal}) => {
    const [play] = useSound(bell)
    const [seconds, setSeconds] = useState(60*25);
    const [isActive, setIsActive] = useState(false);
   
    //functions
    function toggle() {
        setIsActive(!isActive);
      }
      function reset() {
        setSeconds(25*60);
        setIsActive(false);
      }
      function removeSixty() {
       
        if(seconds <= 59) {
           return   
        }
        setSeconds(seconds-60)
      }

      function addSixty() {
        setSeconds(seconds+60)
        
      }

     

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      

    }  if (seconds === 0) {
        play()
        setIsActive(false)
        clearInterval(interval)
        setOpenModal(true)
       
      }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return (
    <div className="timer-app">
      <div className="time">{Math.floor(seconds / 60) + ":" + ("0" + Math.floor(seconds) % 60).slice(-2)}</div>
      <div className="row">
        <button className="minus" onClick={removeSixty}>-</button>
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'} </button>
        <button className="button-secondary" onClick={reset}> Reset </button>
        <button className="add" onClick={addSixty}>+</button>
      </div>
    
    </div>
  );
};

export default Timer;
