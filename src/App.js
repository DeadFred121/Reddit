import React, { Component } from 'react';
import './App.css';
import TitleCard from './components/TitleCard'
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <TitleCard />

        <Post title='This is shocking!' author='SlimJim223'/>
        <Post title='I made this thing!' author='HughMungusSyzzurp'/>

      </div>
    );
  }
}

export default App;
