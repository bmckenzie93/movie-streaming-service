/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
const React = require("react")
const GlobalContextProvider = require("./src/context/GlobalContextProvider").default

exports.wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      {element}
    </GlobalContextProvider>
  )
}
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}