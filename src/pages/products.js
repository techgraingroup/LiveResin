import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { fluidRange } from "polished"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Collab } from "../components/icons"
import FindNearYou from "../components/findnearyou"
import { SquareBox, Box } from "../components/box"
import { H4, Text, BlockTitle, BlockTitleHorz, Quote } from "../components/text"
import { Button } from "../components/button"
import { THEME } from "../data"

const halfSize = {
  sm: 1 / 1,
  md: 1 / 2,
}

const {
  breakpoints: { sm, md, xl },
} = THEME

const ProductTitle = styled(({ onClick, children, ...rest }) => (
  <h3 {...rest}>
    <a href="#" onClick={onClick}>
      {children}
    </a>
  </h3>
))`
  margin: 0 0 30px 0;
  border-bottom: 4px solid ${props => props.color || "#000"};
  position: relative;
  a {
    line-height: 96%;
    font-family: MontHeavy, sans-serif;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "30px",
        toSize: "66px",
      },
      `${md}px`,
      `${xl}px`
    )}
    padding-bottom: 30px;
    letter-spacing: -0.04em;
    display: block;
    color: ${props => props.color || "#000"};
    text-decoration: none;
    .goldseal-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @media only screen and (min-width: ${md}px) {
        justify-content: center;
      }
    }
  }
  &::after {
    content: "-";
    color: ${props => props.color || "#000"};
    position: absolute;
    top: 0;
    right: 0;
    font-family: Mont, sans-serif;
    line-height: 96%;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "30px",
        toSize: "66px",
      },
      `${md}px`,
      `${xl}px`
    )}
  }
  &.compact {
    &::after {
      content: "+";
    }
    border-bottom: 0;
    margin: 0;
    a {
      padding-bottom: 0;
    }
  }
`

const Description = styled.p`
  font-size: 24px;
  line-height: 135%;
  color: ${props => props.color || "#000"};
  border-bottom: 4px solid ${props => props.color || "#000"};
  padding-bottom: 56px;
  margin-bottom: 0;
`

const ColumnTitle = styled.h4`
  text-transform: uppercase;
  color: ${props => props.color || "#000"};
  border-bottom: 4px solid ${props => props.color || "#000"};
  font-size: 24px;
  font-family: MontHeavy, sans-serif;
  line-height: 100%;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 16px;
  box-sizing: border-box;
`

const ColumnContent = styled.div`
  margin-bottom: 30px;
  @media only screen and (min-width: ${md}px) {
    ${props => props.left && "margin-right: 15px;"}
    ${props => props.right && "margin-left: 15px;"}
  }
`

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  tr {
    td {
      width: 50%;
      color: ${props => props.color || "#000"};
      border: 0.5px solid ${props => props.color || "#000"};
      line-height: 60px;
      margin: 0;
      &.left {
        padding-right: 20px;
        .label {
          width: 80px;
        }
      }
      &.right {
        padding-left: 20px;
        .label {
          width: 120px;
        }
      }
      .label {
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
      }
      &:first-child {
        border-left: 0;
      }
      &:last-child {
        border-right: 0;
      }
    }
    &:first-child {
      td {
        border-top: 0;
      }
    }
    &:last-child {
      td {
        border-bottom: 1px solid ${props => props.color || "#000"};
      }
    }
  }
`

const ChartItem = styled(({ color, name, value, ...rest }) => (
  <li {...rest}>
    <span className="label">{name}</span>
    <span className="chart">
      <span className="value">{value}%</span>
    </span>
  </li>
))`
  color: ${props => props.color || "#000"};
  margin-bottom: 20px;
  .label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    text-transform: uppercase;
  }
  .chart {
    display: block;
    position: relative;
    width: 90%;
    .value {
      padding-left: 5px;
      position: absolute;
      bottom: -5px;
      left: ${props =>
        props.value ? `${20 * parseFloat(props.value)}%` : "0"};
    }
    &::after {
      content: "";
      height: 15px;
      display: block;
      background-color: ${props => props.color || "#000"};
      width: ${props =>
        props.value ? `${20 * parseFloat(props.value)}%` : "100%"};
    }
  }
