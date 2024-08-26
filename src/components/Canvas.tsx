// import React, { useEffect, useRef } from "react";
// import starfleetURL from "/public/Starfleet.svg";

// const Canvas = (
//   props: React.PropsWithRef<React.CanvasHTMLAttributes<HTMLCanvasElement>>
// ) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const draw = (ctx: CanvasRenderingContext2D) => {
//       const img = new Image(600, 600);
//       img.src = starfleetURL;

//       img.onload = function () {
//         ctx.drawImage(img, 0, 550, 35, 50);
//       };
//     };
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.canvas.width = 600;
//     ctx.canvas.height = 600;

//     draw(ctx);
//   }, []);

//   return <canvas ref={canvasRef} {...props} />;
// };

// export default Canvas;
