import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap';
import Input from "../components/Input"
import Textarea from '../components/Textarea';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import styles from "./styles.css"
import img from "../resources/locationImage.png"

const ContactUs = () => {
    return (
        <div>
            <h1 id="heading">Get In Touch</h1>
            <Container>
                <Row>
                    <p>Leave us a message</p>
                </Row>
                <Row>
                   <Col>
                   <Input placeholder="Name"></Input>
                   <Input placeholder="Email Address"/>
                   <Textarea placeholder={"Type your message here"}></Textarea>
                   <Button  color="primary" style={{width:"100%"}}>primary</Button>{' '}
                   </Col>
                   <Col style={{display:"grid", gridTemplateColumns:"auto auto"}}>
                       <LocationOnIcon/>
                       <p style={{textAlign:"left", margin:"0px -50px"}}>Information technologies building, Victoria Island, Lagos, Nigeria</p>
                       <LocalPhoneIcon />
                       <p style={{textAlign:"left", margin:"0px -50px"}}>Information technologies building, Victoria Island, Lagos, Nigeria</p>
                       <EmailIcon/>
                       <p>Information technologies building, Victoria Island, Lagos, Nigeria</p>
                       <a href="https://youtube.com"><YouTubeIcon htmlColor="black"></YouTubeIcon></a>
                        <a href="https://www.instagram.com"><InstagramIcon htmlColor="black"></InstagramIcon></a>
                        <a href="https://www.instagram.com"><FacebookIcon htmlColor="black"></FacebookIcon></a>
                        <a href="https://www.instagram.com"><TwitterIcon htmlColor="black"></TwitterIcon></a>
                        <img src={img} style={{width:"100%"}}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs
