"use client";

import React, {useState} from "react";

import Image from "next/image";
import MarioLoop from "../../assets/mario-loop.gif";
import Pipe from "../../assets/pipe.png";

const Alerta = ({score}) => {
  const [localScore, setLocalScore] = useState(score);

  function limpar() {
    window.location.reload();
  }

  return (
    <div className="component-alert">
      <h1>SCORE: {score}</h1>
      <div className="component-title">
        <h1 className="title">YOU LOST!!</h1>
      </div>
      <div className="container-button">
        <button className="button" onClick={limpar}>
          RESTART
        </button>
      </div>
      <div className="animation-alert">
        <div className="mario-loop">
          <Image className="mario-jump" src={MarioLoop} />
        </div>
        <div className="pipe-alert">
          <Image className="pipe-size" src={Pipe} />
        </div>
      </div>
    </div>
  );
};

export default Alerta;
