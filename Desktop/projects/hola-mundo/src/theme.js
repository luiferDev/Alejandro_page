// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Using a function
// NB: Chakra gives you access to `colorMode` and `theme` in `props`
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'Lato',
      color: mode('white')(props),
      bgGradient: mode('radial(circle, #0D0935 0%, 14.580941200256348%, #49075F 29.161882400512695%, 53.38691174983978%, #4A0844 77.61194109916687%, 88.80597054958344%, #222161 100%)')(props),
      lineHeight: 'base',
    },
 }),
}
// 3. extend the theme
const theme = extendTheme({ styles })

export default theme