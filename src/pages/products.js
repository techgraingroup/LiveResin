import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  createRef,
  forwardRef,
} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Grid from "styled-components-grid"
import { cover, fluidRange } from "polished"
import { AppContext } from "../context"
import SEO from "../components/seo"
import Hero from "../components/hero"
import FindNearYou from "../components/findnearyou"
import { Box } from "../components/box"
import RCBanner from "../components/rcbanner"
import { Text, BlockTitleHorz } from "../components/text"
import { MobileBr, DesktopBr } from "../components/responsive"
import {
  useScrollPosition,
  getImageFromList,
  getWindowSize,
  useOnScreen,
} from "../utils"
import { THEME } from "../data"
import {
  TBudder,
  TDiamonds,
  TSauce,
  TSugar,
  TShatter,
  TThca,
  TVapes,
} from "../components/icons"

const icons = { TBudder, TDiamonds, TSauce, TSugar, TShatter, TThca, TVapes }

const {
  sideGutter,
  breakpoints: { md, lg, xl },
} = THEME

const IconsWrapNav = styled(({ navHeight, ...rest }) => <div {...rest} />)`
  padding-top: 0;
  padding-bottom: 0;
  ${fluidRange(
    {
      prop: "padding-left",
      fromSize: "20px",
      toSize: sideGutter,
    },
    `${md}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "padding-right",
      fromSize: "20px",
      toSize: sideGutter,
    },
    `${md}px`,
    `${xl}px`
  )}
  &.sticky {
    height: ${props =>
      props.navHeight ? `${props.navHeight}px` : `${ICONS_HEIGHTS[1]}px`};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #fff;
    z-index: 1200;
    .icons-wrap {
      padding-bottom: 0;
      height: 100%;
      .icon-item {
        width: auto;
        flex-basis: auto;
        a {
          height: 100%;
          padding-top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          span.label {
            display: none;
          }
          svg {
            height: auto;
            margin-bottom: 0;
            margin-top: 0;
            ${fluidRange(
              {
                prop: "width",
                fromSize: "30px",
                toSize: "80px",
              },
              `${md}px`,
              `${xl}px`
            )}
          }
        }
      }
    }
  }
