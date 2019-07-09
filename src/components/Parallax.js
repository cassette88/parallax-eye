import React from 'react'
import { Parallax, ParallaxLayer} from 'react-spring/renderprops-addons.cjs'
import styled from "@emotion/styled"
import { Image } from "@rebass/emotion"
import {graphql, useStaticQuery} from "gatsby"

const Emoting = styled.h2`
  margin-top: 6em;
  color: black;
 
`
const FadeOut = styled.p`
   margin-top:8em;
   color: pink;
`
export default function PLayers() {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "claudio-schwarz-purzlbaum-CEZ1zKjfXh4-unsplash.jpg"}) {
       childImageSharp {
         fluid {
           src
         }
       }
     }
   }
  `)

    return (
        <Parallax style={{color:`gray`}}pages={2}>
        <ParallaxLayer offset={0}speed={0.5} factor={1}> 
        <Emoting>Compassion Fatigue</Emoting>
        <FadeOut>scroll down</FadeOut>
        </ParallaxLayer>
        <ParallaxLayer offset={.9} speed={1} factor={1}>
        <Image
        width={[ 1, 1, 1, 1 ]}
        src={data.file.childImageSharp.fluid.src}
        // src='https://source.unsplash.com/random/1280x720'
        borderRadius={8} />
       </ParallaxLayer>
       <ParallaxLayer offset={1.2}speed={1}factor={1}>
         <Emoting>There is No Box To Think Outside Of</Emoting>
       </ParallaxLayer>
        </Parallax>
    )
}
