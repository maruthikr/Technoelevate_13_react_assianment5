//import Color from "./assignment/Color.js";
//import './assignment/Color.css';
import { useState } from "react";
import Vote from "./assignment/Vote";

function App() {
  

  return (
    <>
      
      <h1 id="h"> Vote Your Language! </h1>

      <Vote  name="Php"/>
      <Vote  name="Python"/>
      <Vote  name="Go"  />
      <Vote  name="Java"/>

    </>
  );
}

export default App;