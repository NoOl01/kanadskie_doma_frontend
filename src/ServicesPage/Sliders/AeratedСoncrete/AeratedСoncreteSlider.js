import './AeratedСoncreteSlider.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import AeratedСoncrete1 from './Images/AeratedСoncrete1.png';
import AeratedСoncrete2 from './Images/AeratedСoncrete2.png';
import {Autoplay} from "swiper/modules";

const AeratedСoncreteSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true} // Включение бесконечного скролла
            modules={[Autoplay]} // Подключение модуля пагинации
            className="mySwiper" // Класс для стилизации
            autoplay={{
                delay: 2000, // Задержка между переключениями (в миллисекундах)
                disableOnInteraction: false // Не останавливать автопрокрутку при взаимодействии
            }}>

            <SwiperSlide><img src={AeratedСoncrete1} alt=""/></SwiperSlide>
            <SwiperSlide><img src={AeratedСoncrete2} alt=""/></SwiperSlide>
        </Swiper>
    );
};
export default AeratedСoncreteSlider ;