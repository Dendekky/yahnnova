import React from "react"
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import tw from "twin.macro"
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js"
import Footer from "components/footers/MiniCenteredFooter.js"
import MainFeature1 from "components/features/TwoColWithButton.js"
// import TeamCardGrid from "components/cards/ProfileThreeColGrid.js"

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
        description="Intuitive design thinking with grafted innovation is our label. At Yahnnova we sort out the ambiguity with product designers who develop through research and constructive thinking. We believe in the power of remodeling the past and creating the future. It’s simple, brilliant minds make the world go round! Our clients need drives our innovation."
        buttonRounded
        primaryButtonText="See Products"
        primaryButtonUrl="/project"
        imageSrc={VisionaryIconImage}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the IT space."
        description="We love to help people grow thereby making the world better with technology. Through this we will create a complimentary human-technology relationship which will be the core representation for the next progressive phase of technology and the solutions it brings."
        buttonRounded
        primaryButtonText="Contact Us"
        primaryButtonUrl="/contact"
        imageSrc={VisionaryIconImage2}
        textOnLeft
      />
      {/* <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} /> */}
      <Footer />
    </AnimationRevealPage>
  )
}
