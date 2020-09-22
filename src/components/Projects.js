import React, { Fragment } from 'react';

let projs = [
    {
        name: 'Bumper Stickers - e-commerce',
        link:  "https://bumpers.solvejs.com",
        techUsed: ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]']
    },
    {
        name: 'SolveJS - blog',
        link:  "https://solvejs.com",
        techUsed: ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]', 'PostgreSQL']
    },
    {
        name: 'Testerea ad f - e-commerce',
        link:  "https://bumpers.solvejs.com",
        techUsed: ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]', 'PostgreSQL']
    },
    {
        name: 'Testers ead  - e-commerce',
        link:  "https://bumpers.solvejs.com",
        techUsed: ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]', 'PostgreSQL']
    },
    {
        name: 'Tester -d d  e-commerce',
        link:  "https://bumpers.solvejs.com",
        techUsed: ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]', 'PostgreSQL']
    },
    {
        name: 'Tester -dddd e-commerce',
        link:  "https://bumpers.solvejs.com",
        techUsed: ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]', 'PostgreSQL']
    }
]

export default function Projects(props) {
    return (
        <div id="web-projects" key={0}>
        {projs.map((x, index) =>
            <table className="project skills">
                <SingleProjectLink x={x} ind={index}/>
                {x.techUsed.map((y, index) =>
                    <tbody key={index} className='technologies'>
                        <tr><td>{y}</td></tr>
                    </tbody>)
                }
                </table>
                )
            }
            </div>
    )
}

const SingleProjectLink = (props) => {
    return (
            <thead className="single-project" key={props.ind}>
            <tr><td>
                <a href={props.x.link} target='_blank'>{props.x.name}</a>
            </td></tr>
            </thead>
    )
}