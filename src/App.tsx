// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const showAlert = () => {
    alert("works");
  };

  return (
    <>
      <h1>Curiosity</h1>
      <div className="wrapper">
        <header>
          <div className="plus" onClick={showAlert}>
            <button className="add">+</button>
          </div>
        </header>

        <div className="plateau">
          <div className="line">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div className="line">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div className="line">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div className="line">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div className="line">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
