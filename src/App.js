import Startgame from "./Components/Startgame";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <Startgame toggle={toogleGamePlay}></Startgame>
      )}

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
