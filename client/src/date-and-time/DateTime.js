import React from 'react';
import './DateTime.css';

const DateTime = () => {
    return (
        <div className='dateTime'>
            <p className='addressParagraph'>
                Febraury 04 2024 <br/>
                11:30AM <span style={{fontSize: '16px'}}>Onwards</span>
            </p>
        </div>
    );
}

export default DateTime;