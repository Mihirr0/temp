import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import signupimg from "../images/signupimg.jpeg"
const Login= () => {
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Study Channel</h1>
                <Row className="mt-5">
                    <Col lg={7} md={8} sm={15} className="p-5 m-auto shadow-sm rounded-lg">
                    <div class="d-flex flex-row bd-highlight mb-3">
                    <div style={{ margin:30}} class="p-2 bd-highlight">
                        <Form>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <br/>
                            <h6 style={{color:"blue"}}>Forgot Password?</h6>
                            <br/>
                            <Button variant="success btn-block" type="submit" style={{paddingLeft:80 , paddingRight:80}}>
                                Login
                            </Button>
                            <p style={{fontSize:15}}>Don't have any account?<a style={{color:"blue"}}>Register here</a></p>
                        </Form>
                        </div>
                        <div class="p-2 bd-highlight"><img src={signupimg} className="signimg" style={{width:400}} alt="..." /></div>
                        </div>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022. All Rights Reserved.</h6>
                
            </Container>
        </>
    );
};

export default Login;