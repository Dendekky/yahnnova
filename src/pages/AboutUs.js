import React from "react"
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import tw from "twin.macro"
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js"
import Footer from "components/footers/MiniCenteredFooter.js"
import MainFeature1 from "components/features/TwoColWithButton.js"
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js"

import VisionaryIconImage from "images/undraw_mind_map.svg"
import VisionaryIconImage2 from "images/undraw_lost_online.svg"

const Subheading = tw.span`uppercase tracking-wider text-sm`
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Yahnnova</Subheading>}
        heading="We are a modern IT agency."
        buttonRounded
        primaryButtonText="See Products"
        primaryButtonUrl="/project"
        imageSrc={VisionaryIconImage}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the IT space."
        buttonRounded
        primaryButtonText="Contact Us"
        primaryButtonUrl="/contact"
        imageSrc={VisionaryIconImage2}
        textOnLeft
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      <Footer />
    </AnimationRevealPage>
  )
}
