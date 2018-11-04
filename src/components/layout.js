import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Segment } from 'semantic-ui-react'
import SEO from '../components/seo'

import 'semantic-ui-css/semantic.min.css'
import './layout.css'

const Layout = ({ children, title, jsonld }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        background: file(relativePath: { eq: "background-img.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Img
          fluid={data.background.childImageSharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <SEO title={title} jsonld={jsonld} />
        <Grid textAlign="center" verticalAlign="middle" className="fullpage">
          <Grid.Column>
            <Segment.Group>{children}</Segment.Group>
          </Grid.Column>
        </Grid>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  jsonld: PropTypes.bool,
}

Layout.defaultProps = {
  jsonld: false,
}

export default Layout
