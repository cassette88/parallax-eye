import React from "react"

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
// const Wrapper = styled.div `
//  display: flex;
//  justify-content: center;
// `

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <SwipeableViews enableMouseEvents resistance>
   <div><Emoting>Stop Saying I, Start Saying Goodbye</Emoting></div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image
      width={[ 1, 1, 1/2 ]}
      src='https://source.unsplash.com/random/1280x720'
      borderRadius={8} />
    </div>
    <div>
      <h3>Love is Not a Moving Target</h3>
    </div>
    <div>
      <Parallax pages={2}>
      <ParallaxLayer offset={0}speed={0.5}> 
      <Emoting>Compassion Fatigue</Emoting>
      </ParallaxLayer>
      </Parallax>
    </div>
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
