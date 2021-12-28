import React from "react";
import Header from "./pages/Header";
import SecondScreen from "./pages/SecondScreen";
import ThirdScreen from "./pages/ThirdScreen";
import FourthScreen from "./pages/FourthScreen";
import Footer from "./pages/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <Footer />
    </Router>
  );
}

export default App;
