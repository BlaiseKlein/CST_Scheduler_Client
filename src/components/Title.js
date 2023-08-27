import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Title(props) {

    const lastDay = '/schedule/' + (props.day == 0 ? 6 : parseInt(props.day) - 1); 
    const nextDay = '/schedule/' + (props.day == 6 ? 0 : parseInt(props.day) + 1); 

        return (
            <div className='titleBackground'>
                <Link to={lastDay} className='lastDay'>Back</Link>
                <div className='titleText'>{props.title}</div>
                <Link to={nextDay} className='nextDay'>Next</Link>
            </div>
        )
}

export default Title;