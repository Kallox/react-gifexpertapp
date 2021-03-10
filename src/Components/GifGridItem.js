import React from 'react';

export const GifGridItem = ({id, title, url}) => {

    return (
        <div className="card animate__animated animate__pulse">
            <img src={url} alt={title} key={id}/>
            <p>{title}</p>
        </div>
    )
}

