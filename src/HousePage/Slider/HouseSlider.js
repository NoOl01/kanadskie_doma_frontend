import React from "react";
import './HouseSlider.css'

function HousePage({houseImages}){
    console.log(houseImages);
    return(
        <div>
            <img src={houseImages}/>
        </div>
    )
}

export default HousePage;