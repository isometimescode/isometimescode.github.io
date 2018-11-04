import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const getPageName = (fullname, title) => {
  return title ? fullname + ' (' + title + ')' : fullname
}

const getTitle = (data, title) => {
  let v = Object.values(data.site.siteMetadata)
  v[0] = getPageName(v[0], title)
  return v.join(' : ')
}

const getDescription = (data, title) => {
  return (
    getPageName(data.site.siteMetadata.fullname, title) +
    ': ' +
    data.site.siteMetadata.description
  )
}

const getJSONSchema = data => {
  let schema = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    url: data.site.siteMetadata.siteurl,
    name: data.site.siteMetadata.fullname,
    jobTitle: 'Freelance Full-Stack Engineer',
    address: 'Seattle, WA, US',
    workLocation: ['US', 'CA'],
    sameAs: [
      'https://github.com/isometimescode',
      'https://www.linkedin.com/in/tmwells/',
      'https://stackoverflow.com/story/tmwells',
    ],
  }
  return JSON.stringify(schema)
}

const SEO = ({ title, jsonld }) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            fullname
            description
            sitename
            siteurl
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <html lang="en" />
        <title>{getTitle(data, title)}</title>
        <meta name="description" content={getDescription(data, title)} />
        <script type="application/ld+json">
          {jsonld ? getJSONSchema(data) : ''}
        </script>
      </Helmet>
    )}
  />
)

SEO.propTypes = {
  title: PropTypes.string,
  jsonld: PropTypes.bool,
}

export default SEO
