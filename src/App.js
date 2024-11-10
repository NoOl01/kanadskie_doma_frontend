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
import HousePage from './HousePage/HousePage';
import headerLogo from './Images/HeaderLogo.png';
import footerlogo from './Images/whitelogo.png';
import rutube from "./HomePage/homeimages/rutube.png"
import odn from "./HomePage/homeimages/odn.png"
import vk from "./HomePage/homeimages/vk.png"
import tg from "./HomePage/homeimages/tg.png"
import whatsapp from "./HomePage/homeimages/whatsap.png"


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
                    <Route path="/house/:id" element={<HousePage/>}/>
                </Routes>
                <footer>
                    <div className="left_piece">
                        <img src={footerlogo} alt=""/>
                        <h1>+7 (921) 711 33 33</h1>
                        <h1>kanadskiedoma39@gmail.com</h1>
                        <h1>Адрес:238324, Калининградская обл.,
                            г. Гурьевск, пос. Констаниновка, ул. Западная,5</h1>
                    </div>
                    <div className="right_piece">
                        <div className="social">
                            <a href=""><img src={rutube} alt=""/></a>
                            <a href=""><img src={vk} alt=""/></a>
                            <a href=""><img src={odn} alt=""/></a>
                            <a href=""><img src={tg} alt=""/></a>
                            <a href=""><img src={whatsapp} alt=""/></a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
