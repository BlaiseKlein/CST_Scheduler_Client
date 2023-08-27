//React and CSS imports
import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function DayRow(props) {
    const linkURL = '/schedule/' + props.day

    return(
    <div className='row'>
        <div className='numBox'><div className='innerBox'>{props.day}</div></div>
        <div className='numBox'><div className='innerBox'>{props.dayNum}</div></div>
        <div className='eventDropdown'>{props.eventsNum}
            <Link to={linkURL} >See Schedule </Link>
            <div className='eventBox' hidden>{props.eventsNum}</div>
            <div className='workBox' hidden>{props.eventsNum}</div>
            <div className='personalBox' hidden>{props.eventsNum}</div>
            <div className='importantBox' hidden>{props.eventsNum}</div>
        </div>
    </div>
    );
}

export default DayRow;