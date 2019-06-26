import React from "react"
import {Link} from "gatsby"
// CSS needs sorting
import Pencil from '../components/Pencil'
import Pen from '../components/Pen'
import Layout from "../components/layout"

// import Image from "../components/image"
import { Image } from "@rebass/emotion"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import SwipeableViews from 'react-swipeable-views';
import PLayers from "../components/Parallax";


// margin-top: 6em;
const Emoting = styled.h2`
  margin-top: 6em;
  color: black;
 
`
 const Wrapper = styled.div `
  flex-grow: 1;
 `

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
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
   
     
    <Pencil index={0}/> 
    <Pen index={0}/>
    <div>
      <p>No Consolation Here For Such an Awkward Heart</p>  
      </div>
      <PLayers/>
    <Pencil index={1}/>
    <Pen index={1}/>
    <Pencil index={2}/>

    <Pencil index={3}/>
    <Pen index={2}/>
    <Pen index={3}/>
    <div><Link to="/page-2">Bye</Link></div>
    </SwipeableViews>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Wrapper>
  </Layout>
)

export default IndexPage
