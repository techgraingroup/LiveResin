import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { PageTitle } from "../components/text"
import { TextInput } from "../components/forms"
import { Button } from "../components/button"

const ContactUsPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/contact-us/",
    })
  }, [])
  return (
    <>
      <SEO title="Contact Us" />
      <PageTitle title={`Contact Us`} />
      <Box top="0">
        <Grid>
          <Grid.Unit size={{ md: 1, lg: 3 / 5 }}>
            <form method="GET" action="#">
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                type="email"
                placeholder="Your email"
              />
              <TextInput
                type="textarea"
                label="Message"
                placeholder="Message"
              />
              <Button type="submit" color="#FFF" bgColor="#000">
                Submit
              </Button>
            </form>
          </Grid.Unit>
        </Grid>
      </Box>
    </>
  )
}

export default ContactUsPage
