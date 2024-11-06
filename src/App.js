import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import TechnologiesPage from './TechnologiesPage/TechnologiesPage';
import ServicesPage from './ServicesPage/ServicesPage';
import ContactsPage from './ContactsPage/ContactsPage';
import AboutPage from './AboutPage/AboutPage';
import QuestionsPage from './QuestionsPage/QuestionsPage';
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
                        <Link to="/projects">Проекты</Link>
                        <Link to="/technologies">Технологии</Link>
                        <Link to="/services">Услуги</Link>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/about">О нас</Link>
                        <Link to="/questions">Вопросы</Link>

                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/technologies" element={<TechnologiesPage/>}/>
                    <Route path="/services" element={<ServicesPage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/questions" element={<QuestionsPage/>}/>
                </Routes>
                <footer>

                </footer>
            </div>
        </Router>
    );
}

export default App;
