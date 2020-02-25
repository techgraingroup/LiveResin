import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { fluidRange } from "polished"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { H2, Text } from "../components/text"
import { PageTitle } from "../components/text"
import { PlusMin } from "../components/icons"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
} = THEME

const FaqItem = styled(({ data, active, className, onClick, ...rest }) => {
  const eleClass = `${className} ${active && "active"}`
  return (
    <div {...rest} className={eleClass}>
      <h2>
        <button onClick={onClick}>
          <span>{`Q. ${data.q}`}</span>
          <PlusMin isPlus={!active} />
        </button>
      </h2>
      <div className={active ? "active text-wrap" : "text-wrap"}>
        <Text>{data.a}</Text>
      </div>
    </div>
  )
})`
  margin-bottom: 30px;
  @media only screen and (min-width: ${md}px) {
    margin-bottom: 0px;
  }
  h2 {
    font-family: MontHeavy, sans-serif;
    border-bottom: 4px solid #000;
    position: relative;
    margin-top: 0;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "30px",
        toSize: "48px",
      },
      `${md}px`,
      `${xl}px`
    )}
    padding-bottom: 0;
    @media only screen and (min-width: ${md}px) {
      padding-top: 0;
      padding-bottom: 60px;
      margin-bottom: 54px;
    }
    button {
      border: 0;
      outline: none;
      background: transparent;
      text-align: left;
      display: block;
      width: 100%;
      color: #000;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
      span {
        display: block;
        width: calc(100% - 27px);
        flex: 1;
      }
      svg {
        display: block;
        width: 27px;
      }
    }
  }
  .text-wrap {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    &::after {
      content: "";
      width: 100%;
      height: 60px;
      display: block;
    }
  }
  &.active {
    .text-wrap {
      max-height: 100rem;
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
    dispatch({ type: "mobileMenu", value: false })
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
        top="200"
        bottom="140"
        mobileTop="72"
        mobileBottom="60"
        title={`FAQs`}
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
