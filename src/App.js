import React from "react";
import "./styles.css";
import PureComp from './Components/PureComp'
import ParentComp from "./Components/ParentComp";
export default function App() {
  return (
    <div className="App">
      <ParentComp/>
    </div>
  );
}
