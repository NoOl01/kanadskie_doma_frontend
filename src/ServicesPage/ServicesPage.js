import React from 'react';
import './ServicesPage.css'
import StairsSlider from './Sliders/Stairs/ServicesStairsSlider';
import FoundationSlider from './Sliders/Foundation/ServiceFoundationSlider';
import AeratedСoncreteSlider from './Sliders/AeratedСoncrete/AeratedСoncreteSlider';
import ServicesProject from './Images/ServicesProject.png';
import WhatsApp from './Images/whatsap.svg';
import SmartPhone from './Images/SmartPhone.svg';
import Phone from './Images/Phone.svg';

function ServicesPage() {
    return (
        <div className='services_root'>
            <p className="service_content_title">Наша компания готова предоставить вам следующие услуги</p>
            <ul className="service_content_list">
                <li><a href="#foundation">Возможность выбрать и заказать фундамент различных типов.</a></li>
                <li><a href="#stairs">Возможность спроектировать и изготовить лестницу из СИП-панелей.</a></li>
                <li><a href="#aer">Мы можем построить для вас дом из газобетона</a></li>
                <li><a href="#project">Поможем вам разработать ваш собственный проект.</a></li>
                <li><a href="#excursion">Наша компания может провести для вас экскурсию</a></li>
                <li><a href="#mortgage">Поможем вам оформить ипотеку для строительства дома</a></li>
                <li id="foundation"><a href="#ndfl">Поможем вам вернуть 13% НДФЛ</a></li>
            </ul>
            <div className="services_foundation_main_div">
                <div className="services_foundation_title">
                    <h2>Фундамент</h2>
                    <p>Это основа здания. От качества его проектирования и возведения зависят такие важные характеристики всего сооружения, как устойчивость, долговечность, надежность и, в конечном итоге, комфорт проживания.</p>
                </div>
                <FoundationSlider/>
                <div className="services_foundation_description">
                    <p>В компании «Канадские дома» доступны следующие виды фундаментов</p>
                    <ul>
                        <li>Свайный. Вкрученные металлические сваи подходят для сложного рельефа участка, для слабых грунтов.</li>
                        <li>Свайно-ростверковый (или ленточно-столбчатый). Из бетона заливаются заглубленные в землю опорные столбы, соединенные бетонной лентой. Подходит для небольших одноэтажных зданий.</li>
                        <li>Плитный. Монолитная бетонная плита. Для строительства на болотистых, плавающих грунтах.</li>
                        <li>Утепленная «шведская плита». Многослойная непромерзающая конструкция, с готовыми коммуникациями внутри. Подходит для системы «теплый пол».</li>
                        <li>Ленточный. Заглубленная в грунт «лента» из железобетона по периметру и с перегородками для опоры перекрытий и внутренних стен.</li>
                    </ul>
                </div>
                <button id="stairs">Заказать фундамент</button>
            </div>
            <div className="services_stairs_main_div">
                <div className="services_foundation_title">
                    <h2>Хотите заказать лестницу из СИП-панелей?</h2>
                    <p>Наша компания поможет подобрать подходящую форму лестници и гарантировать безопасность и комфорт</p>
                </div>
                <StairsSlider/>
                <button id="aer">Заказать лестницу</button>
            </div>
            <div className="services_aer_main_div">
                <div className="services_aer_title">
                    <h2>Мы можем построить для вас дом из газобетона</h2>
                    <p>Наша компания производит дома не только из SIP-панелей, но и из газобетона собственного
                        производства</p>
                </div>
                <AeratedСoncreteSlider/>
                <button id="project">Заказать дом из газобетона</button>
            </div>
            <div className="services_project_main_div">
                <div className="services_project_title">
                    <p>Нужна помощь с проектом?</p>
                </div>
                <div className="services_project_description">
                    <img src={ServicesProject} alt=""/>
                    <ul>
                        <li>Мы готовы оказать вам помощь в разработке проекта вашего дома.</li>
                        <li>Наша команда предоставит помощь в проектировании.</li>
                        <li>Мы создаем ваш дом, вдохновляясь вашими идеями и используя наш опыт.</li>
                        <li>Воплощаем ваши замыслы в проекте с полной поддержкой и вниманием.</li>
                        <li>Поддержим вас на каждом этапе создания проекта вашего дома.</li>
                    </ul>
                </div>
                <button id="excursion">Помощь с проектом</button>
            </div>
            <div className="services_excursion_main_div">
                <div className="services_excursion_title">
                    <p>Наша компания может провести для вас экскурсию</p>
                </div>
                <ul>
                    <li>Мы подробно рассказываем о технологии строительства домов из СИП-панелей, поясняем, почему применяются те или иные материалы и технологии для строительства и отделки.</li>
                    <li>Мы даем возможность посетить наши объекты, как в процессе строительства, так и уже завершенные строительством</li>
                </ul>
                <p className="services_excursion_p">Чтобы записаться на экскурсию можете написать нам или записаться по кнопке ниже</p>
                <div className="services_excursion_description">
                    <img src={WhatsApp} alt=""/>
                    <p>+7-921-711-33-33</p>
                </div>
                <button id="mortgage">Записаться на экскурсию</button>
            </div>
            <div className="services_main_div">
                <div className="services_title">
                    <p>Нужна помощь с ипотекой?</p>
                </div>
                <p className="services_p">Мы предлагаем различные варианты финансирования вашего строительства</p>
                <ul>
                    <li>Ипотека с использованием эскроу-счёта</li>
                    <li>Кредит на строительство дома</li>
                    <li>Сельская ипотека под 3%</li>
                </ul>
                <button id="ndfl">Помощь с ипотекой</button>
            </div>
            <div className="services_main_div">
                <div className="services_title">
                    <p>Поможем вернуть 13% НДФЛ</p>
                </div>
                <p className="services_p">Форма заполнения документов:</p>
                <a href="">Заявление о возврате 13%</a>
                <a href="">Заявление в налоговую</a>
                <p className="services_p">Финансовый консультант Екатерина Бородкова</p>
                <p className="services_ndfl_description">Для консультаций по вопросам ипотеки, оформлению налогового вычета, работе с материнским капиталом, программой молодая семья, сертификатами на приобретение недвижимости, по оформлению платежей по договорам строительства.</p>
                <div className="services_ndfl_contacts_div">
                    <div className="services_ndfl_contacts">
                        <img src={SmartPhone} alt=""/>
                        <p>+7-4012-77-11-81</p>
                    </div>
                    <div className="services_ndfl_contacts">
                        <img src={Phone} alt=""/>
                        <p>+7-9814-77-11-81</p>
                    </div>
                </div>
                <button>Помощь с НДФЛ</button>
            </div>
        </div>
    );
}

export default ServicesPage;