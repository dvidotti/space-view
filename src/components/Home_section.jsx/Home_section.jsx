import React, { Component } from 'react';
import axios from 'axios'
import './Home_section.css'

class Home_section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: false,
      
      
    }
  }

  getImage = () => {
    console.log(this.props.date)
    axios.get(`https://api.nasa.gov/planetary/apod?date=${this.props.date}&api_key=pgjNLJxAM3vEnBcOGWLCCyNHu3uany7lhBhfftoX`)
    .then(resultFromApi => {
      console.log(resultFromApi)
      this.setState({pictures:resultFromApi.data.hdurl})
    })
  }

  componentWillReceiveProps () {
    this.getImage()
  }
  
  render() {
    return (
      <div>
        <section className="home-section">
          {/* {this.state.pictures && this.state.pictures.map((pic, key) => {
            return( */}
              <img className="home-content" src={this.state.pictures}></img>
            {/* )
          })} */}
        </section>
      </div>
    );
  }
}

export default Home_section;