import React, {useEffect, useState} from 'react';
import './HomePageStyle.css'
import Header from '../Components/Other/HeaderComponent/HeaderComponent'
import TopImgAVIF from './homeimages/imagetophome.avif'
import TopImgPNG from './homeimages/imagetophome.png'
import date from './homeimages/calendar.svg'
import humans from './homeimages/people.svg'
import house from './homeimages/house-svgrepo-com.svg'
import realHouseAVIF from './homeimages/realhouse.avif'
import realHouseWebp from './homeimages/realHouse.webp'
import wallet from './homeimages/WALLET.svg'
import clock from './homeimages/CLOCK.svg'
import earth from './homeimages/EARTH.svg'
import {Link} from "react-router-dom";
import arrow from './homeimages/Fra2аme копия 1.png'
import anastasa from './homeimages/izobrazhenie_viber_2020-08-17_10-30-55_cr_cr-210x210 1.png'
import ilya from './homeimages/ilya-sip-konstruktor-kanadskiedoma39_cr-210x210 1.png'
import alan from './homeimages/alan-kanadskie-doma-ooo_cr-210x210 1.png'
import Project from "../ProjectsPage/Project";
import MainFormModal from "../Components/Modal/ModalWindow";
import CSRFTOKEN from "../CSRFComponent";


function HomePage() {

    const [allProjects, setAllProjects] = useState(null);
    const [isMainModalOpen, setIsMainModalOpen] = useState(false);
    const [modalId, setModalId] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/getHouses/`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setAllProjects(data)
                console.log(data)
            })
            .catch((error) => console.log(error));
    }, []);

    return (<div className="HomePage">
            <Header/>
            <div className="about_us_main_div">
                <div className="about_us">
                    <h1>Мы компания “Канадские дома”, мы работает в сегменте малоэтажного строительства в
                        Калининградской
                        области с физическими и юридическими лицами.
                        Наши клиенты могут заказать как маленький садовый домик так и большой, красивый элитный дом,
                        - которые будут построены грамотно, качественно и в кратчайшие сроки!</h1>
                </div>
                <div className="about_us_pic">
                    <picture>
                        <source srcSet={TopImgAVIF}/>
                        <img src={TopImgPNG} alt=""/>
                    </picture>
                </div>
            </div>
            <div className="pluses_main_div">
                <div className="plus_container">
                    <img src={date} alt=""/>
                    <div className="plus_container_text">
                        <p className="Name_text">Годы на рынке</p>
                        <p className="main_text">
                            Мы находимся на рынке с 2013 года
                        </p>
                    </div>
                </div>
                <div className="plus_container">
                    <img src={humans} alt=""/>
                    <div className="plus_container_text">
                        <p className="Name_text">Коллектив</p>
                        <p className="main_text">
                            У нас работают 13 опытных специалистов
                        </p>
                    </div>
                </div>
                <div className="plus_container">
                    <img src={house} alt=""/>
                    <div className="plus_container_text">
                        <p className="Name_text">Опыт</p>
                        <p className="main_text">
                            На нашем счету 500+ законченных проектов
                        </p>
                    </div>
                </div>
            </div>
            <div className="our_service">
                <div className="service_img">
                    <picture>
                        <source srcSet={realHouseAVIF}/>
                        <img src={realHouseWebp} alt=""/>
                    </picture>
                </div>

                <div className="service_text">
                    <p className="our_text">Наши услуги</p>
                    <div className="service_point">
                        <h1>Проектирование</h1>
                        <p>Мы можем создать проект под ваши требования</p>
                    </div>
                    <div className="service_point">
                        <h1>Строительство</h1>
                        <p>Мы полностью контролируем строительство </p>
                    </div>
                    <div className="service_point">
                        <h1>Консультация</h1>
                        <p>Вы можете связаться с нами в любое время</p>
                    </div>
                    <div className="service_point">
                        <h1>Выбор готово проекта</h1>
                        <p>У нас есть масса готовых решений</p>
                    </div>
                </div>
            </div>

            <div className="pluses_main_div">
                <div className="plus_container">
                    <img src={wallet} alt=""/>
                    <div className="plus_container_text">
                        <p className="Name_text">Экономия</p>
                        <p className="main_text">
                            Дешево в постройке
                        </p>
                    </div>
                </div>
                <div className="plus_container">
                    <img src={clock} alt=""/>
                    <div className="plus_container_text">
                        <p className="Name_text">Кратчайшие сроки</p>
                        <p className="main_text">
                            Здание будет построено в самые короткие сроки
                        </p>
                    </div>
                </div>
                <div className="plus_container">
                    <img src={earth} alt=""/>
                    <div className="plus_container_text">
                        <p className="Name_text">Экологично</p>
                        <p className="main_text">
                            Натуральные материалы строительства
                        </p>
                    </div>
                </div>
            </div>

            <div className="consultation">
                <div className="content_consul">
                    <div className="cons_text">
                        <p>Хотите заказать консультацию?</p>
                    </div>
                    <div className="cons_button">
                        <button onClick={() => {setIsMainModalOpen(true); setModalId("Заявка на консультацию")}}>Оставить заявку</button>
                    </div>
                </div>
            </div>
            <div className="best_project_div">
                <div className="best_project_name">
                    <h1>Самые популярные проекты</h1>
                </div>
                <div className="four_project">
                    {
                        allProjects !== null &&
                        <>
                            {allProjects.data.houses.slice(-4).map(item => (
                                <Project key={item.id} house={item} />
                            ))}
                        </>
                    }

                </div>
                <div className="best_project_footer">
                    <Link to="/projects">

                        <p>Смотреть все проекты</p>
                        <img src={arrow} alt=""/>

                    </Link>
                </div>
            </div>

            <div className="our_team">
                <div className="our_team_name">
                    <p>Наша команда</p>
                </div>
                <div className="team_members">
                    <div className="member">
                        <img src={anastasa} alt=""/>
                        <div className="member_content">
                            <p>Менеджер-проектировщик</p>
                            <p>Анастасия Дягилова</p>
                            <p>89217113333</p>
                            <p>kanadskiedoma39@gmail.com</p>
                        </div>
                    </div>

                    <div className="member">
                        <img src={ilya} alt=""/>
                        <div className="member_content">
                            <p>Главный конструктор</p>
                            <p>Илья Петров</p>
                            <p>89217113333</p>
                            <p>kanadskiedoma39@gmail.com</p>
                        </div>
                    </div>

                    <div className="member">
                        <img src={alan} alt=""/>
                        <div className="member_content">
                            <p>Генеральный директор</p>
                            <p>Алан А. Алборов</p>
                            <p>89217113333</p>
                            <p>kanadskiedoma39@gmail.com</p>
                        </div>
                    </div>

                </div>

            </div>

            <MainFormModal isOpen={isMainModalOpen} onClose={() => setIsMainModalOpen(false)}>
                <form action="/createRequest/" method="POST">
                    <CSRFTOKEN/>
                    <input name="Тип запроса" value={modalId} type="hidden"/>
                    <input name='Имя' type="text" placeholder="Ваше имя"/>
                    <input name='Email' type="email" placeholder="Email"/>
                    <input name='Телефон' type="tel" placeholder="Телефон"/>
                    <textarea name="Сообщение" placeholder="Ваше сообщение" rows="6"></textarea>
                    <button className="send_button" type="submit">Отправить</button>
                </form>
            </MainFormModal>
        </div>
    )
}

export default HomePage;