import React from 'react';
import './Location.css';

const Location = () => {
    return (
        <div className='location-map'>
            <p className='addressParagraph'>
                Sri Venkateshwara Temple <br />
                Navule, Savalanga Road, Shivamogga <br />
                Karnataka - 577204
            </p>
            <p className='direction'>
                <a rel="noreferrer" target="_blank" href="https://maps.app.goo.gl/Vm5FCkpaaBueco5P9">
                    <button className='directionButton'>GET DIRECTION</button>
                </a>
            </p>
        </div>
    );
}

export default Location;