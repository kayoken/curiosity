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
  const [roverData, setRoverData] = useState<RoverData[]>([
    { id: 0, rotation: "Z", position: [-40, -40] },
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
        controlRover(nextCommands[0]);
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
    setRoverData([
      {
        id: 0,
        rotation: positionCommand[2],
        position: [Number(positionCommand[0]), Number(positionCommand[1])],
      },
    ]);
  };

  const rotateRover = (rotateCommand: string) => {
    const indexOfLastElement = CARDINALS.length - 1;

    setRoverData((prevRoverData) => {
      const nextRoverData = [...prevRoverData];

      let index = CARDINALS.findIndex(
        (value) => value === nextRoverData[0].rotation
      );

      if (rotateCommand === "L") {
        index--;
      } else {
        index++;
      }

      //TODO: make a const for CARDINALS.length - 1
      if (index < 0) {
        index = indexOfLastElement;
      }
      if (index > indexOfLastElement) {
        index = 0;
      }

      nextRoverData[0] = {
        ...nextRoverData[0],
        rotation: CARDINALS[index],
      };

      return nextRoverData;
    });
  };

  const moveRover = () => {
    setRoverData((prevRoverData) => {
      const nextRoverData = [...prevRoverData];
      let nextPosition: [number, number] = [-1, -1];

      const currentRotation = prevRoverData[0].rotation;

      switch (currentRotation) {
        case "N":
          nextPosition = [
            prevRoverData[0].position[0],
            prevRoverData[0].position[1] + 1,
          ];
          break;
        case "E":
          nextPosition = [
            prevRoverData[0].position[0] + 1,
            prevRoverData[0].position[1],
          ];
          break;
        case "S":
          nextPosition = [
            prevRoverData[0].position[0],
            prevRoverData[0].position[1] - 1,
          ];
          break;
        case "W":
          nextPosition = [
            prevRoverData[0].position[0] - 1,
            prevRoverData[0].position[1],
          ];
          break;
      }

      nextRoverData[0] = {
        ...nextRoverData[0],
        position: nextPosition,
      };

      return nextRoverData;
    });
  };

  const controlRover = (moveCommand: string[]) => {
    const moveArray = moveCommand[0].split("");
    moveArray.forEach((move) => {
      if (move === "L" || move === "R") {
        rotateRover(move);
      } else {
        moveRover();
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
