import axios from 'axios'
import './Home_section.css'
import React, { useState, useEffect } from "react";

const Home_section = ({date}) => {
  const [pictures, setPicture] = useState(null); 
  const [info, setInfo] = useState(null);

  
  const getImage = async () => {
    try {
      const resultFromApi = await axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=pgjNLJxAM3vEnBcOGWLCCyNHu3uany7lhBhfftoX`)
      setPicture(resultFromApi.data.hdurl)
      setInfo(resultFromApi.data.explanation)
    } catch(error) {
      setPicture('https://conteudo.imguol.com.br/c/tab/e9/2019/11/10/lula-na-multidao-em-sao-bernardo-do-campo-1573423819429_v2_900x506.jpg')
    }
  }
   
  useEffect(() => {
    getImage()
  });

  return (
    <div>
      <section className="home-section">
        <h1 className="title">History</h1>
        <p className="photo-text">{info}</p>
        {/* {this.state.pictures && this.state.pictures.map((pic, key) => {
          return( */}
          <h1 className="title">Image</h1>
            <img className="home-content" src={pictures}></img>
          {/* )
        })} */}
      </section>
    </div>
  );
}

export default Home_section;