import starfleet from "/public/starfleet.svg";

interface RoverProps {
  rotation: number;
  position: [number, number];
}

const Rover: React.FC<RoverProps> = ({ rotation, position }) => {
  const CARDINALS = ["N", "E", "S", "W"];

  return (
    <div
      className={"rover " + CARDINALS[rotation]}
      style={{ bottom: position[0] * 120, left: position[1] * 120 }}
    >
      {" "}
      <img width={120} height={120} src={starfleet} />
    </div>
  );
};

export default Rover;