`

const ChartList = styled(({ color, value, children, ...rest }) => (
  <ul {...rest}>{children}</ul>
))`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`

const ImageBox = styled(({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
))`
  height: auto;
  padding-top: 100%;
  padding-bottom: 0;
  @media only screen and (min-width: ${md}px) {
    height: 720px;
    padding-top: 0;
  }
`

const ProductItem = styled(({ showContent, onClick, product }) => (
  <>
    <Box top={40} bottom={40} bgColor={product.bgColor}>
      <ProductTitle
        onClick={onClick}
        color={product.color}
        className={showContent ? "" : "compact"}>
        {product.goldSeal ? (
          <Grid>
            <Grid.Unit size={{ sm: 1, md: 1 / 2 }}>{product.name}</Grid.Unit>
            <Grid.Unit size={{ sm: 1, md: 1 / 2 }} className="goldseal-wrap">
              <div style={{ position: "relative", top: "-10px" }}>
                <Collab right="0" />
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: 18,
                    marginRight: 60,
                    fontFamily: "Mont, sans-serif",
                    letterSpacing: "0.1rem",
                    fontSize: "24px",
                    lineHeight: "32px",
                  }}>
                  GOLD SEAL SF
                </span>
              </div>
            </Grid.Unit>
          </Grid>
        ) : (
          product.name
        )}
      </ProductTitle>
      {showContent && (
        <>
          <Description color={product.color}>{product.description}</Description>
          <Grid>
            <Grid.Unit size={{ xs: 1, sm: 1, md: 1 / 2 }}>
              <ColumnContent left>
                <ColumnTitle color={product.color}>Detail</ColumnTitle>
                <Table color={product.color}>
                  <tbody>
                    <tr>
                      <td className="left" colSpan={2}>
                        <span className="label">Form</span>
                        <span className="value">{product.details.form}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="left">
                        <span className="label">THC %</span>{" "}
                        <span className="value">{product.details.thc}</span>
                      </td>
                      <td className="right">
                        <span className="label">THC / GRAM</span>{" "}
                        <span className="value">{product.details.thcpg}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="left">
                        <span className="label">CBD %</span>{" "}
                        <span className="value">{product.details.cbd}</span>
                      </td>
                      <td className="right">
                        <span className="label">CBD / GRAM</span>{" "}
                        <span className="value">{product.details.cbdpg}</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </ColumnContent>
            </Grid.Unit>
            <Grid.Unit size={{ xs: 1, sm: 1, md: 1 / 2 }}>
              <ColumnContent right>
                <ColumnTitle color={product.color}>Terpene Profile</ColumnTitle>
                <ChartList color={product.color}>
                  {product.terpeneProfile.map(item => (
                    <ChartItem
                      key={`item-${item.name}`}
                      color={product.color}
                      name={item.name}
                      value={item.value}
                    />
                  ))}
                </ChartList>
              </ColumnContent>
            </Grid.Unit>
          </Grid>
          <Button color={product.bgColor} bgColor={product.color}>
            Where to Find It
          </Button>
          <div style={{ marginTop: 35 }}>
            <small style={{ color: product.color }}>
              Percentages above are representative. Refer to purchase label for
              the exact profile.
            </small>
          </div>
        </>
      )}
    </Box>
    {showContent && (
      <>
        <ImageBox bgImage={product.images[0]} />
        <ImageBox bgImage={product.images[1]} />
      </>
    )}
  </>
))`
  .column {
    &.left {
      margin-right: 15px;
    }
    &.right {
      margin-left: 15px;
    }
  }
