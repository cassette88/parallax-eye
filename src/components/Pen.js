import React from 'react'
import styled from "@emotion/styled"
import Lead from './Lead'

const Ink = styled.h2`
 margin-top: 4em;
 color: black
`

Pen.defaultProps = {
    words: ['I = thou', 
            'Hurry up, You Don\'t Matter',
            'Never Confuse Loneliness With Emptiness',
            'Woe Unto Yourself, Ye Double Minded',
            'Order Dinner Like It\'s A Confession',
            'I Put a Ship In a Bottle and Let It Sail In Place',
            'Destroy Romance - if love had a chance, It was taken away the moment you say start saying I',
            'We are wise beyond our fears',

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

