// import logo from './logo.svg';
//Component, CSS, and React imports
import './App.css';
import Title from './components/Title'
import Welcome from './components/Welcome'
import Day from './components/Day'
import PostSchedule from './components/PostSchedule'
import CourseSchedule from './components/CourseSchedule';
import PostEvent from './components/PostEvent';
import React, { useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Interface from './components/Interface';

function App() {
  //Server setup
  const [backendData, setBackendData] = useState([{}])
  const [date, setDate] = useState();
  const [day, setDay] = useState();

  //Server call
  useEffect(() => {
    fetch("http://localhost:3001/test").then(
      response => response.json()
    ).then(
      data=> {
        setBackendData(data)
      }
    )
    setDate('January 17');
    setDay('Monday');
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Interface />}>
        {/* Welcome page */}
        <Route index element={<Welcome />}/>
        {/* Form for adding a new course to the schedule */}
        <Route path='/postSchedule' element={<PostSchedule />} />
        {/* Schedule of courses for a day */}
        <Route path='/schedule/:day' element={<Day/>} />
        {/* Schedule of events for a course */}
        <Route path='/course/:course' element={<CourseSchedule/>}></Route>
        {/* Form for adding a new event to a course*/}
        <Route path='/postEvent' element={<PostEvent/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
