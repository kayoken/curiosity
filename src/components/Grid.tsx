import { useState, useEffect } from "react";
import Rover from "./Rover";

interface GridProps {
  commands: string[];
}

const Grid: React.FC<GridProps> = ({ commands }) => {
  const [roverData, setRoverData] = useState(0);
  const [gridSize, setGridSize] = useState<[number, number]>([0, 0]);
  const [currentCommands, setCurrentCommands] = useState<string[][]>([]);

  //   const consumeLine = () => {
  //     if (currentCommands.length) {
  //       const nextCommands = [...currentCommands];
  //       const currentCommand = nextCommands[0];
  //       setCurrentCommands(nextCommands.slice(1, nextCommands.length));
  //       return currentCommand;
  //     }

  //     return [""];
  //   };

  const setupPlanet = () => {
    const commandsArray = commands.map((command) => {
      return command.split(" ");
    });

    if (commandsArray.length)
      setGridSize([
        Number(commandsArray[0][0]) + 1,
        Number(commandsArray[0][1]) + 1,
      ]);

    const nextCommands = [...commandsArray];
    setCurrentCommands(nextCommands.slice(1, nextCommands.length));
  };

  const moveRover = () => {
    if (currentCommands.length > 2) {
      console.log("works");
    }

    console.log(currentCommands);
  };

  useEffect(() => {
    setupPlanet();
  }, [commands]);

  useEffect(() => {
    const stepTimer = setTimeout(() => {
      const nextCommands = [...currentCommands];
      setCurrentCommands(nextCommands.slice(1, nextCommands.length));
    }, 4000);

    console.log(currentCommands);

    return () => clearTimeout(stepTimer);
  }, [currentCommands]);

  const rovers = () => {
    return (
      <>
        <Rover key={0} rotation={"N"} position={[1, 2]} />
        {/* <Rover key={1} rotation={"E"} position={[3, 3]} /> */}
      </>
    );
  };

  return (
    <>
      <div
        style={{ width: gridSize[0] * 120, height: gridSize[1] * 120 }}
        className="square"
      >
        {rovers()}
      </div>
    </>
  );
};

export default Grid;
