import React from 'react';

const YandexMap = () => {
    return (
        <div style={{position: 'relative', overflow: 'hidden'}}>
            <a
                href="https://yandex.ru/maps/org/kanadskiye_doma/173934144524/?utm_medium=mapframe&utm_source=maps"
                style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}
            >
                Канадские дома
            </a>
            <a
                href="https://yandex.ru/maps/10857/kaliningrad-oblast/category/construction_company/184107633/?utm_medium=mapframe&utm_source=maps"
                style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}
            >
                Строительная компания в Калининградской области
            </a>
            <a
                href="https://yandex.ru/maps/10857/kaliningrad-oblast/category/building_materials_wholesale/184107755/?utm_medium=mapframe&utm_source=maps"
                style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '28px'}}
            >
                Стройматериалы оптом в Калининградской области
            </a>
            <iframe
                src="https://yandex.ru/map-widget/v1/org/kanadskiye_doma/173934144524/?from=mapframe&ll=20.642045%2C54.792504&z=17"
                width="100%"
                height="600"
                allowFullScreen={true}
                style={{position: 'relative'}}
            ></iframe>
        </div>
    );
};

export default YandexMap;