import React, { useEffect, useContext } from "react"
import { navigate } from "gatsby"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { Quote, BlockTitle, Text } from "../components/text"
import { Arrow, Collab, Button, PlayButton } from "../components/button"
import HomeBanner from "../components/home/banner"
import InstagramFeed from '../components/home/instagram'

import inventor from "../images/inventor.jpg"
import extract from "../images/extract.jpg"
import products from "../images/products.jpg"
import theteam from "../images/the-team.jpg"

const halfSize = {
  sm: 1 / 1,
  md: 1 / 2,
}

const IndexPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/",
    })
  }, [])
  return (
    <>
      <SEO title="Home" />
      <HomeBanner />
      <Box bgColor="#BBA135" top={20} bottom={20}>
        <Grid valign="center">
          <Grid.Unit size={halfSize}>
            <span style={{ display: "block", lineHeight: "140%" }}>
              Latest Collaboration
            </span>
            <span
              style={{
                display: "block",
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: "96%",
              }}>
              Red Congolese
            </span>
          </Grid.Unit>
          <Grid.Unit size={halfSize} style={{ textAlign: "right" }}>
            <Collab right="0" />
            <span
              style={{
                display: "inline-block",
                marginLeft: 18,
                marginRight: 60,
              }}>
              GOLD SEAL SF
            </span>
            <Arrow borderColor="#000" left="0" />
          </Grid.Unit>
        </Grid>
      </Box>
      <Box bgColor="#FF4438">
        <Quote>
          The Live Resin Project began when we were harvesting fresh flower. We
          thought, “There must be a better way to harness this aroma, flavor,
          and sensation.” So, we found a way.
        </Quote>
      </Box>
      <Grid>
        <Grid.Unit size={halfSize}>
          <Box square bgColor="#1DCAD3">
            <BlockTitle color="#FFF" line="bottom">
              The Inventor of Live Resin
            </BlockTitle>
            <Text color="#FFF">
              Our fearless leader, William “Kind Bill” Fenger, was inspired by
              his experience of growing cannabis, but frustrated by the quality
              of extracts made from traditional techniques. In 2013, he did
              something about it.
            </Text>
            <Button
              bgColor="#FFF"
              color="#1DCAD3"
              onClick={() => navigate("/our-story/")}>
              About us
            </Button>
          </Box>
        </Grid.Unit>
        <Grid.Unit size={halfSize}>
          <Box fullHeight top="0" bottom="0" bgImage={inventor}></Box>
        </Grid.Unit>
      </Grid>
      <Grid>
        <Grid.Unit size={halfSize}>
          <Box fullHeight top="0" bottom="0" bgImage={extract}></Box>
        </Grid.Unit>
        <Grid.Unit size={halfSize}>
          <Box bgColor="#FF9E18">
            <BlockTitle color="#FFF" line="bottom">
              An Extract Science
            </BlockTitle>
            <Text color="#FFF">
              Creating live resin is a scientific process designed to preserve
              all the characteristics of fresh flower that dry out and degrade
              in other form factors.
            </Text>
            <Button
              bgColor="#FFF"
              color="#FF9E18"
              onClick={() => navigate("/our-process/")}>
              Our Process
            </Button>
          </Box>
        </Grid.Unit>
      </Grid>
      <Box
        bgColor="#D73121"
        bottom={750}
        bgImage={products}
        bgSize="contain"
        bgPosition="bottom center">
        <BlockTitle line="top" color="#FFF">
          Our Products
        </BlockTitle>
        <Grid>
          <Grid.Unit size={{ sm: 1 / 3, xs: 1 }}>
            <Text color="#FFF">
              Our goal is to preserve the essence of a live plant until you’re
              holding our concentrates in your hand. We’re always looking for
              the best fresh flower to turn into vape cartridges, sauces,
              budders, diamonds, sugars, shatters and THCA crystalline.
            </Text>
            <Button
              style={{ marginRight: 30 }}
              bgColor="#FFF"
              color="#D73121"
              onClick={() => navigate("/products/")}>
              Explore
            </Button>
            <Button
              withArrow
              color="#FFF"
              bgColor="#D73121"
              borderColor="#FFF"
              onClick={() => navigate("/store-locator/")}>
              Store Locator
            </Button>
          </Grid.Unit>
        </Grid>
      </Box>
      <Grid>
        <Grid.Unit size={halfSize}>
          <Box fullHeight bgColor="#BBA135">
            <Text bottom={20}>Latest Collaboration</Text>
            <BlockTitle
              line="top"
              fontSize="66px"
              lineHeight="96%"
              color="#000">
              Red
              <br />
              Congolese
            </BlockTitle>
            <Text>
              This special collaboration showcases Gold Seal’s signature Red
              Congolese, a 12+ week flowering Sativa that we believe is truly
              special.
            </Text>
            <Button borderColor="#000" color="#000" bgColor="#BBA135">
              Learn More
            </Button>
          </Box>
        </Grid.Unit>
        <Grid.Unit size={halfSize}>
          <Box fullHeight bgColor="#000">
            <Text color="#FFC700" bottom={20}>
              Recent Drop
            </Text>
            <BlockTitle
              line="top"
              fontSize="66px"
              lineHeight="96%"
              color="#FFC700">
              Skywalker
              <br />
              OG
            </BlockTitle>
            <Text color="#FFC700">
              It's everything we love about OG - gassy, rich a little earthy.
            </Text>
            <Button
              borderColor="#FFC700"
              color="#FFC700"
              bgColor="#000">
              Learn More
            </Button>
          </Box>
        </Grid.Unit>
      </Grid>
      <Box bgColor="#FCD199">
        <Quote withSignature>
          “My philosophy is Japanese Materialism. That everything takes its
          higher form. And I believe that live resin is the highest form of the
          cannabis plant.”
        </Quote>
      </Box>
      <Box
        bgColor="#A2D45E"
        bgImage={theteam}
        bgPosition="bottom center"
        top={274}
        bottom={274}
        bgSize="contain">
        <Grid>
          <Grid.Unit size={{ sm: 1 / 3, xs: 1 }}>
            <BlockTitle line="bottom" color="#FFF">
              Meet the Team
            </BlockTitle>
            <Text color="#FFF">Say hello to Bill, Philip and Ry.</Text>
            <Button bgColor="#FFF" color="#A2D45E">
              Learn More
            </Button>
          </Grid.Unit>
        </Grid>
        <PlayButton />
      </Box>
      <Box>
        <BlockTitle line="top" color="#000">
          Friends of the Project
        </BlockTitle>
      </Box>
      <InstagramFeed />
    </>
  )
}

export default IndexPage
