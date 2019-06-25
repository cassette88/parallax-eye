import React from "react"
// CSS needs sorting
import Phrases from '../components/Phrases'
import Layout from "../components/layout"
// import Image from "../components/image"
import { Image } from "@rebass/emotion"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import SwipeableViews from 'react-swipeable-views';
import { Parallax, ParallaxLayer} from 'react-spring/renderprops-addons.cjs'

const Emoting = styled.h2`
  margin-top: 6em;
  color: black;
`
//  const Wrapper = styled.div `
//   height
//  `

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <SwipeableViews enableMouseEvents resistance>
   <div><Emoting>Stop Saying I, Start Saying Goodbye</Emoting></div>
    <div>
      <Image
      width={[ 1, 1, 1, 1 ]}
      
      src='https://source.unsplash.com/random/1280x720'
      borderRadius={8} />
    </div>
    <div>
      <h3>Love is Not a Moving Target</h3>
    </div>
    
      <Parallax pages={2}>
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
    
    <div>
    <Phrases/>
    </div>
    <div>
      <p>No Consolation Here For Such an Awkward Heart</p>  
      </div>
    </SwipeableViews>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    
  </Layout>
)

export default IndexPage
