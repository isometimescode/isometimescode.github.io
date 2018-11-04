import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Segment, Header } from 'semantic-ui-react'

const NotFoundPage = () => (
  <Layout>
    <Segment padded="very">
      <Header content="404 Not Found" />
      <p>Sorry, that page does not exist.</p>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Segment>
  </Layout>
)

export default NotFoundPage
