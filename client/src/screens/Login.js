import React from 'react'
import {GreenButton, WhiteButton }from '../components/Buttons'
import Input from "../components/Input"
import { Nav, NavItem, Container, Row, Col, Jumbotron } from 'reactstrap';
import "./styles.css"
/**
 * Component list:
 * 1) Admin login and Sign up buttons.
 * 2) UserName, Password inputs.
 * 3) Login now, sign up with google, sign in with facebook, sign in with apple account buttons.
 * 4) Header for Login to your Account
 * 5) Paragraph for Choose from 200 rooms, the best according to your needs, enterprise.
 */
const Login = () => {
    return (
        <div id="login">
            <Nav id="nav">
                <NavItem className="navitem">
                <GreenButton NameOfButton={"Admin Login"}></GreenButton>
                </NavItem>
                <NavItem className="navitem">
                <GreenButton NameOfButton={"Sign Up"}></GreenButton>
                </NavItem>
            </Nav>
            <Jumbotron style={{color:"white"}}>
            <h1 className="display-5">Login to your Account</h1>
                <p className="lead">Choose from 200 rooms, the best according to your needs, enterprise.</p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col className="containeritem"> <Input symbol="@" placeholder="Username"></Input></Col>
                    <Col className="containeritem">  <WhiteButton NameOfButton={"Sign in With Google"}></WhiteButton> </Col>
                </Row>
                <Row>
                    <Col className="containeritem"> <Input symbol="@" placeholder="Username"></Input></Col>
                    <Col className="containeritem">  <WhiteButton NameOfButton={"Sign in With Facebook"}></WhiteButton> </Col>
                </Row>
                <Row>
                    <Col className="containeritem"> <GreenButton NameOfButton={"Login Now"}></GreenButton> </Col>
                    <Col className="containeritem">   <WhiteButton NameOfButton={"Sign in With Apple"}></WhiteButton> </Col>
                </Row>
            </Container>        
        </div>
    )
}

export default Login
