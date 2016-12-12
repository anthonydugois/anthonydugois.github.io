import React from "react"

import Page from "../Page"
import Main from "../../components/Main"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <Main />
    </Page>
  )
}

export default Homepage
