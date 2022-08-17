import { Flex, Heading } from '@chakra-ui/react'

type SubSidebarType = {
  name: string
  isOpen?: boolean
}

const Header: React.FC<SubSidebarType> = ({ name }) => {
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
    </Flex>
  )
}

export default SubSidebar