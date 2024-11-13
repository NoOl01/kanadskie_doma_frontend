import '../ProjectsPage/projectStyle.css'
import {Link} from "react-router-dom";


function ReadyHouses({house}) {
    return (
        <div className="Project_main_block">
            <Link to={`/ready-house/${house.id}`}>

                <img src={house.image} alt=""/>
                <div className="hover_info">
                    <p>Название: {house.house_name}</p>
                    <p>Площадь: {house.area}м²</p>
                </div>
            </Link>
        </div>
    )
}

export default ReadyHouses