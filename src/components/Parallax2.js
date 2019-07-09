import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import cloudy from '../images/cloud.svg';
// import realHeart from './images/real_heart.png';
// import consolation from './images/consolation.png';
import './parallax.css'


export default function Parallax2() {
    return (
        <Parallax pages={1} >
        <ParallaxLayer className="layer0" offset={0}speed={0.5}factor={1} > 
        {/* <ParallaxLayer className="x1" factor={.2}>
        <ParallaxLayer className="cloud" factor={.2}></ParallaxLayer></ParallaxLayer> */}
        
        <ParallaxLayer className="x2" offset={0.2} speed={-3}> <img src={cloudy} alt="cloud" style={{marginLeft: '-3em'}}></img></ParallaxLayer>
      <ParallaxLayer className="x1" offset={0.4}speed={3}> <img src={cloudy} alt="cloud" style={{marginLeft: '-20em'}}></img></ParallaxLayer>
      <span onClick={() => this.parallax.scrollTo(.9)}><h2 className="words" style={{marginTop: '-15%'}}>The mundane is a miracle</h2></span>
      <ParallaxLayer className="x1" offset={0.6}speed={5}> <img src={cloudy} alt="cloud" style={{marginLeft: '-10em'}}></img></ParallaxLayer> 
      <ParallaxLayer className="x2" offset={0.1}speed={-2}> <img src={cloudy} alt="cloud" style={{marginLeft: '-22em'}}></img></ParallaxLayer>
      <ParallaxLayer className="cover" offset={0.7}speed={10}> <img className="cover"src={cloudy} alt="cloud" style={{marginLeft: '-2em'}}></img></ParallaxLayer>    
        </ParallaxLayer>
        </Parallax>
    )
}
