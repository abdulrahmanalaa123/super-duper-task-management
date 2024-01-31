import Navbar from "./components/navbar";
import React, { useState } from "react";
import WorkSpace from "./components/workspace";

function App() {
  const [hidden, setHidden] = useState(false);

  function toggleHidden(currentState) {
    setHidden(currentState);
  }
  return (
    <div className="flex flex-row overflow-clip">
      <Navbar hidden={hidden} toggleHidden={toggleHidden}></Navbar>
      <WorkSpace hidden={hidden}></WorkSpace>
    </div>
  );
}

export default App;
