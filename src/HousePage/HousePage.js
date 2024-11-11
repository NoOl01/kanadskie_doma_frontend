import React, {useEffect, useState} from "react";
import './HousePage.css'
import HouseProject from "./HouseProject";
import {useParams} from "react-router-dom";

function HousePage() {

    const [project, setProject] = useState(null);
    const { id } = useParams();

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
                project !== null &&
                <>
                    <div>
                        <HouseProject houseInfo={project.data} />
                    </div>
                </>
            }
        </div>
    )
}

export default HousePage;