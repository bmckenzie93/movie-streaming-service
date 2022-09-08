import * as React from "react"

import MainLayout from "../components/Layouts/MainLayout/MainLayout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <MainLayout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
