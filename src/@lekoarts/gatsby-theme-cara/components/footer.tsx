/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"

const Footer = () => {

  return (
    <Box as="footer" variant="footer">
      <div
        sx={{
          p: {color: `#000000`, fontFamily: `"opake", sans-serif`},
        }}
      >
        <p> Copyright &copy; {new Date().getFullYear()}. All rights reserved. </p>
      <br />
      </div>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `#000000`},
        }}
      >
      </Flex>
    </Box>
  )
}

export default Footer
