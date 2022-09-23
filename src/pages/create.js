import * as React from "react"
import LoginLayout from "../components/Layouts/LoginLayout"
import LoginUsers from "../components/LoginUsers/"
import CreateUser from "../components/CreateUser"
import Seo from "../components/seo"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const Create = () => {
  const state = React.useContext(GlobalStateContext)

  return (
    <LoginLayout>
        <CreateUser /> 
    </LoginLayout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Create user" />

export default Create
