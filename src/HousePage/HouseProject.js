import React from "react";
import './HouseProject.css'
import HouseSlider from "./Slider/HouseSlider";

function HousePage({houseInfo}) {
    console.log(houseInfo);
    return(
        <div>
            <p>test</p>
            <p>{houseInfo.name}</p>
            <p>{houseInfo.house_code}</p>
            <p>{houseInfo.area}</p>
            {
                <>
                    {houseInfo.images.map(images => <img src={images}/>)}
                </>
            }

        </div>
    )
}

export default HousePage;