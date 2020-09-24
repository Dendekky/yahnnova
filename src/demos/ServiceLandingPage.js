import React from "react"
import tw from "twin.macro"
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import HeaderBase from "components/headers/light.js"
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js"
import Features from "components/features/ThreeColWithSideImage.js"
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js"
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js"
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js"
// import Blog from "components/blogs/GridWithFeaturedPost.js"
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js"
import FAQ from "components/faqs/SingleCol.js"
import Footer from "components/footers/MiniCenteredFooter.js"
// import GetStarted from "components/cta/GetStartedLight.js"
// import Footer from "components/footers/FiveColumnWithInputForm.js"

const HighlightedText = tw.span`text-red-800`
const Header = tw(HeaderBase)`max-w-none`

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Hero />
      <FeatureStats />
      <Features
        heading={
          <>
            We have Amazing <HighlightedText>Service</HighlightedText>
          </>
        }
      />
      <MainFeature
        heading={
          <>
            We Always Abide by Our{" "}
            <HighlightedText>Principles.</HighlightedText>
          </>
        }
      />
      <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us</HighlightedText>
          </>
        }
      />
      <FAQ
        heading={
          <>
            Any <HighlightedText>Questions ?</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  )
}
