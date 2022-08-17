import { Avatar, Flex, IconButton, Tooltip, useDisclosure } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import { Dispatch, SetStateAction, useState } from 'react'

import { MenuType } from '../../models/menu.module'
import { Endpoint } from '../../modules/endpoint.module'
import Icon from '../../modules/icon.module'
import SubSidebar from './subsidebar/subsidebar.module'

const Logo: NextComponentType = () => {
  return (
    <IconButton
      aria-label='Logo'
      icon={
        <Icon icon='Fa/FaShippingFast' />
      }
    />
  )
}

interface NavigationType extends MenuType {
  whichOpen: number | undefined,
  setWhichOpen: Dispatch<SetStateAction<number | undefined>>
  isOpen: boolean
  onToggle: () => void
}

const Navigation: React.FC<NavigationType> = ({
  whichOpen, setWhichOpen, menu, isOpen, onToggle
}) => {
  return (
    <Flex
      flexDirection='column'
    >
      {
        menu.map((el, id) =>
          <Tooltip
            key={id}
            label={el.name}
            placement='right'
            hasArrow
          >
            <IconButton
              isActive={isOpen && (whichOpen == id)}
              aria-label={el.name}
              mb={id == menu.length - 1 ? 0 : 4}
              icon={
                <Icon icon={el.icon} />
              }
              onClick={() => {
                setWhichOpen(id)

                if (whichOpen == id || !isOpen)
                  onToggle()
              }}
            />
          </Tooltip>
        )
      }
    </Flex>
  )
}

const Profile: NextComponentType = () => {
  return (
    <Flex
      flexDirection='column'
    >
      <Tooltip
        label='notification'
        placement='right'
        hasArrow
      >
        <IconButton
          aria-label='Notification'
          colorScheme='purple'
          mb={4}
          icon={
            <Icon
              icon='Ri/RiNotification3Line'
              color='white'
            />
          }
        />
      </Tooltip>
      <Avatar
        name='Dan Abrahmov'
        src='https://bit.ly/dan-abramov'
      />
    </Flex>
  )
}

type SidebarType = {
  whichOpen: number | undefined,
  setWhichOpen: Dispatch<SetStateAction<number | undefined>>
  isOpen: boolean
  onToggle: () => void
}

const Sidebar: React.FC<SidebarType> = ({
  isOpen, onToggle, whichOpen, setWhichOpen
}) => {
  const { data } = Endpoint.fetch('/api/menu')
  
  return (
    <Flex>
      <Flex
        position='relative'
        h='100vh'
        minH='100vh'
        maxH='100vh'
        p={4}
        borderRightWidth='thin'
        borderRightStyle='solid'
        bgColor='white'
        zIndex={5}
        flexDirection='column'
        justifyContent='space-between'
      >
        <Logo />
        {
          data &&
          <Navigation
            whichOpen={whichOpen}
            setWhichOpen={setWhichOpen}
            menu={data}
            isOpen={isOpen}
            onToggle={onToggle}
          />
        }
        <Profile />
      </Flex>
      {
        data &&
        <SubSidebar
          name={whichOpen! >= 0 && data[whichOpen!].name}
          isOpen={isOpen}
        />
      }
    </Flex>
  )
}

export default Sidebar