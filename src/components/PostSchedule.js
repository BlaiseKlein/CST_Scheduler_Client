//React and CSS imports
import React, {useEffect, useState} from 'react'
import '../App.css'
// import BasicModal from './BasicModal';

function PostSchedule() {

    //State for the info sent to the server, compilation of the title, desc, day, start and end times.
    const [info, setInfo] = useState({title: '', description: '', day: '', start: '', end: ''});
    //Altered state that allows time to be sent in a proper format
    const [adjusted, setAdjusted] = useState({title: '', description: '', day: '', start: '', end: ''});
    

    //Handles the submition of the new schedule item.
    async function submitHandler(e) {
        e.preventDefault();
        alert(typeof info);
        console.log(info.title.trim().length)
        console.log(info.description.trim().length)
        console.log(info.day.trim().length)
        console.log(info.start.trim().length)
        console.log(info.end.trim().length)
        if (adjusted.title.trim().length > 0 && adjusted.description.trim().length > 0 && adjusted.day.trim().length > 0
            && adjusted.start.trim().length > 0 && adjusted.end.trim().length > 0){
                console.log("yes")
                await fetch('http://localhost:3001/schedulePost', 
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(adjusted)
                    }).then(() => {
                        console.log("worked");
                    })
            }
    }

    //Handles the title text being entered, changes the title state.
    const titleHandler = (e) => {
        setInfo({...info, title: e.target.value})
        setAdjusted({...info, title: e.target.value})
        // await setTitle(e.target.value);
        console.log(info);
    }

    //Handles the description text being entered, changes the description state.
    function descHandler(e) {
        setInfo({...info, description: e.target.value})
        setAdjusted({...info, description: e.target.value})
        // setDescription(e.target.value);
        console.log(info);
    }

    //Handles the day being selected from the dropdown, changes the day state.
    function dayHandler(e) {
        setInfo({...info, day: e.target.value})
        setAdjusted({...info, day: e.target.value})
        // setDay(e.target.value);
        console.log(info);
    }

    //Handles the start time being entered, changes the start state.
    function startHander(e) {
        setInfo({...info, start: e.target.value})
        setAdjusted({...info, start: e.target.value})
        // setStart(e.target.value);
        console.log(info);
        console.log(info.start.trim().length)
        // console.log(typeof e.target.value);
    }

    //Handles the end time being entered, changes the end state.
    function endHandler(e) {
        setInfo({...info, end: e.target.value})
        setAdjusted({...info, end: e.target.value})
        // setEnd(e.target.value);
        console.log(info);
        console.log(info.end.trim().length)
    }

    useEffect(() => {
        console.log('Reloaded')
    }, [info, adjusted]);


    return (
        <div>
            <form className='postForm'>
                <input type='text' className='postTitle' placeholder='Enter Title' value={info.title} onChange={titleHandler}/>
                <input type='text' className='postDescription' placeholder='Enter Description' value={info.description} onChange={descHandler}/>
                {/* <BasicModal /> */}
                {/* <input type='date' className='postDate' /> */}
                <select name="day" value={info.day} onChange={dayHandler}>
                    <option value=''>--Select the day--</option>
                    <option value='monday'>Monday</option>
                    <option value='tuesday'>Tuesday</option>
                    <option value='wednesday'>Wednesday</option>
                    <option value='thursday'>Thursday</option>
                    <option value='friday'>Friday</option>
                    <option value='saturday'>Saturday</option>
                    <option value='sunday'>Sunday</option>
                </select>
                <label htmlFor='start'>Enter the start time</label>
                <input type='time' className='postTime' id='start' value={info.start} onChange={startHander}/>
                <label htmlFor='end'>Enter the end time</label>
                <input type='time' className='postTime' id='end' value={info.end} onChange={endHandler} />
                <input type='submit' id='postSubmit' value='Submit' onClick={submitHandler}/>
            </form>
        </div>
    );

}

export default PostSchedule;