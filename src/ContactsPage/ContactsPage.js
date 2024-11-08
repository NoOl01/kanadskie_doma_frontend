import React from 'react';
import './ContactsPage.css'
import YandexMap from "./YandexMap";
import Header from "../Components/Other/HeaderComponent/HeaderComponent";
import phone from './contactimage/icons8-phone-50 (2).png'
import mail from './contactimage/icons8-mail-50 (1).png'
import smartphone from './contactimage/icons8-smartphone-48.png'
import location from './contactimage/icons8-location-50.png'
import office from './contactimage/office.png'

function ContactsPage() {
    return (
        <div className='contacts_root'>
            <Header/>
            <div className="our_contacts_div">
                <h1>Наши контакты</h1>
            </div>

            <div className="Ymap">
                <YandexMap/>
            </div>

            <div className="contacts_main_container">
                <h2>ООО “Канадские дома”</h2>
                <div className="contacts_left">

                    <div className="contacts_info">
                        <div className="info">
                            <img src={phone} alt=""/>
                            <h1>Телефон: +7(4012) 77-11-81</h1>
                        </div>
                        <div className="info">
                            <img src={smartphone} alt=""/>
                            <h1>Мобильный: +7-921-711-33-33</h1>
                        </div>
                        <div className="info">
                            <img src={mail} alt=""/>
                            <h1>Email:kanadskiedoma39@gmail.com</h1>
                        </div>
                        <div className="info">
                            <img src={location} alt=""/>
                            <h1>Адрес: 238324, Калининградская обл.,
                                г. Гурьевск, пос. Константиновка,
                                ул. Западная, 5</h1>
                        </div>

                    </div>

                    <div className="contacts_right">
                        <img src={office} alt=""/>
                    </div>
                </div>

            </div>
            <div className="chart_main_div">
                <div className="chart_div">
                    <h4>Расписание работы офиса</h4>
                    <p>пн-пт. - с 9:00 до 18:00</p>
                    <p>сб. - с 9:00 до 14:00</p>
                    <p>вс. - выходной</p>
                </div>
                <div className="chart_div">
                    <h4>Общественный транспорт</h4>
                    <p>(остановка: Гурьевская ЦРБ)</p>
                    <p>Автобусы: № 103, 104</p>
                    <p>Электропоезда:
                        Калининград-Гурьевск-Полесск Остановка
                        “Гурьевский Новый”</p>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;