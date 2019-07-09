import React, {Component} from "react"
import styled from "@emotion/styled"
import Lead from './Lead'
// import Img from 'gatsby-image'
// import Images from './Images'



const Emoting = styled.h2`
  margin-top: 6em;
  color: black;
`

export default class Pencil extends Component {

  static defaultProps = {
    words: ['None of us Stand A Chance Here', 
            'I Can\'t Move Until I Moved My Mind',
            'As Soon As I Start to Listen - You\'ll Say You Feel Like You\'ve Known Me Forever',
            'Not Transcendence; being',
            'My world, you\'re a thing which can\'t speak for itself',
            'Semantics are the enemy of understanding',
            'The subtle power of subversion is diffusion',
            'The thing about people is this: The best time to call is for no reason at all'
  
          ]
  }

  // constructor(props){
  //   super(props);
  // }

render(){
  return (
    <div>
 



      {/* <Img src={this.props.image}/> */}
         <Emoting>
<Lead phrase={this.props.words[this.props.index]}> </Lead>
          </Emoting>
          
          </div>
  ) 
  }  
}
