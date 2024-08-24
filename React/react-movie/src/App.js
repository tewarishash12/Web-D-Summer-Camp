import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";


// We will giving our routes in this file

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/movie/:id"/>
          <Route path="/about"/>
          <Route path="/contact"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
