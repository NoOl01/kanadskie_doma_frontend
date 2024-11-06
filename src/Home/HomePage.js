import React from 'react';
import './HomePageStyle.css'
import TopImg from './homeimages/imagetophome.png'
import date from './homeimages/2033.svg'
import humans from './homeimages/hemans.svg'
import house from './homeimages/house.svg'
import realhouse from './homeimages/image 26.png'

function HomePage() {
    return (<div className="HomePage">
            <div className="subheader">
                <div className="subheader-title">
                    <p>Построим дом вашей мечты</p>
                </div>
            </div>
            <div className="about_us_main_div">
                <div className="about_us">
                    <h1>Мы компания “Канадские дома”, мы работает в сегменте малоэтажного строительства в
                        Калининградской
                        области с физическими и юридическими лицами.
                        Наши клиенты могут заказать как маленький садовый домик так и большой, красивый элитный дом,
                        - которые будут построены грамотно, качественно и в кратчайшие сроки!</h1>
                </div>
                <div className="about_us_pic">
                    <img src={TopImg} alt=""/>
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
                    <img src={realhouse} alt=""/>
                </div>

                <div className="service_text">
                    <p className="our_text">Наши услуги</p>
                    <div className="service_point">
                        <h1>Проектирование</h1>
                        <p>Мы можем создать проект под ваши требования</p>
                    </div>
                    <div className="service_point">
                        <h1>Проектирование</h1>
                        <p>Мы можем создать проект под ваши требования</p>
                    </div>
                    <div className="service_point">
                        <h1>Проектирование</h1>
                        <p>Мы можем создать проект под ваши требования</p>
                    </div>
                    <div className="service_point">
                        <h1>Проектирование</h1>
                        <p>Мы можем создать проект под ваши требования</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;
