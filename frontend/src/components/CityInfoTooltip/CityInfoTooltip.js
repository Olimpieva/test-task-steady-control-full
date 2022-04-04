import React from 'react';
import { useSelector } from "react-redux";

import './CityInfoTooltip.css';

function CityInfoTooltip({ city, isShown }) {

    const currentCity = useSelector((state) => {
        return state.cities.entities.find(item => item.name === city.replace(' г.', ''))
    });

    return (
        <div className={`city-tooltip ${isShown && 'city-tooltip_shown'}`}>
            <h1 className='city-tooltip__title'>{currentCity?.name}:&emsp;</h1>
            <p className="city-tooltip__text"> {currentCity?.data} жителей</p>
        </div>
    );

};

export default CityInfoTooltip;