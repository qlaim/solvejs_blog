import React from 'react';
import AdSingle from './AdSingle';

const adsList = [
    {
        adImg: '../public/images/demo_ad.png',
        tech: 'JavaScript, ReactJS, Express, MongoDb',
        addr: '#'
    }
]

function Ads(props) {
    return (
        adsList.map((item, index) => 
        <div className='ad'>
            <AdSingle addr={item.addr} tech={item.tech} image={item.addr} />
        </div>
        )
    )
}