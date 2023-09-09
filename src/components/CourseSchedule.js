import React, {useEffect, useState} from 'react'
import '../App.css'
import CourseEvent from './CourseEvent';
import { Link, useParams } from 'react-router-dom'

//Displays the upcoming events and deadlines for a course.
function CourseSchedule (props) {

    //Grab course name from url parameters
    const  { course } = useParams();

    //Setup state that stores the events.
    const [events, setEvents] = useState({events: []});

    //Fetches the courses for that day
    const fetchEvents = async () => {
        await fetch("http://localhost:3001/course/" + course).then(
            response => { return response.json() }
          ).then(async (data) => {
            console.log(data);
            await setEvents(JSON.parse(data));
            console.log(events);
        })
    }

    useEffect(() => {
        fetchEvents();
    }, [])

    return(
        <div className='background'>
            {events.events.map(
                data => (
                    <CourseEvent key={events.events.indexOf(data)} index={events.events.indexOf(data)} info={data}/>
                )
            )}
            <Link to='/postEvent'>Add a new Event</Link>
        </div>
    );
}

export default CourseSchedule