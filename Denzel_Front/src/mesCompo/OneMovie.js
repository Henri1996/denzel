import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , CardDeck} from 'reactstrap';

function getRandomNumber(max)
{
    return Math.floor(Math.random()*Math.floor(max))
}

class OneMovie extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          item : [],
          isLoaded: false,
          randomN:[],
        }
      }
  componentDidMount(){

    fetch('http://localhost:9292/movie/populate')
    .then(res => res.json())
    .then(json =>{
        this.setState({
          isLoaded : true,
          item : json,
          
        })
    }
      
    )

}
  render() {
    var { isLoaded , item} = this.state

    if(!isLoaded){
      return <div>Loading....</div>
    }
    else{
        var r = getRandomNumber(56);
        var r2 = getRandomNumber(56);
        var r3 = getRandomNumber(56);
        var r4 = getRandomNumber(56);
        var r5 = getRandomNumber(56);
        var r6 = getRandomNumber(56);
        var r7 = getRandomNumber(56);
        var r8 = getRandomNumber(56);
        


    return (
      <div>
        
        
          
          <CardDeck>
      <Card>
        <CardImg top width="100%" src={item[r].poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{item[r].title}</CardTitle>
          <CardSubtitle>Rate : {item[r].rating}</CardSubtitle>
          <CardText>{item[r].synopsis}</CardText>
          <Button href={item[r].link}>View site</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src= {item[r2].poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{item[r2].title}</CardTitle>
          <CardSubtitle>Rate :{item[r2].rating}</CardSubtitle>

          <CardText>{item[r2].synopsis}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={item[r3].poster} alt="Card image cap" />
        <CardBody>
        <CardTitle>{item[r3].title}</CardTitle>
        <CardSubtitle>Rate : {item[r3].rating}</CardSubtitle>

          <CardText>{item[r3].synopsis}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={item[r4].poster} alt="Card image cap" />
        <CardBody>
        <CardTitle>{item[r4].title}</CardTitle>
        <CardSubtitle>Rate : {item[r4].rating}</CardSubtitle>
          <CardText>{item[r4].synopsis}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={item[r5].poster} alt="Card image cap" />
        <CardBody>
        <CardTitle>{item[r5].title}</CardTitle>
        <CardSubtitle>Rate : {item[r5].rating}</CardSubtitle>

          <CardText>{item[r5].synopsis}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src= {item[r6].poster} alt="Card image cap" />
        <CardBody>
        <CardTitle>{item[r6].title}</CardTitle>
        <CardSubtitle>Rate : {item[r6].rating}</CardSubtitle>

          <CardText>{item[r6].synopsis}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={item[r7].poster} alt="Card image cap" />
        <CardBody>
        <CardTitle>{item[r7].title}</CardTitle>

        <CardSubtitle>Rate : {item[r7].rating}</CardSubtitle>
          <CardText>{item[r7].synopsis}</CardText>
          <Button href={item[r7].link}>Web site</Button>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={item[r8].poster} alt="Card image cap" />
        <CardBody>
        <CardTitle>{item[r8].title}</CardTitle>
        <CardSubtitle>Rate : {item[r8].rating}</CardSubtitle>
          <CardText>{item[r8].synopsis}</CardText>
          
          <Button>Button</Button>
        </CardBody>
      </Card>
      
    </CardDeck>
        </div>
    );
  }
  }
}
export default OneMovie;