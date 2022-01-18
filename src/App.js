import React, { useState, Component } from "react";
import axios from 'axios';
import Header from "./components/Header/Header";
import Mainvideo from './assets/earthVideo.mp4'

const baseURL = `https://api.nasa.gov/planetary/apod?api_key=AJV0AFfyYaPdUzakNA5eJH7eNnuy3EKux0PFiPrG`

class App extends Component {
  state = {
    date: "",
    photo: ""
  };

  updateDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPicture(dateFromInput);
  };

  getPicture = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=aA53jfDx54NAdobPRkGVM0aYu7uex2u6KhWI3CBV`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };


  render() {
    return (
      <div className="main">
        <Header />
        {/* <GetDate updateDate={this.updateDate} /> */}
        <video className="app__video" src={Mainvideo} autoPlay muted loop />
        {/* <Picture photo={this.state.photo} /> */}
      </div>
    );
  }
};

export default App;
