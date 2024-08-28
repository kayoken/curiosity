import starfleet from "/public/starfleet.svg";

interface RoverProps {
  rotation: string;
  position: [number, number];
}

const Rover: React.FC<RoverProps> = ({ rotation, position }) => {
  //for div mapping
  const MULTIPLIER = 120;

  return (
    <div
      className={"rover " + rotation}
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
