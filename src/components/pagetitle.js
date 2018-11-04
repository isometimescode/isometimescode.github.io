import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import { Header } from 'semantic-ui-react'

const PageTitle = () => (
  <StaticQuery
    query={graphql`
      query PageTitleQuery {
        site {
          siteMetadata {
            fullname
            description
            sitename
          }
        }
      }
    `}
    render={data => (
      <Header size="huge">
        <Link to="/" aria-label="home">
          {data.site.siteMetadata.fullname}
        </Link>
      </Header>
    )}
  />
)

export default PageTitle
