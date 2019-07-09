import React from "react"
import {Link, graphql} from 'gatsby'
// CSS needs sorting
import Pencil from '../components/Pencil'
import Pen from '../components/Pen'
import Layout from "../components/layout"
// import Img from 'gatsby-image'
// import Image from "../components/image"
import { Image } from "@rebass/emotion"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import SwipeableViews from 'react-swipeable-views';
import PLayers from "../components/Parallax";
import Parallax2 from '../components/Parallax2';


// margin-top: 6em;
const Emoting = styled.h2`
  margin-top: 6em;
  color: black;
 
`
 const Wrapper = styled.div `
  flex-grow: 1;
  /* background-image: url("https://images.unsplash.com/photo-1561419060-1850e1f5f5b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60") */
  `
  

const IndexPage = (props) => (
  <Layout>
    
    <SEO title="Home" />
    <Wrapper>
    <SwipeableViews index={4} enableMouseEvents resistance>
   <div><Emoting>Stop Saying I, Start Saying Goodbye</Emoting></div>
    <Parallax2/>
    <div>
      <Image
      width={[ 1, 1, 1, 1 ]}
      
      src='https://source.unsplash.com/random/1280x720'
      borderRadius={8} />
    </div>
    <div>
      <h3>Love is Not a Moving Target</h3>
    </div>
    <div>
    {/* <Img style={{height:'100%', width:'100%'}}fluid={props.data.file.childImageSharp.fluid}/> */}
    <Image width={[ 4/5, 4/5, 4/5, 4/5 ]} src={props.data.file.childImageSharp.fluid.src}/>
    </div>
    <Pencil index={0}/> 
    <Pen index={0}/>
    <div>
      <p>No Consolation Here For Such an Awkward Heart</p>  
      </div>
      <PLayers/>
    <Pencil index={1} />
    <Pen index={1}/>
    <Pencil index={2}/>

    <Pencil index={3}/>
    <Pen index={2}/>
    <Pen index={3}/>
    <div><Link to="/page-2">Bye</Link></div>
    </SwipeableViews>
    </Wrapper>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
 
  </Layout>
)

export default IndexPage

export const data = (graphql`
query {
file(relativePath: {eq: "01.jpg"}) {
  childImageSharp {
    fluid(maxHeight: 500, maxWidth: 500) {
      src
      presentationHeight
      presentationWidth
    }
  }
}
}
`)