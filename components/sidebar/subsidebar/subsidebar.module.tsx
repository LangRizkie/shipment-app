import { CloseButton, Fade, Flex, Heading, Slide } from '@chakra-ui/react'

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
      >
      {name}
      </Heading>
    </Flex>
  )
}

const SubSidebar: React.FC<SubSidebarType> = ({ name, isOpen }) => {
  return (
    <Flex
      w={72}
      h='100%'
      p={4}
      bgColor='white'
      borderLeftWidth='thin'
      borderLeftStyle='solid'
      flexDirection='column'
    >
      <Header
        name={name}
      />
    </Flex>
  )
}

export default SubSidebar