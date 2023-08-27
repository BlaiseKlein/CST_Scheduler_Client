//React, CSS and server call imports
import React, { useEffect, useState} from 'react'
import '../App.css'

function ViewPost() {
    //Server setup
    const [backendData, setBackendData] = useState([{}])
  //Server call
    useEffect(() => {
        fetch("/fakePost").then(
        response => response.json()
        ).then(
        data=> {
            setBackendData(data)
        }
        )
    }, [])

    return (
        <div>
            <div>{backendData.title}</div>
            <div>{backendData.date}</div>
            <div>{backendData.time}</div>
            <div>{backendData.description}</div>
        </div>
    );
}

export default ViewPost