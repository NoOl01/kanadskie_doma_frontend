import '../HousePage/HousePage.css'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import ReadyHouse from "./ReadyHouse";

function ReadyHousePage() {
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/getAlreadyBuiltHouseInfo?id=${id}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setProject(data)
            })
            .catch((error) => {
                console.error(error);
                navigate('/500');
            });
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