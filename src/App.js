import Navbar from "./components/navbar";
import React, { useState } from "react";

function App() {
  const [hover, setHover] = useState(false);

  const toggleHover = (currentState) => {
    setHover(currentState);
  };
  return <Navbar toggleHover={toggleHover}></Navbar>;
}

export default App;
