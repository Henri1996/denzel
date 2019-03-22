import React, { Component } from 'react';
import GetTenMovie from './mesCompo/TenMovie';
import './App.css';
import LambdaDemo from './mesCompo/LambdaDemo';
import MonQuest from './mesCompo/MaForm.js';
import GetOneMovie from './mesCompo/getOneMovie.js'
import { Button , Col} from 'reactstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      isLoaded: false,
      oneMovie:false,
      tenMovie:false,

    
    }
  }
  oneMovieF(){
    this.setState({ 
        oneMovie:true
        
      })
  }
  tenMovieF(){
    this.setState({ 
        tenMovie:true
        
      })
  }
  render() {

    const { isLoaded, oneMovie , tenMovie } = this.state;
    if(!oneMovie && !tenMovie){
      console.log("je suis passé ")
      return (
        <div className="App">
        <h1 className="display-2">Denzel Washington</h1>
        <br></br>
      <Button  color = "primary" size="lg" onClick={()=>this.oneMovieF()}>
        Get one random's movies
      </Button>{' '}
      
      <Button color = "primary" size="lg" onClick={()=>this.tenMovieF()}>
        Get ten random's movies
      </Button><br/><br/>
      <img src={require('./DenzelJeune.jpeg')} />
      </div>
      
      )
      
    }
    if(oneMovie)
    {
      console.log(oneMovie)
        return (
          <div >
          
        <GetOneMovie/>
        </div> )
    }
    if(tenMovie){
        return (<div>
        <GetTenMovie/>
        </div>)
    }
    /*return (
      <div className="App">
        <h1 className="text-center title">10 ramdom movies from the Denzel's best movies :</h1>
        
      <br></br>
      <LambdaDemo/>
      <br></br>
      <GetTenMovie/>
      
      </div>
    );*/
  }
}

export default App;
