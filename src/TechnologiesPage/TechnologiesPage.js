import React from 'react';
import './TechnologiesPage.css'
import sip from './TechnologyImg/SIP.png'
import house_info_img from './TechnologyImg/house_info_img.png'
import SimpleSlider from "./SliderTechnology";
import Header from '../Components/Other/HeaderComponent/HeaderComponent'

function TechnologiesPage() {
    return (
        <div className='technologies_root'>
            <Header/>
            <div className="what_sip_div">
                <h1>Что такое СИП-панели?</h1>
                <div className="first_sip_div">
                    <div className="first_sip_content">
                        <h2>СИП-панели (сэндвич-панели) — это конструктивные элементы,
                            состоящие из двух внешних слоев (обычно OSB или фанеры)
                            и внутреннего слоя теплоизоляции (чаще всего из пенополистирола
                            или полиуретана).
                            Они используются для строительства стен, кровель и полов.</h2>
                    </div>
                    <div className="first_sip_img">
                        <img src={sip} alt=""/>
                    </div>
                </div>
            </div>

            <div className="what_we_build">
                <p>Из чего мы строим?</p>
            </div>
            <SimpleSlider/>
            <div className="technology_div">
                <h3>Технология строительства</h3>
                <p>Сначала создается проект дома, где учитываются все ваши пожелания.
                    Затем панели изготавливаются на заводе, что позволяет избежать
                    ошибок на месте. После подготовки фундамента, СИП-панели
                    доставляются и быстро собираются, что значительно сокращает
                    время строительства. Стены устанавливаются, затем монтируются
                    крыша, окна и двери. После этого начинается внутренняя отделка,
                    где вы можете проявить свою креативность и выбрать, как будет
                    выглядеть ваш новый дом.
                    В результате получается уютный и теплый дом,
                    готовый к использованию.
                </p>
                <img src={house_info_img} alt=""/>
            </div>


        </div>
    );
}

export default TechnologiesPage;