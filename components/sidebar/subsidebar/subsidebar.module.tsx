import { CloseButton, Divider, Flex, Heading } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { setSidebarIndex, setSidebarState } from '../../../stores/sidebar.redux'

import DynamicMenu from '../../../modules/menu.module'

type SubSidebarType = {
  name: string
  isOpen?: boolean
}

const Header: React.FC<SubSidebarType> = ({ name }) => {
  const dispatch = useDispatch()

  return (
    <Flex
      w='100%'
      alignItems='center'
      justifyContent='space-between'
    >
      <Heading
        as='h4'
        fontSize='xl'
        noOfLines={1}
        textTransform='capitalize'
      >
      {name}
      </Heading>
      <CloseButton
        size='md'
        onClick={() => {
          dispatch(setSidebarIndex(undefined))
          dispatch(setSidebarState(false)) 
        }}
      />
    </Flex>
  )
}

const SubSidebar: React.FC<SubSidebarType> = ({ name, isOpen }) => {
  return (
    <Flex
      position='absolute'
      left={isOpen ? 20 : -250 }
      w={72}
      h='100%'
      p={4}
      bgColor='white'
      transition='all 0.5s ease'
      flexDirection='column'
    >
      <Header
        name={name}
      />
      <Divider
        my={4}
        orientation='horizontal'
      />
      <DynamicMenu
        name={name}
      />
    </Flex>
  )
}

export default SubSidebar