import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import App from '../App'
class GetOneMovie extends Component {
    constructor(props) {
      super(props);
      this.state = { loading: false, msg: [] , myBool:false };
    }
  ReturnF(){
      this.setState({
          myBool:true,

      })
  }
    componentDidMount(){
      this.setState({ loading: true });
      fetch('http://localhost:9292/movie')
        .then(response => response.json())
        .then(json => this.setState({ loading:false ,msg: json}));
    }
    render() {
      const { msg , myBool} = this.state;
        if(!myBool)
        {
      return (
          <div className="App-card"> 
        <Button  color = "primary" size="lg" onClick={()=>this.ReturnF()}>
        Return
      </Button>{' '}
        <Card>
        <CardImg top width="100%" src={msg.poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{msg.title}</CardTitle>
          <CardSubtitle>Rate : {msg.rating}</CardSubtitle>
          <CardText>{msg.synopsis}</CardText>
          <Button href={msg.link}>View site</Button>
        </CardBody>
      </Card>
      </div>
        
      );}
      else{
          return (<App></App>)
      }
    }
  }
  export default GetOneMovie;