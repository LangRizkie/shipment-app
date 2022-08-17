import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Theme from '../modules/theme.module'
import Layout from '../layouts/default.module'

import '../styles/global.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
