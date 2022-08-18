import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'
import { useSelector } from 'react-redux'

import Breadcrumb from '../components/breadcrumb/breadcrumb.module'
import Sidebar from '../components/sidebar/sidebar.module'
import { sidebarState } from '../stores/sidebar.redux'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const isSideBarOpen: boolean = useSelector(sidebarState)
  
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
          pl={isSideBarOpen ? 72 : 4}
          transition='all 0.5s ease'
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
