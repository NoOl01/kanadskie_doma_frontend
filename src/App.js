import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './Test/Test';
import Test2 from './TestPage2/TesePage2';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/test2">Тест 2</Link>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
