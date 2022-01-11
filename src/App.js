import React from "react";
import Header from "./pages/Home/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Home/Footer";
// import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    // <Router>
    <>
      <Header />
      <Home />
      <Footer />
      </>
    // </Router>
  );
}

export default App;
