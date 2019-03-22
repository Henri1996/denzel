import React, { Component } from 'react';
import { Button } from 'reactstrap';

class LambdaDemo extends Component {
    constructor(props) {
      super(props);
      this.state = { loading: false, msg: [] };
    }
  
    handleClick = api => e => {
      e.preventDefault();
  
      this.setState({ loading: true });
      fetch('http://localhost:9292' + api)
        .then(response => response.json())
        .then(json => this.setState({ loading:false ,msg: json}));
        
    };
  
    render() {
      const { loading, msg } = this.state;
  
      return (
        <p>
          
          <Button onClick={this.handleClick('movies')}>
            {loading ? 'Loading...' : 'Un film aléatoire ...'}
          </Button>
          <br />
          <b>{msg.title } </b>
          <span>{msg.rating } </span>
          <br/>
          <span>{msg.synopsis } </span>
        </p>
      );
    }
  }
  export default LambdaDemo;