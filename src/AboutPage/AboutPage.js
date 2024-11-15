import React from 'react';
import './AboutPage.css'
import Header from '../Components/Other/HeaderComponent/HeaderComponent'
import AboutUsImageExampleAVIF from './Images/AboutUsExample.avif'
import AboutUsImageExamplePNG from './Images/AboutUsExample.png'
import AboutUsPrinciples1 from './Images/AboutUsPrinciples1.webp'
import AboutUsPrinciples2 from './Images/AboutUsPrinciples2.webp'
import AboutUsPrinciples3 from './Images/AboutUsPrinciples3.webp'
import AboutUsPrinciples4 from './Images/AboutUsPrinciples4.webp'
import AboutUsBuildingsAVIF from './Images/AboutUsBuildings.avif'
import AboutUsBuildingsPNG from './Images/AboutUsBuildings.png'
import AboutUsPlusesAVIF from './Images/AboutUsPluses.avif'
import AboutUsPlusesPNG from './Images/AboutUsPluses.png'

function AboutPage() {
    return (
        <div className='about_root'>
            <Header/>
            <h1>Строительная компания “Канадские дома”</h1>
            <div className="about_container_main_info_div">
                <div className="about_us_main_info_text">
                    <h3>Мы производственно-строительная компания</h3>
                    <p>Компания ООО «Канадские дома» основана в 2011 году. Наша компания работает в сегменте
                        малоэтажного строительства в Калининградской области с физическими и юридическими лицами. Наши
                        клиенты могут заказать как маленький садовый домик, так и большой красивый элитный дом, которые
                        будут построены грамотно, качественно и в кратчайшие сроки. На все выполненные подряды по
                        строительству мы несем гарантийные обязательства согласно нашим договорам.</p>
                    <p>С нами удобно работать, т. к. мы закрываем большой спектр оказываемых услуг в одном окне, начиная
                        от первичной консультации и выезда на участок для осмотра стройплощадки, подъездных путей,
                        наличия инженерных сетей, дренажных канав и многое другое, до составления полного пакета
                        документов (включающих в себя работу над проектом дома) для подачи в банк на строительство под
                        ипотеку.</p>
                </div>
                <picture>
                    <source srcSet={AboutUsImageExampleAVIF}/>
                    <img className="about_us_main_info_image" src={AboutUsImageExamplePNG} alt=""/>
                </picture>
            </div>
            <p className="about_us_title">Наши принципы работы</p>
            <div className="about_us_principles_main_div">
                <div className="about_us_principles">
                    <p>Специализируемся на постройке домов из СИП-панелей.</p>
                    <img src={AboutUsPrinciples1} alt=""/>
                </div>
                <div className="about_us_principles">
                    <p>Используем СИП-панели собственного производства</p>
                    <img src={AboutUsPrinciples2} alt=""/>
                </div>
                <div className="about_us_principles">
                    <p>Используем только качественные и экологичные материалы.</p>
                    <img className="about_us_principles_spec_img" src={AboutUsPrinciples3} alt=""/>
                </div>
                <div className="about_us_principles">
                    <p>У нас свой штат профессионалов в работе с СИП-панелями.</p>
                    <img src={AboutUsPrinciples4} alt=""/>
                </div>
            </div>
            <div className="about_us_building_info_main_div">
                <picture>
                    <source srcSet={AboutUsBuildingsAVIF}/>
                    <img src={AboutUsBuildingsPNG} alt=""/>
                </picture>
                <div className="about_us_building_info_text_div">
                    <p className="about_us_building_title">Для кого мы строим?</p>
                    <p>Заказчики строительной фирмы «Канадские Дома из Калининграда» — это не только калининградцы, но и
                        жители различных регионов, решившие построить дом в Калининградской области. Это и молодежь, и
                        люди среднего и старшего возраста, многодетные семьи и молодожены. Особенно много домов мы
                        строим для военных, моряков, бюджетников. К строительству дома люди подходят по-разному:</p>
                    <ul>
                        <li>Кто-то сам досконально изучает строительную науку, вдумчиво сравнивает материалы и
                            технологии.
                        </li>
                        <li>Для многих важно, наоборот, по минимуму затратить свое время и силы на строительство, но
                            получить отличный результат.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="about_us_pluses_info_main_div">
                <div className="about_us_pluses_info_text_div">
                    <p className="about_us_pluses_title">Почему с нами удобно работать?</p>
                    <p>Нашим заказчикам доступны наиболее выгодные и удобные предложения по финансированию строительства
                        – ипотека Сбербанка, участие в жилищном кооперативе, льготная сельская ипотека 2,7%, помогаем
                        оформить кредит на строительство дома.</p>
                    <p>Мы даем возможность посетить наши объекты как в процессе строительства, так и уже завершенные строительством (договариваемся с заказчиками).</p>
                    <p>Вместе занимаемся проектированием идеального дома для каждого заказчика, вплоть до расстановки мебели, цвета ручки входной двери.</p>
                    <p>Мы знаем, каким должен быть дом: теплым, крепким, красивым. Он должен быть правильно сконструирован и построен. Тогда Вам будет уютно в нем жить, и простоит он до ста лет… и больше.</p>
                    <p>Ведём фотофиксацию всех этапов строительства и скрытых работ.</p>
                </div>
                <picture>
                    <source srcSet={AboutUsPlusesAVIF}/>
                    <img src={AboutUsPlusesPNG} alt=""/>
                </picture>
            </div>
        </div>
    );
}

export default AboutPage;