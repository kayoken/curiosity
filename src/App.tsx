import { useState, useEffect } from "react";
import "./App.css";
import Logo from "/public/NASA_logo.svg";
import Grid from "./components/Grid";
import commands from "./assets/commands.txt";

function App() {
  const [currentCommands, setCurrentCommands] = useState<string[]>([]);

  function splitCommands(commands: string): string[] {
    const returnVal = commands.split("\n");
    return returnVal;
  }

  const text = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

  useEffect(() => {
    const commandsArray = splitCommands(text);
    setCurrentCommands(commandsArray);
  }, []);

  const move = () => {
    console.log(currentCommands);
  };

  return (
    <>
      <h1>
        <img src={Logo} />
      </h1>
      <div className="wrapper">
        <header>
          <div className="plus" onClick={move}>
            <button className="add">+</button>
          </div>
        </header>

        <div className="plateau">
          <div className="line">
            <Grid commands={currentCommands} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
