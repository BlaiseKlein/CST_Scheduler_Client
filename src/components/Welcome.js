//React and CSS imports
import React, {useEffect, useState} from 'react'
import '../App.css';
import DayRow from './DayRow'
import { Link } from 'react-router-dom'

function Welcome(props) {
    const days = ['/schedule/0', '/schedule/1', '/schedule/2', '/schedule/3', '/schedule/4', '/schedule/5', '/schedule/6'];
    return (
        <div className='background welcome'>
            <div className='intro'>Welcome to Archive</div>
            <Link to={days[0]}>See Sunday Schedule</Link>
            <Link to={days[1]}>See Monday Schedule</Link>
            <Link to={days[2]}>See Tuesday Schedule</Link>
            <Link to={days[3]}>See Wednesday Schedule</Link>
            <Link to={days[4]}>See Thursday Schedule</Link>
            <Link to={days[5]}>See Friday Schedule</Link>
            <Link to={days[6]}>See Saturday Schedule</Link>
        </div>
    );
}

export default Welcome