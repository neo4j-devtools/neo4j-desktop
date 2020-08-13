/** @jsx jsx */
import { jsx, Button, Flex, NavLink } from "theme-ui"
import { Link } from 'gatsby'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Neo4j Desktop
      </p>
      <h2>Developer Documentation</h2>
      <p>
        Learn how Neo4j Desktop works, how to integrate with it, or how to extend it.
      </p>
      <br />
      <Flex as='nav'>
        <NavLink p={2}
          href="https://github.com/neo4j-apps/neo4j-desktop"
          target="_blank"
        >
          Github
          <GithubOutlined />
        </NavLink>
        <NavLink  p={2}
          href="https://twitter.com/neo4j" target="_blank">
          Twitter
          <TwitterOutlined />
        </NavLink>
        <NavLink  p={2} >
          <Link to="/docs/get-started/introduction">Get Started</Link>
        </NavLink>
      </Flex>
    </div>
  )
}

export default IndexPage
