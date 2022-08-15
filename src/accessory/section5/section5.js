import React from 'react';
import './section5.css'

function Section5() {
    const images=[
        {
            key:1,
            img:require('../../img/LC.png')
        },
        {
            key:2,
            img:require('../../img/Infodata.png')
        },
        {
            key:3,
            img:require('../../img/Stat_Kings.webp')
        },
        {
            key:4,
            img:require('../../img/Up_Prime.webp')
        }
    ]
    return(
        <div className='section5'>
            <h1>Featured on</h1>
            <div className="img5">
                {images.map(i=><img key={i.key} className='sponsors' src={i.img} />)}
            </div>
        </div>
    )
}


export default Section5;