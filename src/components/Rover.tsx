import starfleet from "/public/starfleet.svg";

interface RoverProps {
  rotation: number;
  position: [number, number];
}

const Rover: React.FC<RoverProps> = ({ rotation, position }) => {
  const CARDINALS = ["N", "E", "S", "W"];

  const MULTIPLIER = 120;

  return (
    <div
      className={"rover " + CARDINALS[rotation]}
      style={{
        bottom: position[0] * MULTIPLIER,
        left: position[1] * MULTIPLIER,
      }}
    >
      {" "}
      <img width={MULTIPLIER} height={MULTIPLIER} src={starfleet} />
    </div>
  );
};

export default Rover;
