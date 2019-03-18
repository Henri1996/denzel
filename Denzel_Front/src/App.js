import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetMovies from './mesCompo/fetchApi';
import GetOneMovie from './mesCompo/OneMovie';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      item : [],
      isLoaded: false,
    }
  }
 

  render() {
    
    return (
      
    <div>
      <h1 className="text-center title">Here we are 10 ramdom movies from the Denzel's best movies :</h1>
      
      <br></br><br></br>
      <GetOneMovie/>
    </div>)
  }
}


export default App;
