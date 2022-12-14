import * as React from "react"
import MainLayout from "../components/Layouts/MainLayout/MainLayout"
import LoginUsers from "../components/LoginUsers/"
import CreateUser from "../components/CreateUser"
import Seo from "../components/seo"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import { navigate } from "gatsby"

const IndexPage = () => {
  const globalState = React.useContext(GlobalStateContext)
  React.useEffect(() => {
    const loggedIn = false;

    if(loggedIn === false) {
      navigate('/create')
    }
  },[])

  return (
  <>
    <MainLayout>
      
      <h1>HOME PAGE</h1>
        
    </MainLayout>
  </>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Login" />

export default IndexPage
