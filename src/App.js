import React, {Component} from 'react';
import './App.css';
import Home_Section from './components/Home_section.jsx/Home_section'
import { format } from 'path';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2019-10-20',
      mount: true,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getDate = (e) => {
   e.preventDefault();
   this.setState({mount:false})
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.getDate}>
          <input type="text" name="date" placeholder="YYYY-MM-DD" value={this.state.date} onChange={(e) => this.handleChange(e)
          }/>
          <button type="submit">Search</button>
        </form>
        <Home_Section date={this.state.date}/>
      </div>
    )
  }
}

export default App;
