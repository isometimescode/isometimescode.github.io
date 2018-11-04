import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/pagetitle'
import { Segment, Header, Icon } from 'semantic-ui-react'

const SuccessPage = () => (
  <Layout>
    <Segment padded="very">
      <PageTitle />
    </Segment>
    <Segment padded="very">
      <Header icon>
        <Icon name="thumbs up" circular color="green" inverted />
        Your message has been sent!
      </Header>
    </Segment>
  </Layout>
)

export default SuccessPage
