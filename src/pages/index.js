import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import SwipeableViews from 'react-swipeable-views';
import { Parallax, ParallaxLayer} from 'react-spring/renderprops-addons.cjs'

const Emoting = styled.h2`
  color: green;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SwipeableViews enableMouseEvents resistance>
   <div><Emoting>Emotions?</Emoting></div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <h3>A Little Bit more to help the transition</h3>
    </div>
    <div>
      <Parallax pages={2}>
      <ParallaxLayer offset={0}speed={0.5}> 
      <Emoting>Again in the green</Emoting>
      </ParallaxLayer>
      </Parallax>
    </div>
    </SwipeableViews>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
