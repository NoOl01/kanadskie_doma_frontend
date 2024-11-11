import React from "react";
import './HouseProject.css'

import arow from  './HousePageImg/Fra2аme копия 2.svg'

import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";

function HousePage({houseInfo}) {
    console.log(houseInfo);
    return (
        <div className="house_main_div">
            <div className="house_title">
                <Link to="/projects"></Link>
                <h1>{houseInfo.name}</h1>
            </div>


            {/*<p>{houseInfo.house_code}</p>*/}
            {/*<p>{houseInfo.area}</p>*/}

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination', // Указываем элемент для пагинации
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-bullet"></span>`; // Настройка стилей для буллетов
                    },
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="HouseSwiper"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}>

                {
                    <>
                        {houseInfo.images.map(image => <SwiperSlide className="House_slide">
                            <img src={image} alt=""/>
                        </SwiperSlide>)}
                    </>
                }

                <div className="House_pagination"></div>
            </Swiper>

        </div>
    )
}

export default HousePage;