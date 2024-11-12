import React, {useRef} from "react";
import './HouseProject.css'
import 'swiper/css'
import {useState} from 'react'
import {Autoplay, Pagination, Thumbs} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import card from "./HousePageImg/card.svg"
import finalS from "./HousePageImg/finnalySsvg.svg"
import startS from "./HousePageImg/startS.svg"
import bedrooms from "./HousePageImg/bedroom.svg"
import bathrooms from "./HousePageImg/bathroom.svg"
import CSRFTOKEN from "../CSRFComponent";


function HousePage({houseInfo}) {
    console.log(houseInfo);


    const [thumbs, setThumbs] = useState(null)
    return (
        <div className="house_main_div">
            <div className="house_title">
                <Link to="/projects"></Link>
                <h1>{houseInfo.name}</h1>
            </div>


            {/*<p>{houseInfo.house_code}</p>*/}
            {/*<p>{houseInfo.area}</p>*/}

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

            <div className="info_title">
                <p>Информация по проекту</p>
            </div>
            <div className="top_info_div">

                <div className="inf_div">
                    <img src={card} alt=""/>
                    <h1>{houseInfo.house_code}</h1>
                </div>

                <div className="inf_div">
                    <img src={finalS} alt=""/>
                    <h1>{houseInfo.area} м² </h1>
                </div>

                <div className="inf_div">
                    <img src={startS} alt=""/>
                    <h1>{houseInfo.building_area} м² </h1>
                </div>

                <div className="inf_div">
                    <img src={bedrooms} alt=""/>
                    <h1>{houseInfo.bedroom}</h1>
                </div>

                <div className="inf_div">
                    <img src={bathrooms} alt=""/>
                    <h1>{houseInfo.bathroom}</h1>
                </div>

            </div>
            <div className="text_description">
                <h1>{houseInfo.description}</h1>
            </div>

            <div className="main_specifications">
                <p className="p31">Основные характеристики:</p>
                <div className="main_specifications_table">
                    <div className="cell">
                        <p>Код</p>
                        <p>{houseInfo.house_code}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Тип проекта</p>
                        <p>{houseInfo.category}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Название проекта</p>
                        <p>{houseInfo.name}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Общая площадь</p>
                        <p>{houseInfo.area} м² </p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Площадь застройки</p>
                        <p>{houseInfo.building_area} м² </p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Количество этажей</p>
                        <p>{houseInfo.floors}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Количество спален</p>
                        <p>{houseInfo.bedroom}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Количество санузлов</p>
                        <p>{houseInfo.bathroom}</p>
                    </div>

                    <div className="partition"></div>

                    <div className="cell">
                        <p>Тип верхнего этажа</p>
                        <p>{houseInfo.upper_floor}</p>
                    </div>

                    <div className="partition"/>

                    <div className="cell">
                        <p>Тип крыши</p>
                        <p>{houseInfo.roof}</p>
                    </div>
                </div>
            </div>
            <p className="house_request_title">Заинтересовались?</p>
            <div className="house_request_form">
                <p>Напишите нам!</p>
                <form action="/createRequest/" method="POST">
                    <CSRFTOKEN/>
                    <input name="Тип запроса" value={`Интересен дом, ${houseInfo.house_code}, ${houseInfo.name}`} type="hidden"/>
                    <input name='Имя' type="text" placeholder="Ваше имя"/>
                    <input name='Email' type="email" placeholder="Email"/>
                    <input name='Телефон' type="tel" placeholder="Телефон"/>
                    <textarea name="Сообщение" placeholder="Ваше сообщение" rows="6"></textarea>
                    <button className="send_button" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default HousePage;