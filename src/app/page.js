"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Pipe from "../assets/pipe.png";
import Mario from "../assets/mario.gif";
import GameOver from "../assets/game-over.png";
import Clouds from "../assets/clouds.png";
import Alerta from "../components/alerta/page";
import Block from "../assets/block.png";
import Loading from "../components/loading/page";

export default function Home() {
  const marioRef = useRef(null);
  const pipeRef = useRef(null);
  const blockRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const randomImage = Math.random();

  useEffect(() => {
    const mario = marioRef.current;
    const pipe = pipeRef.current;
    const block = blockRef.current;

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const jump = () => {

      if(!isLoading) {
        setIsJumping(true);
        mario.classList.add("jump");

        setTimeout(() => {
          mario.classList.remove("jump");
          setIsJumping(false);
        }, 500);
      }
      
    };

    const scoreMario = () => {
      const pipePosition = pipe.offsetLeft;

      if (pipePosition > 0) {
        setScore((prevScore) => prevScore + 1);
      } else {
        setScore((prevScore) => prevScore + 1);
      }
    };

    const loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const blockPosition = block.offsetLeft;
      const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.left = `${marioPosition}px`;

        mario.src = GameOver;
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        scoreMario();
        setGameOver(true);

      } else if (blockPosition <= 120 && blockPosition > 0 && marioPosition < 80) {
        block.style.animation = "none";
        block.style.left = `${blockPosition}px`;

        mario.style.animation = "none";
        mario.style.left = `${marioPosition}px`;

        mario.src = GameOver;
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        scoreMario();
        setGameOver(true);
      }

      if (randomImage > 0.5) {
        block.style.display = "block";
        pipe.style.display = "none";
      } else {
        pipe.style.display = "block";
        block.style.display = "none";
      } 

      scoreMario();
    }, 10);

    document.addEventListener("keydown", jump);

    return () => {
      document.removeEventListener("keydown", jump);
      clearInterval(loop);
    };
  }, [gameOver, isLoading]);

  return (
    <div className="game-board">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {gameOver ? (
            <div className="container">
              <div className="container-alert">
                <Alerta score={score} />
              </div>
            </div>
          ) : (
            <>
              <div className="score-container">
                <span className="score">Score: {score}</span>
              </div>
              <Image
                src={Block}
                ref={blockRef}
                className="block"
                alt="Block"
              />
              <Image src={Clouds} className="clouds" alt="Clouds" />
              <Image ref={marioRef} src={Mario} className="mario" alt="Mario" />
              <Image ref={pipeRef} src={Pipe} className="pipe" alt="Pipe" />
            </>
          )}
        </>
      )}
    </div>
  );
}
