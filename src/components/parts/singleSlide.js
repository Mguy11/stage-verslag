import React from 'react';

export default ({ color, content, image}) => (
    <div className='swiper-slide single-slide' style={{ backgroundColor: color }}>
        <span>{content}</span>
    </div>
);