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
            <div className='welcomeGrid'>
                <Link to={days[0]} className='welcomeLink'>See Sunday Schedule</Link>
                <Link to={days[1]} className='welcomeLink'>See Monday Schedule</Link>
                <Link to={days[2]} className='welcomeLink'>See Tuesday Schedule</Link>
                <Link to={days[3]} className='welcomeLink'>See Wednesday Schedule</Link>
                <Link to={days[4]} className='welcomeLink'>See Thursday Schedule</Link>
                <Link to={days[5]} className='welcomeLink'>See Friday Schedule</Link>
                <Link to={days[6]} className='welcomeLink'>See Saturday Schedule</Link>
            </div>
        </div>
    );
}

export default Welcome