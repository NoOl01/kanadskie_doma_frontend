import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Home/HomePage';
import About from './Test/Test';
import Test2 from './TestPage2/TesePage2';
import headerLogo from './Images/HeaderLogo.png';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <div className="left-header-box">
                        <Link to="/"><img src={headerLogo} alt=""/></Link>
                    </div>
                    <div className="right-header-box">
                        <Link to="/project">Проекты</Link>
                        <Link to="/technologies">Технологии</Link>
                        <Link to="/services">Услуги</Link>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/about">О нас</Link>
                        <Link to="/question">Вопросы</Link>

                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/test2" element={<Test2/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
