import React from "react";
import '../HousePage/HouseProject.css'
import 'swiper/css'
import {useState} from 'react'
import {Autoplay, Pagination, Thumbs} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";


function ReadyHouse({houseInfo}) {
    const [thumbs, setThumbs] = useState(null)
    return (
        <div className="house_main_div">
            <div className="house_title">
                <Link to="/ready-houses"></Link>
                <h1>{houseInfo.name}</h1>
            </div>

            <Swiper

                loop={true}
                modules={[Pagination, Autoplay, Thumbs]}
                thumbs={{swiper: thumbs && !thumbs.destroyed ? thumbs : null}}
                className="HouseSwiper"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}>

                {
                    <>
                        {houseInfo.images.map((image, idx) => <SwiperSlide key={idx} className="House_slide">
                            <img src={image} alt=""/>
                        </SwiperSlide>)}
                    </>
                }
            </Swiper>
            <Swiper
                spaceBetween={10}
                onSwiper={setThumbs}
                slidesPerView={3}
                className="mini_sl"
            >
                {
                    <>
                        {houseInfo.images.map((image, idx) => <SwiperSlide key={idx} className="mini_slide">
                            <img src={image} alt=""/>
                        </SwiperSlide>)}
                    </>
                }
            </Swiper>

            <div className="main_specifications">
                <p className="p31">Основные характеристики:</p>
                <div className="main_specifications_table">
                    <div className="cell">
                        <p>Дом</p>
                        <p>{houseInfo.name}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Фундамент</p>
                        <p>{houseInfo.foundation}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Стены</p>
                        <p>{houseInfo.wall}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Общая площадь</p>
                        <p>{houseInfo.area} м² </p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Количество этажей</p>
                        <p>{houseInfo.floors}</p>
                    </div>

                </div>
            </div>
            <p className="house_request_title">Заинтересовались?</p>
            <div className="house_request_form">
            <p>Напишите нам!</p>
                <form action="/createRequest/" method="POST">
                    <input name="Тип запроса" value="Интересен дом (Готовые дома)" type="hidden"/>
                    <input name="Код дома" value={houseInfo.house_code} type="hidden"/>
                    <input name="Название дома" value={houseInfo.name} type="hidden"/>
                    <input name='Имя' type="text" placeholder="Ваше имя"/>
                    <input name='Email' type="email" placeholder="Email"/>
                    <input name='Телефон' type="tel" placeholder="Телефон"/>
                    <textarea name="Сообщение" placeholder="Ваше сообщение" rows="6"></textarea>
                    <input name='Ссылка на дом' type="hidden" value={window.location.href}/>
                    <button className="send_button" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default ReadyHouse;