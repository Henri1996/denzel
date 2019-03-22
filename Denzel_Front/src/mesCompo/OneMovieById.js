import React, { Component } from 'react';



import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class OneMovieById extends Component {
    constructor(props) {
        super(props);
        this.state = { myBool : false, api:props.api ,msg :[]};
      }
    
      componentDidMount(api){
        this.setState({ loading: true });
        fetch('http://localhost:9292/'+api)
          .then(response => response.json())
          .then(json => this.setState({ loading:false ,msg: json}));
      }
  
    render(){
        const { msg } = this.state;
        return (
        
        <Card>
        <CardImg top width="100%" src={msg.poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{msg.title}</CardTitle>
          <CardSubtitle>Rate : {msg.rating}</CardSubtitle>
          <CardText>{msg.synopsis}</CardText>
          <Button href={msg.link}>View site</Button>
        </CardBody>
      </Card>
    )
    }
}
export default OneMovieById