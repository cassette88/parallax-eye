import React from 'react'
import { Parallax, ParallaxLayer} from 'react-spring/renderprops-addons.cjs'
import styled from "@emotion/styled"
import { Image } from "@rebass/emotion"
const Emoting = styled.h2`
  margin-top: 6em;
  color: black;
 
`

export default function PLayers() {
    return (
        <Parallax style={{color:`gray`}}pages={3}>
        <ParallaxLayer offset={0}speed={0.5} factor={1}> 
        <Emoting>Compassion Fatigue</Emoting>
        </ParallaxLayer>
        <ParallaxLayer offset={.9} speed={1} factor={1}>
        <Image
        width={[ 1, 1, 1, 1 ]}
        src='https://source.unsplash.com/random/1280x720'
        borderRadius={8} />
       </ParallaxLayer>
       <ParallaxLayer offset={1.2}speed={1}factor={1}>
         <Emoting>There is No Box To Think Outside Of</Emoting>
       </ParallaxLayer>
        </Parallax>
    )
}
