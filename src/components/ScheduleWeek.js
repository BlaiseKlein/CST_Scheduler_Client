import React, {useEffect, useState} from 'react'
import '../App.css'

function ScheduleWeek (props) {

    useEffect(() => {
        console.log(props.info);
    }, [])
    return (
        <div>
            {props.info.title}
        </div>
    )
}

export default ScheduleWeek