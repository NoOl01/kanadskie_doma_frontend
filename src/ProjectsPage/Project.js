import './projectStyle.css'


function Project({house}) {
    return (
        <div className="Project_main_block">
            <a href="">

                <img src={house.image} alt=""/>
                <div className="hover_info">
                    <p>Название: {house.name}</p>
                    <p>Код: {house.house_code}</p>
                    <p>Площадь: {house.area}м²</p>
                </div>
            </a>
        </div>
    )
}

export default Project