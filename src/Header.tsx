/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Box, Flex } from 'theme-ui'
import { Github, Twitter } from '@icons-pack/react-simple-icons';

interface Props {
  siteTitle: string
}

export const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <Flex
      as="header"
      sx={{
        width: '100%',
        variant: 'layout.header'
      }}
    >
      <Link to="/docs/get-started/introduction/" activeClassName='active'
        sx={{
          variant: 'styles.navlink',
          p: 2,
        }}>
        {siteTitle}
      </Link>
      <Box sx={{ mx: 'auto' }} />
      <Link to="https://github.com/neo4j-apps/neo4j-desktop"
        target="_blank" activeClassName='active'
        sx={{
          variant: 'styles.navlink',
          p: 2,
        }}
      >
        <Github />
          GitHub
        </Link>
      <Link to="https://twitter.com/neo4j" target="_blank" activeClassName='active'
        sx={{
          variant: 'styles.navlink',
          p: 2,
        }}>
        <Twitter />
            Twitter
        </Link>
    </Flex>
  )
}
