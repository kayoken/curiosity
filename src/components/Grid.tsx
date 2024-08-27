import { useState, useEffect } from "react";
import Rover from "./Rover";

interface GridProps {
  commands: string[];
}

const Grid: React.FC<GridProps> = ({ commands }) => {
  const [rovers, setRovers] = useState([
    <Rover rotation={0} position={[1, 2]} />,
    <Rover rotation={1} position={[3, 3]} />,
  ]);

  const [gridSize, setGridSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    console.log(rovers);
    console.log(commands);

    const commandsArray = commands.map((command) => {
      return command.split(" ");
    });

    console.log(commandsArray.length);

    let width = 0;
    let height = 0;

    if (commandsArray.length)
      setGridSize([
        Number(commandsArray[0][0]) + 1,
        Number(commandsArray[0][1]) + 1,
      ]);
  }, [commands]);

  return (
    <>
      <div
        style={{ width: gridSize[0] * 120, height: gridSize[1] * 120 }}
        className="square"
      >
        {rovers}
      </div>
    </>
  );
};

export default Grid;
