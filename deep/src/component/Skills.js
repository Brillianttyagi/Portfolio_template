import React, { Component } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import './css/skills.css'
import django from './images/django.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython,faJs,faAws,faNodeJs,faReact,faHtml5,faCss3,faLinux } from "@fortawesome/free-brands-svg-icons"

class Skill extends Component {
    render() { 
        return ( 
            <Container>
                <h1 class="name_skill">Skills</h1>
                <Row className="skills">
                    <br/>
                    <Col className="p-3">
                        <span className=" skills_icon"><FontAwesomeIcon icon={faPython} size="3x" /></span>
                        <span className=" skills_icon"><FontAwesomeIcon icon={faJs} size="3x" /></span>
                        <span className=" skills_icon"><FontAwesomeIcon icon={faAws} size="3x" /></span>
                        <span className=" skills_icon"><FontAwesomeIcon icon={faNodeJs} size="3x" /></span>
                        <span className=" skills_icon"><FontAwesomeIcon icon={faReact} size="3x" /></span>
                        <span className=" skills_icon"><FontAwesomeIcon icon={faHtml5} size="3x" /></span>
                        <span className=" skills_icon"><FontAwesomeIcon icon={faCss3} size="3x" /></span>
                        <span className=" skills_icon"><FontAwesomeIcon icon={faLinux} size="3x" /></span>
                    </Col>
                </Row>
                <Row>
                <Col className="m-3">
                        <span className=" skills_icon"><img width="100px" src={django} alt="django" /></span>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Skill;