`

const IconsWrap = styled.div`
  margin-bottom: 0;
  border-top: 1px solid #000;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 20px;
  @media only screen and (min-width: ${md}px) {
    padding-bottom: 75px;
  }
  span {
    display: block;
    font-size: 16px;
    font-family: MontHeavy, sans-serif;
    line-height: 100%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    min-height: 32px;
    max-width: 140px;
    margin-left: auto;
    margin-right: auto;
  }
  svg {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 40px;
    @media only screen and (min-width: ${md}px) {
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
`

const IconWrap = styled(({ offset, target, isActive, children, ...rest }) => (
  <div {...rest}>
    <AnchorLink offset={offset || 0} href={target || "#"}>
      {children}
    </AnchorLink>
  </div>
))`
  width: 50%;
  flex-basis: 50%;
  ${fluidRange(
    {
      prop: "padding-left",
      fromSize: "0px",
      toSize: "15px",
    },
    `${lg}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "padding-right",
      fromSize: "0px",
      toSize: "15px",
    },
    `${lg}px`,
    `${xl}px`
  )}
  @media only screen and (min-width: ${lg}px) {
    width: auto;
    flex-basis: auto;
  }
  &.last-odd {
    width: 100%;
    flex-basis: 100%;
    @media only screen and (min-width: ${lg}px) {
      width: auto;
      flex-basis: auto;
    }
  }
  a {
    display: block;
    color: #000;
    text-decoration: none;
    position: relative;
    padding-top: 30px;
    ${props =>
      props.isActive &&
      `
    &::before {
        display: block;
        content: '';
        width: 100%;
        background: #FF4438;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 4px;
        @media only screen and (min-width: ${md}px) {
         height: 10px;
        }
    }
    `}
  }
`

const ProductTitle = styled(props => <Grid {...props} />)`
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  margin-bottom: 40px;
  h2 {
    font-family: MontHeavy, sans-serif;
    line-height: 105.8%;
    letter-spacing: -0.035em;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "30px",
        toSize: "48px",
      },
      `${md}px`,
      `${xl}px`
    )}
  }
  .icon-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      width: auto;
      margin-right: 10px;
      ${fluidRange(
        {
          prop: "height",
          fromSize: "45px",
          toSize: "65px",
        },
        `${md}px`,
        `${xl}px`
      )}
    }
  }
`

const ProductInfo = styled(({ children, ...rest }) => (
  <Grid.Unit {...rest}>
    <div className="info-wrap">{children}</div>
  </Grid.Unit>
))`
  padding-top: 20px;
  .info-wrap {
    padding-right: 0;
    @media only screen and (min-width: ${md}px) {
      padding-right: 15px;
    }
    h3 {
      margin-top: 0;
      text-transform: uppercase;
      font-family: MontHeavy, sans-serif;
      line-height: 100%;
      letter-spacing: 0.1em;
      ${fluidRange(
        {
          prop: "font-size",
          fromSize: "20px",
          toSize: "24px",
        },
        `${md}px`,
        `${xl}px`
      )}
    }
    h4 {
      font-family: MontHeavy, sans-serif;
      font-size: 16px;
      line-height: 140%;
      padding-top: 20px;
      border-top: 1px solid #000;
    }
    p {
      margin-bottom: 55px;
    }
  }
`

const ImgWrapper = styled(props => <Grid.Unit {...props} />)`
  box-sizing: border-box;
  padding-right: 0;
  @media only screen and (min-width: ${md}px) {
    padding-right: 20px;
  }
`

const ProductImg = styled(props => <Img {...props} />)`
  width: 510px;
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: ${lg}px) {
    margin-left: 0;
  }
`

const StrainBox = styled(({ children, bg, color, ...rest }) => {
  return (
    <div {...rest}>
      <div className="box">
        <div className="content-wrap">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  )
})`
  margin: 0;
  display: inline-block;
  width: calc(50% - 10px);
  &.even {
    margin: 0 10px 15px 0;
    @media only screen and (min-width: ${md}px) {
      margin: 0 30px 20px 0;
    }
  }
  &.odd {
    margin: 0 0 15px 10px;
    @media only screen and (min-width: ${md}px) {
      margin: 0 30px 20px 0;
    }
  }
  @media only screen and (min-width: ${md}px) {
    width: 120px;
  }
  .box {
    position: relative;
    padding-top: 100%;
    height: auto;
    background: ${props => props.bg || "#000"};
    .content-wrap {
      ${cover()}
      display: flex;
      justify-content: flex-start;
      align-items: left;
      .content {
        color: ${props => props.color || "#FFF"};
        padding: 15px;
        box-sizing: border-box;
        font-family: MontHeavy, sans-serif;
        letter-spacing: -0.02em;
        line-height: 100%;
        white-space: pre-wrap;
        font-size: 28px;
        @media only screen and (min-width: ${md}px) {
          font-size: 15px;
        }
      }
    }
  }
`

const ProductBlock = styled(
  forwardRef(({ p, setActive, ...rest }, ref) => {
    const Icon = icons[p.icon]
    const itemInView = useOnScreen(ref)
    if (itemInView) setActive(p.icon)
    return (
      <div id={p.icon} {...rest}>
        <div ref={ref}>
          <ProductTitle>
            <Grid.Unit size={1 / 2}>
              <h2>{p.name}</h2>
            </Grid.Unit>
            <Grid.Unit size={1 / 2} className="icon-wrap">
              <Icon active />
            </Grid.Unit>
          </ProductTitle>
          <Grid>
            <ImgWrapper size={{ xs: 1, sm: 1, md: 1, lg: 1 / 2 }}>
              <ProductImg fluid={p.image.childImageSharp.fluid} />
            </ImgWrapper>
            <ProductInfo size={{ xs: 1, sm: 1, md: 1, lg: 1 / 2 }}>
              <h3>What is it?</h3>
              <Text>{p.what}</Text>
              <h3>How is it made?</h3>
              <Text>{p.how}</Text>
              <h3>Why Live {p.name}?</h3>
              <Text>{p.why}</Text>
              <h4>Popular Strain</h4>
              <div>
                {p.strains.map((s, i) => {
                  const isEven = i % 2 === 0
                  return (
                    <StrainBox
                      key={`${i}-item`}
                      className={isEven ? "even" : "odd"}
                      color={s.color}
                      bg={s.bg}>
                      {s.name}
                    </StrainBox>
                  )
                })}
              </div>
            </ProductInfo>
          </Grid>
        </div>
      </div>
    )
  })
)`
  padding-top: 0;
  padding-bottom: 0;
  ${fluidRange(
    {
      prop: "padding-left",
      fromSize: "20px",
      toSize: sideGutter,
    },
    `${md}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "padding-right",
      fromSize: "20px",
      toSize: sideGutter,
    },
    `${md}px`,
    `${xl}px`
  )}
  > div {
    padding-bottom: 60px;
    @media only screen and (min-width: ${md}px) {
      padding-bottom: 100px;
    }
  }
`

const ICONS_HEIGHTS = [100, 200]

const ProductsPage = () => {
  const [activeIcon, setActiveIcon] = useState("")
  const [iconsHeight, setIconsHeight] = useState(0)
  const [iconsMenuSticky, setIconsMenuSticky] = useState(false)
  const iconsMenu = useRef(null)
  const { dispatch } = useContext(AppContext)
  const productsRef = useRef()

  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/products/",
    })
    dispatch({ type: "mobileMenu", value: false })
    setTimeout(() => {
      const { width } = getWindowSize()
      if (width <= md) {
        setIconsHeight(ICONS_HEIGHTS[0])
      } else {
        setIconsHeight(ICONS_HEIGHTS[1])
      }
    }, 100)
  }, [setIconsHeight])

  useEffect(() => {
    const handleResize = () => {
      const { width } = getWindowSize()
      if (width <= md) {
        setIconsHeight(ICONS_HEIGHTS[0])
      } else {
        setIconsHeight(ICONS_HEIGHTS[1])
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const iconsMenuHeight = iconsMenu.current.getBoundingClientRect().height
      if (
        currPos.y < iconsMenuHeight &&
        currPos.y + currPos.height >= iconsMenuHeight
      ) {
        setIconsMenuSticky(true)
      } else {
        setIconsMenuSticky(false)
      }
    },
    [iconsHeight, setIconsMenuSticky],
    productsRef,
    null,
    100
  )

  const {
    dataJson: { products },
    banners: { edges },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        products {
          name
          icon
          what
          how
          why
          strains {
            name
            color
            bg
          }
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      banners: allFile(
        filter: {
          relativePath: {
            in: ["products-banner.jpg", "products-banner-mobile.jpg"]
          }
        }
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(quality: 100, maxWidth: 2880) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const banner = getImageFromList("products-banner.jpg", edges)
  const bannerMobile = getImageFromList("products-banner-mobile.jpg", edges)
  const itemRefs = useRef(products.map(() => createRef()))
  return (
    <>
      <SEO title="Products" />
      <Hero
        aspectRatio={900 / 1440}
        aspectRatioMobile={640 / 375}
        bgImage={banner}
        bgImageMobile={bannerMobile}
        vAlign="flex-end"
        vAlignMobile="flex-end"
        title={() => (
          <>
            We create <MobileBr />
            fresh <DesktopBr />
            extracts <MobileBr />
            in a variety <DesktopBr />
            of <MobileBr />
            formats.
          </>
        )}
      />
      <Box bottom="0">
        <BlockTitleHorz
          title="Our Formats"
          titleStyle={{
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
          description="Live resin is both a cannabis extraction process and a type of concentrate. It exclusively uses fresh plants, harvested at their absolute peak. The plants are then frozen and extracted at cryogenic temperatures using solvents to help preserve the terpenes. Terpenes are crucial for aroma and flavor, giving each strain its own unique profile. Pretty important stuff."
        />
      </Box>
      <IconsWrapNav
        navHeight={iconsHeight}
        className={iconsMenuSticky && "sticky"}>
        <IconsWrap className="icons-wrap" ref={iconsMenu}>
          {products.map((p, i) => {
            const Icon = icons[p.icon]
            const isEven = products.length % 2 === 0
            const isLastElement = i + 1 === products.length
            let className = "icon-item"
            if (!isEven && isLastElement) {
              className = "icon-item last-odd"
            }
            return (
              <IconWrap
                key={`${i}-item`}
                className={className}
                isActive={p.icon === activeIcon}
                offset={iconsHeight}
                target={`#${p.icon}`}>
                <span className="label">{p.name}</span>
                <Icon active />
              </IconWrap>
            )
          })}
        </IconsWrap>
      </IconsWrapNav>
      <div
        id="products-wrapper"
        ref={productsRef}
        style={{
          paddingTop: iconsMenuSticky ? iconsHeight : 0,
        }}>
        {products.map((p, i) => {
          return (
            <ProductBlock
              key={p.icon}
              p={p}
              ref={itemRefs.current[i]}
              setActive={name => {
                setActiveIcon(name)
              }}
            />
          )
        })}
      </div>
      <Box bottom={40}>
        <BlockTitleHorz
          title="Collaborations"
          titleStyle={{
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
          description="Our current lineup won’t be our lineup forever. We’re always looking for new collaborations and the freshest flower. Here’s what we have today."
        />
      </Box>
      <RCBanner />
      <FindNearYou />
    </>
  )
}

export default ProductsPage
