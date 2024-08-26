import { useState, useEffect } from "react";
import "./App.css";
import Rover from "./components/Rover";
import commands from "./assets/commands.txt";

function App() {
  const showAlert = () => {
    prompt("Please enter commands:");
  };

  const [currentCommands, setCurrentCommands] = useState("");

  // function readCommands(commands: string): string[] {
  //   const returnVal = commands.split("\n");
  //   return returnVal;
  // }
  // console.log(readCommands(commands));

  useEffect(() => {
    fetch(commands)
      .then((r) => r.text())
      .then((text) => {
        setCurrentCommands(text);
        console.log("text decoded:", text);
      });
  }, []);

  return (
    <>
      <h1>Curiosity</h1>
      <div className="wrapper">
        <header>
          <div className="plus" onClick={showAlert}>
            <button className="add">+</button>
          </div>
        </header>

        <div className="plateau">
          <div className="line">
            <div className="square">
              <Rover rotation={0} position={[1, 2]} />
              <Rover rotation={1} position={[3, 3]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
