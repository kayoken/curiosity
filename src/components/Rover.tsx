import starfleet from "/public/starfleet.svg";
import { CARDINALS } from "./Grid";

interface RoverProps {
  rotation: string;
  position: [number, number];
}

const Rover: React.FC<RoverProps> = ({ rotation, position }) => {
  //for div mapping
  const MULTIPLIER = 120;

  //output coordinates
  //console.log(rotation, position)

  return (
    <div
      className={"rover " + rotation}
      style={{
        left: position[0] * MULTIPLIER,
        bottom: position[1] * MULTIPLIER,
      }}
    >
      {" "}
      <img width={MULTIPLIER} height={MULTIPLIER} src={starfleet} />
    </div>
  );
};

export default Rover;
