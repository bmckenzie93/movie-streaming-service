import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LoginLayout from "../components/Layouts/LoginLayout/LoginLayout"
import Login from "../components/Login/Login"
import Seo from "../components/seo"

const IndexPage = () => (
  <LoginLayout>
      <Login />
  </LoginLayout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Login" />

export default IndexPage
