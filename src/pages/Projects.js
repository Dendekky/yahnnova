import React from "react"
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js"
import Header from "components/headers/light.js"
import Footer from "components/footers/MiniCenteredFooter.js"

export default () => (
  <AnimationRevealPage>
    <Header />
    <Portfolio />
    <Footer />
  </AnimationRevealPage>
)
