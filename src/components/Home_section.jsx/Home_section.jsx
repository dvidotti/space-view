import axios from 'axios'
import './Home_section.css'
import React, { useState, useEffect } from "react";

const Home_section = ({date}) => {
  const [pictures, setPicture] = useState(null) 

  
  const getImage = async () => {
    try {
      const resultFromApi = await axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=pgjNLJxAM3vEnBcOGWLCCyNHu3uany7lhBhfftoX`)
      setPicture(resultFromApi.data.hdurl)
    } catch(error) {
      setPicture(null)
    }
  }
   
  useEffect(() => {
    getImage()
  });

  return (
    <div>
      <section className="home-section">
        {/* {this.state.pictures && this.state.pictures.map((pic, key) => {
          return( */}
            <img className="home-content" src={pictures}></img>
          {/* )
        })} */}
      </section>
    </div>
  );
}

export default Home_section;