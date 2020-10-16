import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js"
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js"
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg"
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import { ReactComponent as AttentivenessIcon } from "feather-icons/dist/icons/crosshair.svg"
import { ReactComponent as CreativityIcon } from "feather-icons/dist/icons/sliders.svg"
import { ReactComponent as DiversityIcon } from "feather-icons/dist/icons/aperture.svg"
import { ReactComponent as MADIcon } from "feather-icons/dist/icons/bar-chart.svg"

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
])

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
])

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`

const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Subheading = tw(
  SubheadingBase
)`text-center md:text-left uppercase tracking-widest font-bold `
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Features = tw.div`mx-auto md:mx-0 grid grid-cols-1 lg:grid-cols-2 max-w-xs lg:max-w-none`
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`

const FeatureHeadingContainer = tw.div`flex items-center`
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${(props) => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`,
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`
const FeatureHeading = tw.div`ml-3 font-bold text-xl`

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`

// const PrimaryButton = styled(PrimaryButtonBase)((props) => [
//   tw`mt-12 text-sm inline-block mx-auto md:mx-0`,
//   props.buttonRounded && tw`rounded-full`,
// ])

export default ({
  subheading = "Values",
  heading = (
    <>
      We Always Abide by Our <span tw="text-red-800">Values.</span>
    </>
  ),
  description = "We are defined by what we hold on tightly. These aren't just word to us but an identity and cultural background we have attained and will continue to hold up.",
  // primaryButtonText = "Learn More",
  // primaryButtonUrl = "https://google.com",
  imageSrc = prototypeIllustrationImageSrc,
  // buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = true,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: AttentivenessIcon,
      title: "Attentiveness",
      description:
        "We don’t just create, we listen. A feature we uphold that harnesses the needs of our immediate environment and beyond.",
      iconContainerCss: tw`bg-yellow-900 text-red-800`,
    },
    {
      Icon: CreativityIcon,
      title: "Creativity",
      description:
        "Subjecting our imaginative ability to its most productive while bringing reality into play, we have capitalized on one of humanities essence of being more and doing more which in turn results in us giving more",
      iconContainerCss: tw`bg-yellow-900 text-red-800`,
    },
    {
      Icon: DiversityIcon,
      title: "Diversity",
      description:
        "We create and listen globally with an ability to cut through different spheres of life in our creative process we deliver projects that have no confinements but relate to humanities need for choice and intuition",
      iconContainerCss: tw`bg-yellow-900 text-red-800`,
    },
    {
      Icon: MADIcon,
      title: "Making a difference",
      description:
        "We relish the fulfillment of the right kind of impact and development. At Yahnnova, no design process is void of a humanitarian view which speaks our deep concern for better world with technology.",
      iconContainerCss: tw`bg-yellow-900 text-red-800`,
    },
  ]

  if (!features) features = defaultFeatures

  return (
    <Container id="values">
      <TwoColumn>
        <ImageColumn>
          <Image
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureHeadingContainer>
                    <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                      css={feature.iconContainerCss || iconContainerCss}
                    >
                      <feature.Icon />
                    </FeatureIconContainer>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                  </FeatureHeadingContainer>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </Feature>
              ))}
            </Features>

            {/* <PrimaryButton
              buttonRounded={buttonRounded}
              as="a"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </PrimaryButton> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
