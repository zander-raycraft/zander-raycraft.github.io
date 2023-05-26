import React from 'react';
import './App.css';
import TriangleBack from './landingPage/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./mainPage/mainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainPage" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <TriangleBack />
    </>
  );
}

export default App;
