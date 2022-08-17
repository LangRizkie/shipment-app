import { extendTheme } from '@chakra-ui/react'

import '@fontsource/source-sans-pro'

const Theme = extendTheme({
  fonts: {
    heading: `'Source Sans Pro'`,
    body: `'Source Sans Pro'`
  },
  fontSizes: {
    '2xs': '0.625rem',
    '3xs': '0.5rem'
  }
})

export default Theme