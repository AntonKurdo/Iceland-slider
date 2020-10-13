import React from 'react';

export const ContentCopm = ({src}) => {
    return (
        <img src={src} style={{width: '100%', objectFit: 'cover'}} className='content' alt='slide-img' />
    )
}