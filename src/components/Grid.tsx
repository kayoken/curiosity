import { useState, useEffect } from "react";
import Rover from "./Rover";

interface GridProps {
  commands: string[];
}

const Grid: React.FC<GridProps> = ({ commands }) => {
  const [rovers, setRovers] = useState([
    <Rover key={0} rotation={0} position={[1, 2]} />,
    <Rover key={1} rotation={1} position={[3, 3]} />,
  ]);

  const [gridSize, setGridSize] = useState<[number, number]>([0, 0]);
  const [currentCommands, setCurrentCommands] = useState<string[][]>([]);

  useEffect(() => {
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
