import React, { CSSProperties } from 'react';

export const Light = (props: { style: CSSProperties }) => {
    console.log(props);
    
    return (
       <div className='light-color' style={props.style}></div>
    )
}

