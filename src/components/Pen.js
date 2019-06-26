import React from 'react'
import styled from "@emotion/styled"
import Lead from './Lead'

const Ink = styled.h2`
 margin-top: 4em;
 color: #2F4F4F;
`

Pen.defaultProps = {
    words: ['I = thou', 
            'Hurry up, You Don\'t Matter',
            'Never Confuse Loneliness With Emptiness',
            'Woe Unto Yourself, Ye Double Minded',

          ]
  }

export default function Pen(props) {
    return (
        <div>
         <Ink>
         <Lead phrase={props.words[props.index]}></Lead>
        </Ink>   
        </div>
    )
}

