import * as React from "react"
import LoginLayout from "../components/Layouts/LoginLayout"
import LoginUsers from "../components/LoginUsers/"
import CreateUser from "../components/CreateUser"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <LoginLayout>
        {/* show login users or create user if no users exist */}
        {/* <LoginUsers /> */} 
        <CreateUser /> 
    </LoginLayout>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Login" />

export default IndexPage
