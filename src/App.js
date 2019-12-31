import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <Navbar />
      {this.props.children}
      <HomePage />
    </div>
  );
}

export default App;
