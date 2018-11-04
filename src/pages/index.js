import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/pagetitle'
import LinkButton from '../components/linkbutton'
import { Segment, Button } from 'semantic-ui-react'

const IndexPage = () => (
  <Layout title="Home" jsonld>
    <Segment padded="very">
      <PageTitle />
      <p>
        Available for contract, remote projects in the US.
        <br />
        Seeking opportunities in consulting, software engineering and devops,
        full-stack web development, technical writing, mentoring, technical
        hiring and more.
      </p>
    </Segment>
    <Segment padded="very">
      <Button.Group size="large" widths="3">
        <LinkButton
          basic
          color="green"
          icon="envelope outline"
          label="email me"
          to="/contact"
        />
        <LinkButton
          basic
          color="blue"
          icon="github"
          label="github profile"
          to="https://github.com/isometimescode"
        />
        <LinkButton
          basic
          color="yellow"
          icon="linkedin"
          label="linkedin profile"
          to="https://www.linkedin.com/in/tmwells/"
        />
      </Button.Group>
    </Segment>
  </Layout>
)

export default IndexPage
