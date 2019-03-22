import React, { Component } from 'react';

import {  Button ,Form, Label , Col , Input} from 'reactstrap';

import OneMovieById from './OneMovieById'

class MaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { myBool:false, value:""};
    this.onChange = this.onChange.bind(this)
  }
  
  afficher(){
    this.state = { myBool:true };
  }

  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render(){
    const { myBool, value} = this.state;
      if(!myBool){
        return (
            <Form className="App">
            
              <Label for="exampleEmail" >Email</Label>
              
                <Input  style={{width: "370px"}} type="text"  value={this.state.value}
      onChange={this.onChange} />
              
              <Button onClick={()=>this.afficher()}>Submit</Button>
            </Form>
            )
        }
        else{
          return (<OneMovieById api={this.state.value}></OneMovieById>)
        }
    }

}
export default MaForm