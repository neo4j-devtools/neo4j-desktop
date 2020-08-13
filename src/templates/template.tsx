import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {Layout} from '../Layout'

function PageTemplate({ data: { mdx } }: any) {
  return (
    // ABKTODO lurking problems thanks to missing type information...
    // <Layout sidebarRoot={mdx.frontmatter.root}> 
    <Layout> 
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        root
      }
      body
    }
  }
`
export default PageTemplate
