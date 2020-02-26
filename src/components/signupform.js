import React from "react"
import styled from "styled-components"
import { useFormik } from "formik"
import * as Yup from "yup"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { TextInput } from "./forms"
import { THEME } from "../data"
import arrow from "../images/sign-up-arrow.png"

const {
  breakpoints: { md },
} = THEME

const SubscribeForm = styled.form`
  margin: 50px 0 0 0;
  width: 100%;
  display: block;
  @media only screen and (min-width: ${md}px) {
    display: flex;
  }
  button {
    background: #ff9e18;
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    border: 0;
    height: 68px;
    letter-spacing: 0.1em;
    position: relative;
    padding: 0 30px;
    width: 100%;
    text-align: left;
    font-family: MontHeavy, sans-serif;
    &:after {
      content: "";
      display: block;
      width: 28px;
      height: 19px;
      background: url(${arrow}) center center no-repeat;
      background-size: 100% 100%;
      position: absolute;
      margin-top: -9.5px;
      top: 50%;
      right: 30px;
    }
    @media only screen and (min-width: ${md}px) {
      width: 200px;
    }
  }
`

const Subscribe = () => {
  const initialValues = { email: "" }
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Your Email is not valid")
        .required("Email is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      addToMailchimp(values.email)
        .then(data => {
          console.log(data)
          setSubmitting(false)
          resetForm(initialValues)
        })
        .catch(err => {
          console.log(err)
          setSubmitting(false)
        })
    },
  })
  return (
    <SubscribeForm onSubmit={formik.handleSubmit}>
      <TextInput
        black
        type="text"
        label="Your email"
        name="email"
        style={{ backgroundColor: "#FFF", flex: 1 }}
        error={formik.errors.email}
        value={formik.values.email}
        dirty={formik.touched.email}
        onChange={formik.handleChange}
        onBlur={() => formik.setFieldTouched("email", true)}
      />
      <button type="submit" disabled={formik.isSubmitting || !formik.isValid}>
        Sign Up
      </button>
    </SubscribeForm>
  )
}

export default Subscribe
