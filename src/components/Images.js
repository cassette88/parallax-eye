import React from 'react'
// import {graphql, useStaticQuery} from 'gatsby'
import { Image } from "@rebass/emotion"
import zero from '../images/01.jpg'



const Images = () => {
//    const data = useStaticQuery(graphql`
//         query {
//         file(relativePath: {eq: "01.jpg"}) {
//           childImageSharp {
//             fluid {
//               src
//             }
//           }
//         }
//       }
//         `)
      return(
          <div>
         
          <Image src={zero}/>
          </div>
      )
    }
    

export default Images