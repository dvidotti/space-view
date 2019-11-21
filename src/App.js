import React, { useState, useEffect } from 'react';
import './App.css';
import Home_Section from './components/Home_section.jsx/Home_section'

const App = () => {
  const [date, setDate] = useState('2019-10-20');
  const [dateInput, handleDate] = useState('2019-10-20')
  console.log(date, dateInput)
  

  const getDate = (e) => {
   e.preventDefault();
   setDate(dateInput)
  }

  return (
    <div>
      <form onSubmit={getDate}>
        <input type="text" name="date" placeholder="YYYY-MM-DD" value={dateInput} onChange={(e) => handleDate(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      <Home_Section date={date}/>
    </div>
  )
}

export default App;
