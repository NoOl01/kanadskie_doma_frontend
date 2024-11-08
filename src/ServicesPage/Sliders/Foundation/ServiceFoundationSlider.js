import './ServiceFoundationSlider.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import foundation1 from './Images/foundation1.jpg';
import foundation2 from './Images/foundation2.jpg';
import {Autoplay} from "swiper/modules";

const FoundationSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true} // Включение бесконечного скролла
            modules={[Autoplay]} // Подключение модуля пагинации
            className="fund" // Класс для стилизации
            autoplay={{
                delay: 2000, // Задержка между переключениями (в миллисекундах)
                disableOnInteraction: false // Не останавливать автопрокрутку при взаимодействии
            }}>

            <SwiperSlide className="fund_sl"><img src={foundation1} alt=""/></SwiperSlide>
            <SwiperSlide className="fund_sl"><img src={foundation2} alt=""/></SwiperSlide>
        </Swiper>
    );
};
export default FoundationSlider ;