import React from "react"
import styled from "@emotion/styled"
import Lead from './Lead'


const Emoting = styled.h2`
  margin-top: 6em;
  color: black;
`

const Pencil = (props) => (

        <div>
        
         
            <Emoting>
          <Lead phrase={props.words[props.index]}> </Lead>
          </Emoting>
          
          </div>
     
      )

      Pencil.defaultProps = {
        words: ['None of us Stand A Chance Here', 
                'I Can\'t Move Until I Moved My Mind',
                'There is No Box to Think Outside of',
                'Not Transcendence; being',

              ]
      }

export default Pencil