import { Flex, IconButton } from '@chakra-ui/react'
import { NextComponentType } from 'next'

import Icon from '../../modules/icon.module'

const Breadcrumb: NextComponentType = () => {
  return (
    <Flex
      w='100%'
      p={4}
      alignItems='center'
    >
      <IconButton
        aria-label='Logo'
        icon={
          <Icon icon='Hi/HiArrowSmLeft' />
        }
      />
    </Flex>
  )
}

export default Breadcrumb