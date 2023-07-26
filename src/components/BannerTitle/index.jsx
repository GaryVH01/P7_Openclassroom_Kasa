import React from 'react';

const BannerTitle = (props) => {
    return (
        <div className='divTitle'>
            <h1>{props.line1}<br></br>{props.line2}</h1>
        </div>
    );
};

export default BannerTitle;