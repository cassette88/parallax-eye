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
            'There is No Box to Think Outside of',
            'Not Transcendence; being',
  
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
