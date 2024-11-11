import React from "react";
import './HouseProject.css'
import HouseSlider from "./Slider/HouseSlider";
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

function HousePage({houseInfo}) {
    console.log(houseInfo);
    return (
        <div>
            <p>test</p>
            <p>{houseInfo.name}</p>
            <p>{houseInfo.house_code}</p>
            <p>{houseInfo.area}</p>
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
                className="mySwiper1"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}>

                {
                    <>
                        {houseInfo.images.map(image => <SwiperSlide>
                            <img src={image} alt=""/>
                        </SwiperSlide>)}
                    </>
                }


                {/* Элемент для пагинации */}
                <div className="custom-pagination"></div>
            </Swiper>

        </div>
    )
}

export default HousePage;