import React from "react";
import { useState } from "react";
import Button from './Button';
import Laps from "./Laps";
import Timer from "./Timer"
import "./Timer.css"

function TimerContainer() {
  let milisec = 0;
  let sec = 0;
  let min = 0;
  let timerStatus = false;
  let [time, setTime] = useState("00:00:00");

  let [startState, setstartState] = useState("start");
  let [lap, setLap] = useState([
    { nom: 1, time: "01;00:00" },
    { nom: 2, time: "02;00:10" },
  ]);

  function changeMilisec() {
    milisec++;
    if (milisec >= 99) {
      sec++;
      milisec = 0;
    }
    if (sec >= 60) {
      min++;
      sec = 0;
    }

    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = milisec < 10 ? "0" + milisec : milisec;
    setTime(`${m}:${s}:${ms}`);
  }

  function changeStart() {
    if (startState === "start") {
      setstartState("stop");
      timerStatus = true;
      console.log(timerStatus);
    } else {
      setstartState("start");
      timerStatus = false;
      console.log(timerStatus);
    }
    timer();
  }

  function timer() {
    setTimeout(function go() {
      console.log("11");
      if (timerStatus === true) {
        setTimeout(go, 10);
        changeMilisec();
      } else {
        clearTimeout(go);
      }
    }, 10);
  }

  function addLap() {
    setLap([...lap, { nom: 3, time: "01;00:00" }]);
  }
  function clearLap() {
    setLap([]);
  }
  function changeLap() {
    if (startState === "start") {
      clearLap();
    } else {
      addLap();
    }
  }
  return (
    <div className="TimerContainer">
      <Timer time={time} />
      <div className="line"></div>
      <div className="buttonLine">
        <Button style="clear" callback={changeLap}>
          clear
        </Button>
        <Button callback={changeStart} style={startState}>
          {startState}
        </Button>
      </div>
      <Laps lap={lap} />
      
    </div>
  );
}
export default TimerContainer