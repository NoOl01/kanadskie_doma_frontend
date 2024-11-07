import './SliderTechnologyStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import paket from "./TechnologyImg/paket.png"
import sipplita from './TechnologyImg/sip-panel.png'
import osb from './TechnologyImg/OSB.png'
import vata from './TechnologyImg/vata.png'
import krovla from './TechnologyImg/kkrovla.png'
import gipsa from './TechnologyImg/gipsokarton.png'
import {Pagination} from "swiper/modules";

const SimpleSlider = () => {
    return (
        <Swiper
            modules={Pagination}
            spaceBetween={50} // расстояние между слайдами
            slidesPerView={1} // количество слайдов, отображаемых одновременно
            pagination={{ clickable: true }}
            loop={true}

        >
            <SwiperSlide><img src={paket} alt=""/></SwiperSlide>
            <SwiperSlide><img src={paket} alt=""/></SwiperSlide>
            <SwiperSlide><img src={paket} alt=""/></SwiperSlide>
            <SwiperSlide><img src={paket} alt=""/></SwiperSlide>
            <SwiperSlide><img src={paket} alt=""/></SwiperSlide>
            <SwiperSlide><img src={paket} alt=""/></SwiperSlide>
        </Swiper>
    );
};
export default SimpleSlider ;