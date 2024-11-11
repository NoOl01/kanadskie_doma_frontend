import React, {useEffect, useState} from "react";
import './HousePage.css'
import HouseProject from "./HouseProject";
import {useParams} from "react-router-dom";

function HousePage() {

    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/getHouseInfo?id=${id}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setProject(data)
                console.log(data)
            })
            .catch((error) => console.log(error));
    }, []);

    return(
        <div className="house_page_root">
            {
                project != null &&
                <>
                    <div className="projects_list">
                        {project.data.houses.map(item => <HouseProject houseInfo={item}/>)}
                    </div>
                </>
            }
        </div>
    )
}

export default HousePage;