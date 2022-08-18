import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { persistor, store, wrapper } from '../stores/store.redux'

import Theme from '../modules/theme.module'
import Layout from '../layouts/default.module'

import '../styles/global.scss'
import { PersistGate } from 'redux-persist/integration/react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={Theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default wrapper.withRedux(App)
