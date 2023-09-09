//React, CSS, and server call imports
import React, {useEffect, useState} from 'react'
import '../App.css';
import HourRow from './HourRow';
import ScheduleItem from './ScheduleItem'
import { useParams } from 'react-router-dom';
import Title from './Title';

//Day is the grid display of each day in the week and the number of events that day.
function Day(props) {
    //Server variables setup
    const [backendData, setBackendData] = useState([]);

    const { day } = useParams();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    //Setup hourly display
    let items = [];
    for (let i = 1; i < 13; i++) {
        items.push(<div>
            {i}:00AM
        </div>)
    }
    for (let i = 1; i < 13; i++) {
        items.push(<div>
            {i}:00PM
        </div>)
    }
    let itemDisplay = items.map((time) => <div>{time}</div>)

    const asyncFetch = async () => {
        await fetch("http://localhost:3001/schedule/" + day).then(
            response => {
                return response.json()
            }
        ).then(
            async data => {
                await setBackendData(JSON.parse(data))
            }
        )
    }

    useEffect(() => {
        asyncFetch();
    }, [day])

    return (
        <>
            <Title day={day} title={days[day]}/>
            <div className='background masterGrid'>
                <div className='hourGrid'>
                {itemDisplay}
                </div>
                <div className='scheduleGrid'>
                    {backendData.map(
                        data => (
                            <ScheduleItem info={data}/>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default Day;