import React, { useState } from 'react';

import CityInfoTooltip from '../CityInfoTooltip/CityInfoTooltip';

import './Citizen.css';

function Citizen({ citizen }) {

    const citizenData = citizen.groups.reduce((acc, item) => ({ ...acc, [item.type]: item.name }), {});
    const [isCityInfoShown, setIsCityInfoShown] = useState({});

    return (
        <li key={citizen._id} className='citizen'>
            <span className='citizen__name'
                onMouseOver={() => setIsCityInfoShown((prevState) => ({ ...prevState, [citizen._id]: true }))}
                onMouseLeave={() => setIsCityInfoShown((prevState) => ({ ...prevState, [citizen._id]: false }))}
            >
                {citizen.name}
            </span>
            <CityInfoTooltip city={citizenData.city} isShown={isCityInfoShown[citizen._id]} />
        </li>
    );
};

export default Citizen;
