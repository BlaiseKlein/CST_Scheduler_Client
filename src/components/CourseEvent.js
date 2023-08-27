import React, {useEffect, useState} from 'react'
import '../App.css'


//Displays the upcoming events and deadlines for a course.
function CourseEvent (props) {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = props.info.date.substring(0, 4);
    const month = props.info.date.substring(5, 7);
    const day = props.info.date.substring(9);


    const infoDate = new Date(year, month, day);
    //Change to accept new date format
    const displayDate = days[infoDate.getDay()] + ", " + months[infoDate.getMonth()] + " " + infoDate.getDate();

    useEffect(() => {
        console.log(props.info);
        console.log(year + ',' + month + ',' + day);
    }, []) 

    return(
        <div className='eventList'>
            <div className='eventDayBox'>{displayDate}</div>
            <div className='eventDescription'>{props.info.description}</div>
        </div>
    );
}

export default CourseEvent