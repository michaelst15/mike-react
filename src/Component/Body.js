import React from "react";
import dbJS from "./db";
import '../App.css';
import {AiFillFacebook, AiFillStar, AiOutlineYoutube} from 'react-icons/ai';
import {FaRegShareSquare} from 'react-icons/fa';
import {BsFillPlayFill, BsInstagram, BsTwitter} from 'react-icons/bs';
import { Card, Container, Col, Row } from 'react-bootstrap';
import Icon from "./Img/icon.png";

const Body = () => {

    return(
        <div className="bg-black" style={{marginTop: '-20px', height: '100%'}}>
           <div className="flex">
             <img src={Icon} className="w-2/4 mt-3"/>
             <article className="w-full text-white mt-20">
                <h1 className="m-center font-thin text-2xl">Mortal Combat Movie Collection</h1>
                <p className="mt-6 w-4/5 font-serif" style={{marginLeft: '70px'}}>The attraction of Mortal Kombat that was different from other 
                   arcade games of that time was the setting of the world in the game and the story of each character. 
                   Players' interest in character biographies during the trial period made the game Mortal Kombat initially focus on the 
                   storyline and background plot of the characters.
                </p>
                <button className="bg-violet-700 w-1/6 rounded-lg font-mono mt-6">Lets Read</button>
             </article>
           </div>
           <hr className="mt-6 w-10"/>
           <section className="text-left mx-6">
             <h2 className="mt-12 mx-10 text-amber-400 text-2xl mb-4">Collection</h2>
           </section>
           <Container>
           <Row md="3">
           {dbJS.map(data => {
            return(
               <Col md={3}>
                  <Card className="bg-dark w-60 mb-4">
                  <img src={data.img} className="h-60" style={{borderTopLeftRadius: '8px', borderTopRightRadius: '8px', width: '100%'}}/>
                  <AiFillStar style={{color: 'yellow', marginLeft: '20px', marginTop: '15px'}}/>
                  <label className="text-white" style={{marginTop: '-20px', marginRight: '120px'}}>{data.rate}</label>
                  <h3 className="text-white mt-6 mb-4" style={{fontWeight: 400, fontSize: '13px'}}>{data.title}</h3>
                  <button className="watch flex bg-gray-600 text-white w-40" style={{marginLeft: '40px', borderRadius: '5px', marginBottom: '10px', fontWeight: 200, height: '30px'}}>
                     <BsFillPlayFill style={{marginTop: '6px', marginLeft: '25px'}}/>
                     <label style={{marginLeft: '8px', marginTop: '1px'}}>Watch Serial</label>
                  </button>
                  </Card>
               </Col>
            )})}
            </Row>
            </Container>
               <div style={{color: 'white', marginLeft: '550px', marginTop: '90px', marginBottom: '300px'}}>
                  <Row>
                     <Col md={1}>
                     <AiFillFacebook/>
                     </Col>
                     <Col md={1}>
                     <BsInstagram/>
                     </Col>
                     <Col md={1}>
                     <AiOutlineYoutube/>
                     </Col>
                     <Col md={1}>
                     <BsTwitter/>
                     </Col>
                  </Row>
               </div>
               <Container className="footer flex" style={{color: 'white', marginTop: '-200px', marginBottom: '60px', marginLeft: '350px'}}> 
                <Row md={3}>
                  <label className="get flex mb-3">Get my App<FaRegShareSquare className="mt-1 mx-2"/></label>
                  <label className="info flex">Info App<FaRegShareSquare className="mt-1 mx-2"/></label>
                  <label className="dev flex">Developer<FaRegShareSquare className="mt-1 mx-2"/></label>
                  <label className="sec flex">Security<FaRegShareSquare className="mt-1 mx-2"/></label>
                  <label className="other flex">Other<FaRegShareSquare className="mt-1 mx-2"/></label>
                  <label className="adds flex">Adds<FaRegShareSquare className="mt-1 mx-2"/></label>
                </Row>
               </Container>
               <label style={{color: 'white', marginBottom: '40px', marginLeft: '20px', fontWeight: 200, fontSize: '11px'}}>&#169;Copyright 2022 MortalCombat The Movie</label>
        </div>
    )
}

export default Body;
