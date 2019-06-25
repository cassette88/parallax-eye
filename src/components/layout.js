/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
     <> 
      <div
         className ="site" style={{
          display: `flex`,
          minHeight: `100vh`,
          flexDirection: `column`,
          alignItems: `stretch`,
          // margin: `0 auto`,
          zIndex: `-1`,
          // maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          textAlign: `center`,
          
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>


        <footer
          style={{
           marginTop: `auto`,
            flexShrink: `0`
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
