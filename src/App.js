import "tailwindcss/dist/base.css"
import "styles/globalStyles.css"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { css } from "styled-components/macro"; //eslint-disable-line

import LandingPage from "pages/LandingPage"
import AboutPage from "pages/AboutUs"
import ProjectPage from "pages/Projects"
import ContactPage from "pages/ContactUs"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/project">
          <ProjectPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}
