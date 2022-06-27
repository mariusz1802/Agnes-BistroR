import * as React from "react"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import ScrollUpBtn from "../components/ScrollUpBtn/ScrollUpBtn"
import Seo from "../components/seo"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <ScrollUpBtn />
      <Seo />
    </Layout>
  )
}

export default IndexPage
