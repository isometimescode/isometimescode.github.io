import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/pagetitle'
import { Segment, Form, Message } from 'semantic-ui-react'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

class ContactPage extends React.Component {
  state = { fullname: false, email: false, message: false, form: false }

  updateError = (name, value) => {
    const hasError = value ? false : true
    this.setState({ [name]: hasError })
    return hasError
  }

  handleChange = (e, { name, value }) => {
    this.updateError(name, value)
  }

  handleSubmit = e => {
    let formError = false

    for (var name in this.state) {
      if (!e.target[name]) {
        continue
      }

      let fieldError = this.updateError(name, e.target[name].value)
      formError = formError || fieldError
    }

    if (formError) {
      this.setState({ form: true })
      e.preventDefault()
    }
  }

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  }

  render() {
    const { ...errors } = this.state

    return (
      <Layout title="Contact Form">
        <Segment padded>
          <PageTitle />
        </Segment>
        <Segment padded>
          <Form
            size="large"
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="robots"
            data-netlify-recaptcha="true"
            error={errors.form}
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Message error content="All fields are required." />
            <Form.Group widths="equal">
              <Form.Input
                name="fullname"
                aria-label="fullname"
                placeholder="Ellen Ripley"
                icon="user"
                onChange={this.handleChange}
                error={errors.fullname}
              />
              <Form.Input
                name="email"
                aria-label="email"
                placeholder="ripley@weyland-yutani.com"
                icon="envelope"
                onChange={this.handleChange}
                error={errors.email}
              />
            </Form.Group>
            <Form.TextArea
              name="message"
              aria-label="message"
              rows="10"
              placeholder="We have several thrilling new opportunities on-board the USCSS Nostromo..."
              onChange={this.handleChange}
              error={errors.message}
            />
            <Form.Input name="robots" className="hidden" />
            <Form.Field>
              <Recaptcha
                ref="recaptcha"
                sitekey={RECAPTCHA_KEY}
                onChange={this.handleRecaptcha}
                size="compact"
              />
            </Form.Field>
            <Form.Button
              fluid
              primary
              size="large"
              type="submit"
              content="Send Your Message"
            />
          </Form>
        </Segment>
      </Layout>
    )
  }
}

export default ContactPage
