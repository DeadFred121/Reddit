import React, { Component } from 'react';
import './App.css';
import TitleCard from './components/TitleCard'
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <TitleCard />

        <Post />
        <Post />

      </div>
    );
  }
}

export default App;
