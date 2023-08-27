import React, {useEffect, useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

//Displays the course in its place in the schedule.
function ScheduleItem (props) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const linkURL = '/course/' + props.info.title;

    const year = props.info.events[0].date.substring(0, 4);
    const month = props.info.events[0].date.substring(5, 7);
    const day = props.info.events[0].date.substring(9);


    const infoDate = new Date(year, month, day);

    //Setup to position the div at the correct hour.
    const hour = (((parseInt(props.info.start) / 100) - 1) * 3) + 'em';
    const finish = (((parseInt(props.info.end) - parseInt(props.info.start)) / 100) * 6) + 'em';
    const spacing = {
        position: 'absolute',
        background: '#5B8FB9',
        width: '49vw',
        top: hour,
        height: finish,
    }

    //Setup to position the next event block in the bottom right.
    const eventCSS = {
        position: 'absolute',
        bottom: '1em',
        right: '1em',
        display: 'flex'
    }
    const boxOutline = {
        outline: 'solid #B6EADA',
        marginLeft: '1em',
        padding: '2px'
    }

    //dev testing, REMOVE LATER
    useEffect(() => {
        console.log(props.info); 
        console.log(finish);
    }, [])

    return (
        <div style={spacing}>
            <Link to={linkURL}>{props.info.title}</Link>
            <div style={eventCSS}>
                Next event
                <div style={boxOutline}>
                    {props.info.events ? months[infoDate.getMonth()] + " " + infoDate.getDate()  : ''}
                </div>
            </div>
        </div>
    )
}

export default ScheduleItem