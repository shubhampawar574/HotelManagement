import React from 'react'
import {GreenButton }from '../components/Buttons'
import Input from "../components/Input"
import { Nav, NavItem, Container, Row, Col, Jumbotron } from 'reactstrap';
import "./styles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const Signup = () => {
    return (
        <div id="login">
        <Nav id="nav">
            <NavItem className="navitem">
            <GreenButton NameOfButton={"Sign In"}></GreenButton>
            </NavItem>
        </Nav>
        <Jumbotron style={{color:"white"}}>
        <h1 className="display-5">Sign up for your Account</h1>
            <p className="lead">Choose from 200 rooms, the best according to your needs, enterprise.</p>
        </Jumbotron>
        <Container>
            <Row>
                <Col className="containeritem"> <Input symbol={<AccountCircleIcon></AccountCircleIcon>} placeholder="Fullname"></Input></Col>
                <Col className="containeritem"> <Input symbol={<AlternateEmailIcon></AlternateEmailIcon>} placeholder="Email Id"></Input></Col>
            </Row>
            <Row>
                <Col className="containeritem"> <Input symbol={<CalendarTodayIcon></CalendarTodayIcon>} placeholder="D.O.B"></Input></Col>
                <Col className="containeritem"> <Input symbol={<LocalPhoneIcon></LocalPhoneIcon>} placeholder="Mobile Number"></Input></Col>
            </Row>
            <Row>
            <Col className="containeritem"> <Input symbol={<VpnKeyIcon></VpnKeyIcon>} placeholder="Password"></Input></Col>
            <Col className="containeritem"> <Input symbol={<VpnKeyIcon></VpnKeyIcon>} placeholder="Confirm Password"></Input></Col>
            </Row>
            <Row>
            <GreenButton  className="containeritem" NameOfButton={"Sign Up"}></GreenButton>
            </Row>
        </Container>        
    </div>
    )
}

export default Signup
