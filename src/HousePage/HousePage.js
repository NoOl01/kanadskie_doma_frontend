import React, {useEffect, useState} from "react";
import './HousePage.css'
import HouseProject from "./HouseProject";
import {useNavigate, useParams} from "react-router-dom";
import {url} from "../domain";

function HousePage() {
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(`${url}/getHouseInfo?id=${id}`, {
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
                        <HouseProject houseInfo={project.data}/>
                    </div>
                </>
            }
        </div>
    )
}

export default HousePage;