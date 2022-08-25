import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

//import Header from '../components/header'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import GtagBanner from '../components/gtagBanner'
import './layout.css'

const Base = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
				<NavBar siteTitle={data.site.siteMetadata.title}/>

				{/*<Header siteTitle={data.site.siteMetadata.title}/>*/}
        <div style={{ margin: '0 auto', paddingTop: 0, }}>
          {children}
        </div>
				<GtagBanner/>				
				<Footer/>
      </>
    )}
  />
)

Base.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Base
