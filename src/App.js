import React from "react";
import Header from "./pages/Header";
import SecondScreen from "./pages/SecondScreen";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <SecondScreen />
    </Router>
  );
}

export default App;
