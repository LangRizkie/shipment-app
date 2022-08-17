import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'
import Breadcrumb from '../components/breadcrumb/breadcrumb.module'
import Sidebar from '../components/sidebar/sidebar.module'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Head>
        <title>Next Shipment</title>
        <meta name='description' content='Next Shipment' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        w='100%'
        maxW='100%'
        p={0}
        bgColor='gray.50'
      >
        <Sidebar />
        <Flex
          w='100%'
          flexDirection='column'
        >
          <Breadcrumb />
          <Flex
            p={4}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </main>
  )
}

export default Layout
