import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { H2, Text } from "../components/text"
import { PageTitle } from "../components/text"

const FaqItem = styled(({ data, active, className, onClick, ...rest }) => {
  const eleClass = `${className} ${active && "active"}`
  return (
    <div {...rest} className={eleClass}>
      <H2>
        <button onClick={onClick}>{`Q.${data.q}`}</button>
      </H2>
      {active && <Text>{data.a}</Text>}
    </div>
  )
})`
  h2 {
    font-family: MontHeavy, sans-serif;
    padding-bottom: 30px;
    border-bottom: 4px solid #000;
    position: relative;
    &::after {
      content: "+";
      position: absolute;
      right: 0;
      font-family: Mont, sans-serif;
    }
    button {
      border: 0;
      outline: none;
      background: transparent;
      text-align: left;
      display: inline-block;
      color: #000;
      text-decoration: none;
      width: calc(100% - 60px);
    }
  }
  &.active {
    padding-bottom: 60px;
    h2 {
      &::after {
        content: "-";
      }
    }
  }
`

const FaqPage = () => {
  const [active, setActive] = useState(null)
  const { dispatch } = useContext(AppContext)
  const {
    dataJson: { faqs },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        faqs {
          q
          a
        }
      }
    }
  `)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/faq/",
    })
  }, [])
  const handleActive = i => {
    if (active === i) {
      setActive(null)
    } else {
      setActive(i)
    }
  }
  return (
    <>
      <SEO title="FAQ" />
      <PageTitle
        title={`FAQs`}
        text={`Donec eget imperdiet dui. Mauris lorem lacus, porttitor quis vehicula vitae, pretium non purus. Morbi nec rhoncus massa`}
      />
      <Box top="0">
        {faqs.map((faq, i) => (
          <FaqItem
            active={i === active}
            key={`item-${i}`}
            data={faq}
            onClick={() => handleActive(i)}
          />
        ))}
      </Box>
    </>
  )
}
export default FaqPage
