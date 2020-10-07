import React from "react"
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import tw from "twin.macro"
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js"
import Footer from "components/footers/MiniCenteredFooter.js"
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js"
import ContactDetails from "components/cards/ThreeColContactDetails.js"

const Address = tw.span`leading-relaxed`
const AddressLine = tw.span`block`
const Email = tw.span`text-sm mt-6 block text-gray-500`
const Phone = tw.span`text-sm mt-0 block text-gray-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Abeokuta",
            description: (
              <>
                <Address>
                  <AddressLine>40 Gates Court</AddressLine>
                  <AddressLine>Arakanga, Abeokuta</AddressLine>
                </Address>
                <Email>contact@yahnnova.com</Email>
                <Phone>+23489127825</Phone>
              </>
            ),
          },
          {
            title: "Niger",
            description: (
              <>
                <Address>
                  <AddressLine>602 Annadale Drive</AddressLine>
                  <AddressLine>Kantagora, Niger</AddressLine>
                </Address>
                <Email>contact@yahnnova.com</Email>
                <Phone>+23490875676</Phone>
              </>
            ),
          },
          {
            title: "Oyo",
            description: (
              <>
                <Address>
                  <AddressLine>96 NE. Delaware Lane</AddressLine>
                  <AddressLine>Gbaremu, Ibadan</AddressLine>
                </Address>
                <Email>contact@yahnnova.com</Email>
                <Phone>+23456789023</Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  )
}
