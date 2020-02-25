import React, { useEffect, useContext } from "react"
import Grid from "styled-components-grid"
import { useFormik } from "formik"
import * as Yup from "yup"
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
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  const initialValues = {
    _replyto: "",
    yourName: "",
    yourMessage: "",
  }
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      _replyto: Yup.string()
        .email("Your Email - Must be a valid email address")
        .required("Email is required"),
      yourName: Yup.string().required("Name is required"),
      yourMessage: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      const target = process.env.FORMSPREE_URL
      const data = new FormData()
      const xhr = new XMLHttpRequest()
      for (let key in values) {
        data.append(key, values[key])
      }
      xhr.open("POST", target)
      xhr.setRequestHeader("Accept", "application/json")
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status === 200) {
          setSubmitting(false)
          resetForm(initialValues)
        } else {
          setSubmitting(false)
        }
      }
      xhr.send(data)
    },
  })
  return (
    <>
      <SEO title="Contact Us" />
      <PageTitle bottom="60" title={`Contact Us`} />
      <Box top="0">
        <Grid>
          <Grid.Unit size={{ md: 1, lg: 3 / 5 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextInput
                name="yourName"
                label="Your name"
                placeholder="Your name"
                error={formik.errors.yourName}
                value={formik.values.yourName}
                dirty={formik.touched.yourName}
                onBlur={() => formik.setFieldTouched("yourName", true)}
                onChange={formik.handleChange}
              />
              <TextInput
                name="_replyto"
                label="Your email"
                type="email"
                placeholder="Your email"
                error={formik.errors._replyto}
                value={formik.values._replyto}
                dirty={formik.touched._replyto}
                onBlur={() => formik.setFieldTouched("_replyto", true)}
                onChange={formik.handleChange}
              />
              <TextInput
                name="yourMessage"
                type="textarea"
                label="Message"
                placeholder="Message"
                error={formik.errors.yourMessage}
                value={formik.values.yourMessage}
                dirty={formik.touched.yourMessage}
                onBlur={() => formik.setFieldTouched("yourMessage", true)}
                onChange={formik.handleChange}
              />
              <Button
                type="submit"
                color="#FFF"
                bgColor="#000"
                disabled={formik.isSubmitting || !formik.isValid}>
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Grid.Unit>
        </Grid>
      </Box>
    </>
  )
}

export default ContactUsPage
