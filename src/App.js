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

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
