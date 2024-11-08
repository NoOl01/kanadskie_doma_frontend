import './AeratedСoncreteSlider.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import aer1 from './Images/6B4332AC-43D5-4771-27CE-428EB120975C 1.png';
import aer2 from './Images/image 27.png';
import {Autoplay} from "swiper/modules";

const StairsSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true} // Включение бесконечного скролла
            modules={[Autoplay]} // Подключение модуля пагинации
            className="gasik" // Класс для стилизации
            autoplay={{
                delay: 2000, // Задержка между переключениями (в миллисекундах)
                disableOnInteraction: false // Не останавливать автопрокрутку при взаимодействии
            }}

        >

            <SwiperSlide className="gazik_sl"><img src={aer1} alt=""/></SwiperSlide>
            <SwiperSlide className="gazik_sl"><img src={aer2} alt=""/></SwiperSlide>

        </Swiper>
    );
};
export default StairsSlider ;