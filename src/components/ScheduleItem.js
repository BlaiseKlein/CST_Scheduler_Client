import React, {useEffect, useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

//Displays the course in its place in the schedule.
function ScheduleItem (props) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const linkURL = '/course/' + props.info.title;

    const year = props.info.events[0] ? props.info.events[0].date.substring(0, 4) : '0';
    const month = props.info.events[0] ? props.info.events[0].date.substring(5, 7): '0';
    const day = props.info.events[0] ? props.info.events[0].date.substring(9): '0';


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

    const deleteBtn = {
        position: 'absolute',
        top: '0',
        right: '0'
    }

    async function deleteHandler() {
        await fetch('http://localhost:3001/scheduleDelete',
        {   
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(props.info)
        }).then(() => {
            console.log("worked");
        });
        console.log("btn worked");
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
            <button onClick={deleteHandler} style={deleteBtn}>Delete this course</button>
        </div>
    )
}

export default ScheduleItem