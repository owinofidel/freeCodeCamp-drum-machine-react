import { useState, useEffect } from "react";

import "./styles.css";

export default function App() {
  const dispText = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open HH",
    Z: "Kick n Hat",
    X: "Kick",
    C: "Closed HH"
  };
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playAudio(event.key.toUpperCase(), dispText[event.key.toUpperCase()]);
    });
  }, []);

  const playAudio = (element, text) => {
    const audio = document.getElementById(element);
    audio.play();
    setDisplayText(text);
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="btn-wrapper">
          <button
            className="drum-pad"
            id="Heater-1"
            keyCode={81}
            onClick={() => {
              playAudio("Q", "Heater-1");
            }}
          >
            Q
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              id="Q"
              className="clip"
            />
          </button>
          <button
            className="drum-pad"
            id="Heater-2"
            keyCode={87}
            onClick={() => {
              playAudio("W", "Heater-2");
            }}
          >
            W
            <audio
              play
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              id="W"
              className="clip"
            />
          </button>
          <button
            className="drum-pad"
            id="Heater-3"
            keyCode={69}
            onClick={() => {
              playAudio("E", "Heater-3");
            }}
          >
            E
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              id="E"
              className="clip"
            />
          </button>
          <button
            className="drum-pad"
            id="Heater-4"
            keyCode={65}
            onClick={() => {
              playAudio("A", "Heater-4");
            }}
          >
            A
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              id="A"
              className="clip"
            />
          </button>
          <button
            className="drum-pad"
            id="Clap"
            keyCode={83}
            onClick={() => {
              playAudio("S", "Clap");
            }}
          >
            S
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              id="S"
              className="clip"
            />
          </button>
          <button
            className="drum-pad"
            id="Open-HH"
            keyCode={68}
            onClick={() => {
              playAudio("D", "Open HH");
            }}
          >
            D
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              id="D"
              className="clip"
            />
          </button>
          <button
            className="drum-pad"
            id="Kick-n-Hat"
            keyCode={90}
            onClick={() => {
              playAudio("Z", "Kick n Hat");
            }}
          >
            Z
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              id="Z"
              className="clip"
            />
          </button>
          <button
            className="drum-pad"
            id="Kick"
            keyCode={88}
            onClick={() => {
              playAudio("X", "Kick");
            }}
          >
            X
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              id="X"
              className="clip"
            />
          </button>
          <button
            className="drum-pad"
            id="Closed-HH"
            keyCode={67}
            onClick={() => {
              playAudio("C", "Closed HH");
            }}
          >
            C
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              id="C"
              className="clip"
            />
          </button>
        </div>
        <div id="display">
          <p>{displayText}</p>
        </div>
      </div>
    </div>
  );
}
