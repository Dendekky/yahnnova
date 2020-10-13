import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Slider from "react-slick"
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js"
import { SectionDescription } from "components/misc/Typography.js"
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js"
import {
  Container,
  ContentWithVerticalPadding,
} from "components/misc/Layouts.js"
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg"
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg"
import VisionaryTech from "images/undraw_visionary_technology.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`
const Column = tw.div``
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`
const Heading = tw(
  SectionHeading
)`text-left text-red-800 leading-snug xl:text-6xl`
const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 inline-block w-56 tracking-wide text-center py-5 bg-yellow-500 hocus:bg-yellow-700`
const FeatureList = tw.ul`mt-12 leading-loose`
const Feature = tw.li`flex items-center`
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-red-500`
const FeatureText = tw.p`ml-2 font-medium text-gray-700`
const ImageColumn = tw(
  Column
)`mx-auto max-w-72 sm:max-w-full lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`

const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-yellow-500 text-white font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`
const QuotesLeftIcon = tw(
  QuotesLeftIconBase
)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
const Quote = tw.blockquote``

export default ({
  heading = "Make It Better With Technology.",
  description = "Yahnnova through our ardent synchrony of technology with everyday life seeks to complement all vigorous tasks with free flowing solutions and processes. With our ethereal inceptions life just stepped up a notch with our influx of innovative projects.",
  imageSrc = VisionaryTech,
  // "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  imageDecoratorBlob = true,
  primaryButtonUrl = "/project",
  primaryButtonText = "View Services",
  buttonRounded = true,
  features = [
    "Available across the Country",
    "Leverages On Premium Internet Power",
    "99.99% Uptime SLA",
  ],
  testimonial = {
    intro: [
      "The global culture created by technology as a means of communication by sharing and cognitive solutions has provided a world of limitless possibilities for the world to come at this revolutionary phase.",
      "Technology should own one major quality and its the emphatic value of help it should connote across all works of life.",
      "Much more than a world where technology drives the society, we believe it is a complimentary tool/vehicle whose wheels we should stir in its immediate use as proxy",
      "The world can change your tenets but technology can change the world we dream of tomorrow.",
    ],
  },
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`
  const slickSettings = {
    infinite: true,
    fade: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
  }
  return (
    <>
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <PrimaryButton
                as="a"
                href={primaryButtonUrl}
                css={buttonRoundedCss}
              >
                {primaryButtonText}
              </PrimaryButton>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={imageSrc} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial>
                  <QuotesLeftIcon />
                  <Quote>
                    <Slider arrows={false} {...slickSettings}>
                      {testimonial.intro.map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </Slider>
                  </Quote>
                </Testimonial>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  )
}
