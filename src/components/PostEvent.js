//React and CSS imports
import React, {useEffect, useState} from 'react'
import '../App.css'
// import BasicModal from './BasicModal';

function PostEvent() {

    //State for the info sent to the server, compilation of the title, desc, event and date
    const [info, setInfo] = useState({title: '', description: '', event: '', date: ''});
    //States for the title, description, event, date and course list
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [event, setEvent] = useState('');
    // const [date, setDate] = useState('');

    const [list, setList] = useState([]);

    //Handles the submition of the new schedule item.
    async function submitHandler(e) {
        e.preventDefault();
        alert(typeof info);
        console.log(info.title.trim().length)
        console.log(info.description.trim().length)
        console.log(info.event.trim().length)
        console.log(info.date.trim().length)
        if (info.title.trim().length > 0 && info.description.trim().length > 0 && info.event.trim().length > 0
            && info.date.trim().length > 0){
                console.log("yes")
                await fetch('http://localhost:3001/eventPost', 
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(info)
                    }).then(() => {
                        console.log("worked");
                    })
            }
    }

    const getSchedule = async () => {
        await fetch("http://localhost:3001/getSchedule").then(
            response => {
                return response.json()
            }
        ).then(
            async data => {
                await setList(JSON.parse(data))
            }
        )
    }

    //Handles the title text being entered, changes the title state.
    const titleHandler = (e) => {
        setInfo({...info, title: e.target.value})
        // await setTitle(e.target.value);
        console.log(info);
    }

    //Handles the description text being entered, changes the description state.
    function descHandler(e) {
        setInfo({...info, description: e.target.value})
        // setDescription(e.target.value);
        console.log(info);
    }

    //Handles the event being selected from the dropdown, changes the event state.
    function eventHandler(e) {
        setInfo({...info, event: e.target.value})
        // setDay(e.target.value);
        console.log(info);
    }

    //Handles the date being entered, changes the date state.
    function dateHandler(e) {
        setInfo({...info, date: e.target.value})
        // setStart(e.target.value);
        console.log(typeof info.date);
        console.log(info.date.trim())
        // console.log(typeof e.target.value);
    }


    useEffect(() => {
        console.log('Reloaded');
        getSchedule();
    }, []);


    return (
        <div>
            <form className='postForm'>
                <input type='text' className='postTitle' placeholder='Enter Title' value={info.title} onChange={titleHandler}/>
                <input type='text' className='postDescription' placeholder='Enter Description' value={info.description} onChange={descHandler}/>
                {/* <BasicModal /> */}
                {/* <input type='date' className='postDate' /> */}
                <select name="day" value={info.event} onChange={eventHandler}>
                    <option value=''>--Select the Event--</option>
                    {list.map(
                        data => (
                            <option key={list.indexOf(data)} value={data}>{data}</option>
                        ))}
                    {/* <option value='monday'>Monday</option>
                    <option value='tuesday'>Tuesday</option>
                    <option value='wednesday'>Wednesday</option>
                    <option value='thursday'>Thursday</option>
                    <option value='friday'>Friday</option>
                    <option value='saturday'>Saturday</option>
                    <option value='sunday'>Sunday</option> */}
                </select>
                {/* <label htmlFor='start'>Enter the start time</label>
                <input type='time' className='postTime' id='start' value={info.start} onChange={startHander}/>
                <label htmlFor='end'>Enter the end time</label>
                <input type='time' className='postTime' id='end' value={info.end} onChange={endHandler} /> */}
                <input type='date' className='postDate' id='date' value={info.date} onChange={dateHandler}/>
                <input type='submit' id='postSubmit' value='Submit' onClick={submitHandler}/>
            </form>
        </div>
    );

}

export default PostEvent;