`

const ProductsPage = () => {
  const [active, setActive] = useState("")
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/products/",
    })
  }, [])
  const {
    dataJson: { product },
    leaves,
    banner,
  } = useStaticQuery(graphql`
    query {
      dataJson {
        product {
          name
          goldSeal
          bgColor
          color
          description
          link
          details {
            form
            thc
            thcpg
            cbd
            cbdpg
          }
          terpeneProfile {
            name
            value
          }
          images {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      banner: file(relativePath: { eq: "product-banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      leaves: file(relativePath: { eq: "leaves.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const setActiveProduct = (e, i) => {
    e.preventDefault()
    if (i === active) {
      setActive("")
    } else {
      setActive(i)
    }
  }
  return (
    <>
      <SEO title="Products" />
      <Box left="0" right="0" bgImage={banner}>
        <Box
          bgColor="#BBA135"
          top={45}
          bottom={45}
          left={133}
          right={133}
          style={{ width: "50%", boxSizing: "border-box" }}>
          <h3 style={{ fontSize: 24, fontFamily: "MontHeavy, sans-serif" }}>
            Latest Release
          </h3>
          <BlockTitle fontSize="66px" line="top">{`Red\nCongolese`}</BlockTitle>
          <div style={{ borderBottom: '1px solid #000', paddingBottom: 30, marginBottom: 30 }}>
            <Collab right="0" />
            <span
              style={{
                display: "inline-block",
                marginLeft: 18,
                marginRight: 60,
              }}>
              GOLD SEAL SF
            </span>
          </div>
          <p style={{ color: "#000", marginBottom: 50 }}>
            This special collaboration showcases Gold Seal’s signature Red
            Congolese, a 12+ week flowering Sativa that we believe is truly
            special.
          </p>
          <Button borderColor="#000" bgColor="#BBA135" color="#000">
            Learn More
          </Button>
        </Box>
      </Box>
      <Box>
        <BlockTitleHorz
          title="Current Releases"
          description="Our current lineup won’t be our lineup forever. We’re always looking for new collaborations and the freshest flower. Here’s what we have today."
        />
      </Box>
      <div className="products-carousel">
        {product.map((prod, i) => (
          <ProductItem
            key={`item-${prod.name}`}
            showContent={i === active}
            onClick={e => setActiveProduct(e, i)}
            product={prod}
          />
        ))}
      </div>
      <Grid>
        <Grid.Unit size={halfSize}>
          <SquareBox bgColor="#A2D45E">
            <BlockTitle color="#FFF" line="bottom">
              Our Craft
            </BlockTitle>
            <Text color="#FFF">
              Live resin is both a cannabis extraction process and a type of
              concentrate. It exclusively uses fresh plants, harvested at their
              absolute peak. The plants are then frozen and extracted at
              cryogenic temperatures using solvents to help preserve the
              terpenes. Terpenes are crucial for aroma and flavor, giving each
              strain its own unique profile. Pretty important stuff
            </Text>
            <Button
              bgColor="#FFF"
              color="#A2D45E"
              onClick={() => navigate("/our-process/")}>
              Learn More
            </Button>
          </SquareBox>
        </Grid.Unit>
        <Grid.Unit size={halfSize}>
          <SquareBox bgImage={leaves} />
        </Grid.Unit>
      </Grid>
      <Box>
        <BlockTitleHorz
          title="What is live resin?"
          ctaText="Learn More"
          ctaLink="/our-story/"
          description="Live resin is both a cannabis extraction process and a type of concentrate. It exclusively utilizes fresh-frozen plants, harvested at their absolute peak. The plants are then frozen and extracted at cryogenic temperatures using hydrocarbon solvents (n-butane), which helps to preserve the volatile terpenes that are not only crucial for aroma and flavor, but also create the unique qualities that make strains different from one another. Pretty important stuff."
        />
      </Box>
      <Box bgColor="#A2D45E">
        <Quote withSignature>
          “For me, live resin, done correctly, from the very best plants is the
          very best thing. It’s the ultimate ultimate. It’s the beyond champagne
          of cannabis.”
        </Quote>
      </Box>
      <FindNearYou />
    </>
  )
}

export default ProductsPage
