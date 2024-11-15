import '../HousePage/HousePage.css'
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ReadyHouse from "./ReadyHouse";

function ReadyHousePage() {

    const [project, setProject] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/getAlreadyBuiltHouseInfo?id=${id}`, {
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
                        <ReadyHouse houseInfo={project.data}/>
                    </div>
                </>
            }
        </div>
    )
}

export default ReadyHousePage;