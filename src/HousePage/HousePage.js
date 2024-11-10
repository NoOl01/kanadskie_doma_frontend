import React from "react";
import './HousePage.css'
import {useParams} from "react-router-dom";

function HousePage() {
    const { id } = useParams();

    return(
        <div className="house_page_root">
            <p>tesdt</p>
        </div>
    )
}

export default HousePage;