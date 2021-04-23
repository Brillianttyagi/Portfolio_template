import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Work from './images/work.svg'
import Circle from './images/circle.svg'
import './css/styles.css'
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:['Pythonista','Developer.','Coder.','Data scientist.'],
            count:0,
            index:0,
            currenttext:"",
            letter:""
        }
    }
    componentDidMount(){
        setInterval(() => {
            if(this.state.count === this.state.text.length){
                this.setState({count:0})
            }
            this.setState({currenttext:this.state.text[this.state.count]})
            this.setState({letter:this.state.currenttext.slice(0,++this.state.index)})
            if (this.state.letter.length===this.state.currenttext.length){
                this.setState({count:this.state.count++,index:0})
                
            }
        }, 400);
    }
    render() { 
        return ( 
            <Container>
                <Col><img id="Circle" src={ Circle } alt="circle"/></Col>
                <Row>
                    <Col className="content">
                        <Row><h1 className="Hii">Hii <img height="80px" alt="Hand" src="https://raw.githubusercontent.com/Brillianttyagi/Brillianttyagi/master/hand.gif"/> <br/></h1></Row>          
                        <Row><p className="name">I'm Deepanshu</p></Row>
                        <Row><h5>I'm a <span id="change">{ this.state.letter }</span></h5></Row>

                    </Col>
                    <Col><img width="500px" src={ Work } alt="Programming guy"/></Col>
                </Row>
                <img id="Circle2" src={ Circle } alt="circle"/>
            </Container>
         );
    }
}
 
export default Main;