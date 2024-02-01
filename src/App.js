import Navbar from "./components/navbar";
import React, { useState } from "react";
import Body from "./components/body";

function App() {
  const [hidden, setHidden] = useState(false);

  function toggleHidden(currentState) {
    setHidden(currentState);
  }
  return (
    <div className="flex flex-row h-full">
      <Navbar hidden={hidden} toggleHidden={toggleHidden}></Navbar>
      <Body hidden={hidden}></Body>
    </div>
  );
}

export default App;
