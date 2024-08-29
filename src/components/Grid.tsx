import { useState, useEffect } from "react";
import Rover from "./Rover";

interface GridProps {
  commands: string[];
}

type RoverData = {
  id: number;
  rotation: string;
  position: [number, number];
};

export const CARDINALS = ["N", "E", "S", "W"];

//think about setting up the grid with a state setup function
const Grid: React.FC<GridProps> = ({ commands }) => {
  const [roverData, setRoverData] = useState<[RoverData]>([
    { id: 0, rotation: "N", position: [-40, -40] },
  ]);

  const [gridSize, setGridSize] = useState<[number, number]>([0, 0]);
  const [currentCommands, setCurrentCommands] = useState<string[][]>([]);

  //planet setup
  useEffect(() => {
    setupPlanet();
  }, [commands]);

  useEffect(() => {
    if (currentCommands.length) {
      const nextCommands = [...currentCommands];

      if (nextCommands[0].length !== 1) {
        landRover(nextCommands[0]);
      } else {
        moveRover(nextCommands[0]);
      }
      setCurrentCommands(nextCommands.slice(1, nextCommands.length));
    }
  }, [currentCommands]);

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

  const landRover = (positionCommand: any) => {
    const roverCopy = [...roverData];
    setRoverData([
      {
        id: 0,
        rotation: positionCommand[2],
        position: [Number(positionCommand[0]), Number(positionCommand[1])],
      },
    ]);
  };

  const rotateRover = (rotateCommand: string) => {
    const nextRoverData = [...roverData];
  };

  const moveRover = (moveCommand: string[]) => {
    const moveArray = moveCommand[0].split("");

    moveArray.forEach((move) => {
      if (move === "L" || move === "R") {
        rotateRover(move);
      } else {
        // moveForward();
      }
    });
  };

  return (
    <>
      <div
        style={{ width: gridSize[0] * 120, height: gridSize[1] * 120 }}
        className="square"
      >
        <>
          <Rover
            key={roverData[0].id}
            rotation={roverData[0].rotation}
            position={roverData[0].position}
          />
        </>
      </div>
    </>
  );
};

export default Grid;
