import React from "react"
import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>
    {element}
  </GlobalContextProvider>
)

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}