import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Foot extends Component {
    render() { 
        return ( 
            <div className="footercon">
                <Row className="rows">
                    <Col>
                        <div class="col-5 offset-1 col-sm-2">
                            <h5>Links</h5>
                            <ul class="list-unstyled">
                                <li><a id="links" href="#">Home</a></li>
                                <li><a id="links" href="./aboutus.html">Projects</a></li>
                                <li><a id="links" href="#">Resume</a></li>
                                <li><a id="links" href="./contactus.html">Contact</a></li>
                                <li><a id="links" href="./contactus.html">About</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div class="address">
                            <h5>Contact</h5>
                            <address>
                                Uttar pradesh<br/>
                                India<br/>
                                <i class="fa fa-envelope fa-lg"></i>
                                <a href="mailto:deepanshubhai84@gmail.com">Mail Me</a>
                            </address>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a id="social_" class="btn btn-social-icon btn-google-plus" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                            <a id="social_" class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a>
                            <a id="social_" class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a>
                            <a id="social_" class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                            <a id="social_" class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                            <a id="social_" class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o"></i></a>
                        </div>
                    </Col>
                </Row>
                <div class="Copyright">
                    <p>Made with by ❤️ by deepanshu</p>
                </div>
            </div>
         );
    }
}
 
export default Foot;