// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Using a function
// NB: Chakra gives you access to `colorMode` and `theme` in `props`
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'Lato Light',
      color: mode('#E5E5E5')(props),
      bgGradient: mode('radial(circle, #49075F, #4A0844, #222161)')(props),
      lineHeight: 'base',
    },
 }),
}
// 3. extend the theme
const theme = extendTheme({ styles })

export default theme