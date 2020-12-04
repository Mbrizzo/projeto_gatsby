import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      bacground=""
      category="Misc"
      date="Dezember 04th, 2020"
      timeToRead="5"
      title="Text Gradients"
      description="How to create text gradients in CSS."
    />
  </Layout>
)

export default IndexPage
