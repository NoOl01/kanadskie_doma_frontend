import '../HousePage/HousePage.css'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import ReadyHouse from "./ReadyHouse";
import {url} from "../domain";




function ReadyHousePage() {
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(`${url}/getAlreadyBuiltHouseInfo?id=${id}`, {
            method: "GET",
            headers: {
                'Cache-Control': 'no-cache',
            }
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

    return (
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