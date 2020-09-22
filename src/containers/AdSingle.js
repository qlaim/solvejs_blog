import React from 'react';

function Ad(props) {
    return (
        <div>
            <span>Ad - Course - {props.tech}</span>
            <a href={props.addr}target='_blank'><img src={props.image} /></a>
        </div>
            )
}