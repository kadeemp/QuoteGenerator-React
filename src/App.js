import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Weather from './weather';
import Search from './search'
import ShowWeather from './show-weather'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {weather:null};
  };

    findWeather(city) {
      const apikey = '2854c5771899ff92cd962dd7ad58e7b0';
      const path = `http://api.openweathermap.org/data/2.5/weather?appid=${apikey}&q=${city}`;

      fetch(path)
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        if (json.cod ==="200") {
          this.setState({ weather:json});
        } else {
          this.setState({weather:null})
        }
      })
          .catch(err => console.log(err))
    }
    showWeather() {
      if (this.state.weather) {
        return <ShowWeather weather={this.state.weather} />

      } else {
        return <div> no weather </div>
      }
    }
      render() {
        return (
          <div className="App">
            <h1>My Weather</h1>
            <Search
            placeholder="City"
            label="Search"
            onSubmit= {(term) =>{
              console.log("term:", term);
              this.findWeather(term);
            }} />
            {this.showWeather()}
          </div>
        );
      }
}

export default App;
