import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { Container as ContainerBase } from "components/misc/Layouts.js"
import { NavLink } from "components/headers/light.js"
import logo from "../../images/yahnnova.png"
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg"
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg"
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg"

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`
const LogoImg = tw.img`w-24`
const LogoText = tw.h5`ml-2 text-4xl font-black tracking-wider`

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
// const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`

const SocialLinksContainer = tw.div`mt-10`
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Yahnnova</LogoText>
          </LogoContainer>
          <LinksContainer>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/#values">Values</NavLink>
            <NavLink to="/#faqs">FAQs</NavLink>
            {/* <NavLink to="/#testimonials">Testimonials</NavLink> */}
            <NavLink to="/#services">Services</NavLink>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com/yahnnova">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/yahnnova">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com/yahnnova">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, Yahnnova Ent. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  )
}
