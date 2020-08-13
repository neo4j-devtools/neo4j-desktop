import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Header } from './Header'
import { Footer } from './Footer'
import { pathPrefix } from '../gatsby-config'
import { Sidebar } from './sidebar'
import { TableOfContents } from './TableOfContents'
import { Box, Flex } from 'theme-ui'

export const Layout:React.FC<{}> = ({ children }) =>  {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const allPosts = data.allMdx.edges.map(
          (edge: any) => edge.node.fields.slug
        )
        let onPostPage
        if (typeof window !== 'undefined') {
          const path = window.location.pathname.replace(
            pathPrefix.slice(0, -1),
            ''
          )
          if (
            allPosts.indexOf(path) >= 0 ||
            allPosts.indexOf(path.slice(0, -1)) >= 0
          ) {
            onPostPage = true
          } else {
            onPostPage = false
          }
        }

        const { title } = data.site.siteMetadata

        return (
          <Fragment>
            <Helmet
              title={title}
              meta={[
                { name: 'description', content: 'Neo4j Desktop developer documentation' },
                { name: 'keywords', content: 'neo4j, graph, electronjs' },
              ]}
            >
              <html lang="en" />
            </Helmet>

            <Flex
              sx={{
                flexDirection: 'column',
                minHeight: '100vh',
                variant: 'layout.root',
              }}>

              <Header siteTitle={title} />
              <Flex
                sx={{
                  flexDirection: 'row',
                  overflow: 'visible'
                }}>
                <Box as="aside"
                  sx={{
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: 'sidebar',
                  }}>
                    <Sidebar/>
                </Box>
                <Box as="main"
                  sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 'auto',
                    minWidth: 320,
                    overflow: 'scroll',
                    variant: 'layout.main',
                  }}>
                  <Box id="container"
                    sx={{
                      maxWidth: 768,
                      mx: 'auto',
                      px: 3,
                      variant: 'layout.container',
                    }}>
                      {children}
                  </Box>
                </Box>
              </Flex>

              <Box as="footer"
                    sx={{
                      width: '100%',
                      variant: 'layout.footer',
                    }}>
                    <Footer siteTitle={title} />
                  </Box>
            </Flex>

          </Fragment>
        )
      }}
    />
  )
}
