import React, { Component } from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import name from './images/name.svg'
class About extends Component {
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col className="m-5">
                        <img width="100%" src={ name } alt="Deepanshu"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-3" style={{ width: '18rem' }}>
                            <Card.Img style={{ borderRadius:"100%" }} variant="top" src="https://pbs.twimg.com/profile_images/1385916880938946570/kVbpG2jf_400x400.jpg" alt="deepanshu" />
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                            <Card.Body>
                            <Card.Title>About</Card.Title>
                            <Card.Text>
                            I'm Deepanshu tyagi,currently persuing Btech in Computer science engineering from Dr.APJ abdul kalam
                            technical University.I'm a Web developer and learning data science with keen understanding of Python
                            ,html,css,django,data structure.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default About;