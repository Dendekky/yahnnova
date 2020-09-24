import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import CountUp from "react-countup"
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js"
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from "components/misc/Layouts"
import { SectionDescription } from "components/misc/Typography"

const Container = tw(
  ContainerBase
)`my-8 lg:my-10 bg-yellow-700 text-gray-100 -mx-8 px-8`
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`
const Description = tw(
  SectionDescription
)`text-gray-400 text-center mx-auto max-w-screen-md`

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
const StatKey = tw.div`text-xl font-medium`
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`

export default ({
  subheading = "",
  heading = `Projects Completed`,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  stats = [
    {
      key: "Clients",
      value: 250,
      prefix: "",
      suffix: "+",
    },
    {
      key: "Revenue",
      value: 10,
      prefix: "$",
      suffix: "M+",
    },
    {
      key: "Employees",
      value: 40,
      prefix: "",
      suffix: "+",
    },
  ],
}) => {
  const [inScrollView, setInScrollView] = useState(false)
  const animateCountup = () => {
    document.getElementById("count").click()
  }

  useEffect(() => {
    const topPosition = window.pageYOffset + window.innerHeight
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      // const scrollPosition = document.getElementById("header").offsetTop
      // const isVisible = () => topPosition > scrollPosition
      const isVisible = () => topPosition < scrollPosition
      setInScrollView(isVisible)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const animateProjectCount = () => {
      if (inScrollView) {
        // trigger animation
        animateCountup()
      }
    }
    animateProjectCount()
  }, [inScrollView])

  return (
    <Container id="services">
      <ContentWithPaddingXl>
        {/* <div id="header"> */}
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>
            <CountUp
              prefix="Over "
              end={90}
              suffix={` ${heading}`}
              duration={5}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                  <input
                    id="count"
                    style={{ display: "none" }}
                    onClick={start}
                  />
                </div>
              )}
            </CountUp>{" "}
          </Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        {/* </div> */}
        <StatsContainer>
          {stats.map((stat) => (
            <Stat key={stat.value}>
              <StatValue>
                {/* {stat.prefix} */}
                <CountUp
                  prefix={stat.prefix}
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={10}
                />
                {/* {stat.suffix} */}
              </StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  )
}
