import React, {useState, useEffect, useRef} from 'react';
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
import ReadyHousesListPage from "./ReadyHousesListPage/ReadyHousesListPage";
import ReadyHousePage from "./ReadyHousePage/ReadyHousePage";
import Error404 from "./Errors/Error404/Error404";
import headerLogo from './Images/HeaderLogo.png';
import footerlogo from './Images/whitelogo.png';
import rutube from "./HomePage/homeimages/rutube.png"
import odn from "./HomePage/homeimages/odn.png"
import vk from "./HomePage/homeimages/vk.png"
import tg from "./HomePage/homeimages/tg.png"
import whatsapp from "./HomePage/homeimages/whatsap.png"
import youtube from "./HomePage/homeimages/yuotube.svg"

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // Ссылка на меню
    const menuButtonRef = useRef(null); // Ссылка на кнопку

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };



    // Закрытие меню, если кликнули вне его
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Если клик был вне меню или кнопки бургер-меню
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
                setIsOpen(false); // Закрыть меню
            }
        };

        document.addEventListener('mousedown', handleClickOutside); // Отслеживание кликов
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Очистка
        };
    }, []);
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
                        <Link to="/ready-houses">Готовые дома</Link>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/about">О нас</Link>
                        <Link to="/questions">Вопросы</Link>
                    </div>

                    <div className="burger-container">
                        <button
                            className={`burger-button ${isOpen ? 'open' : ''}`}
                            ref={menuButtonRef}
                            onClick={toggleMenu}
                        >
                            {/* Бургер-меню, 3 линии */}
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>

                        <div className={`burger-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
                            <ul>
                                <li><Link to="/">На главную</Link></li>
                                <li><Link to="/projects">Проекты</Link></li>
                                <li><Link to="/technologies">Технологии</Link></li>
                                <li><Link to="/services">Услуги</Link></li>
                                <li><Link to="/ready-houses">Готовые дома</Link></li>
                                <li><Link to="/contacts">Контакты</Link></li>
                                <li><Link to="/about">О нас</Link></li>
                                <li><Link to="/questions">Вопросы</Link></li>

                            </ul>
                        </div>
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
                    <Route path="/ready-houses" element={<ReadyHousesListPage/>}/>
                    <Route path="/ready-house/:id" element={<ReadyHousePage/>}/>
                    <Route path="*" element={<Error404/>}/>
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
                            <a href="https://www.youtube.com/channel/UCJge_x4ANIQjalpM6ekbnow"><img src={youtube} alt=""/></a>
                            <a href="https://rutube.ru/channel/44570845/"><img src={rutube} alt=""/></a>
                            <a href="https://vk.com/kanadskiedoma39"><img src={vk} alt=""/></a>
                            <a href="https://ok.ru/profile/589815703607"><img src={odn} alt=""/></a>
                            <a href="https://t.me/share/url?url=https%3A%2F%2Fwww.kanadskiedoma39.ru%2Fcontact%2F&text=Контакты%20-%20Канадские%20дома&utm_source=share2"><img src={tg} alt=""/></a>
                            <a href="https://api.whatsapp.com/send?text=Контакты%20-%20Канадские%20дома%20https%3A%2F%2Fwww.kanadskiedoma39.ru%2Fcontact%2F&utm_source=share2"><img src={whatsapp} alt=""/></a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
