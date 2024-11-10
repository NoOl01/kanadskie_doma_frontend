import './projectStyle.css'
import {Link} from "react-router-dom";


function Project({house}) {
    return (
        <div className="Project_main_block">
            <Link to={`/house/${house.id}`}>

                <img src={house.image} alt=""/>
                <div className="hover_info">
                    <p>Название: {house.name}</p>
                    <p>Код: {house.house_code}</p>
                    <p>Площадь: {house.area}м²</p>
                </div>
            </Link>
        </div>
    )
}

export default Project