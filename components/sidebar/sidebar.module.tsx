import { Avatar, Flex, IconButton, Tooltip } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import { useDispatch, useSelector } from 'react-redux'

import { MenuModel, MenuType } from '../../models/menu.module'
import { Endpoint } from '../../modules/endpoint.module'
import { setSidebarIndex, setSidebarState, sidebarIndex, sidebarState } from '../../stores/sidebar.redux'

import Icon from '../../modules/icon.module'
import SubSidebar from './subsidebar/subsidebar.module'
import Link from 'next/link'

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
  isSideBarOpen: boolean
  sideBarIndex: number
}

const Navigation: React.FC<NavigationType> = (
  { menu, isSideBarOpen, sideBarIndex }
) => {
  const dispatch = useDispatch()

  const onClickedMenu = (el: MenuModel, id: number) => {
    if (!el.useSidebar) {
      dispatch(setSidebarIndex(id))
      dispatch(setSidebarState(false))
      return
    }

    if (isSideBarOpen && sideBarIndex != id) {
      dispatch(setSidebarState(false))

      setTimeout(() => {
        dispatch(setSidebarIndex(sideBarIndex == id ? undefined : id))
        dispatch(setSidebarState(true))
      }, 500)

      return
    }

    dispatch(setSidebarIndex(sideBarIndex == id ? undefined : id))
    dispatch(setSidebarState(!isSideBarOpen))
  }

  return (
    <Flex
      flexDirection='column'
    >
      {
        menu.map((el, id) =>
          <Link
            key={id}
            href={el.url}
            shallow
            passHref
            replace
          >
            <a>
              <Tooltip
                label={el.name}
                placement='right'
                hasArrow
              >
                <IconButton
                  isActive={sideBarIndex != undefined && sideBarIndex == id}
                  aria-label={el.name}
                  mb={id == menu.length - 1 ? 0 : 4}
                  icon={
                    <Icon icon={el.icon} />
                  }
                  onClick={() => onClickedMenu(el, id)}
                />
              </Tooltip>
            </a>
          </Link>
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

const Sidebar: NextComponentType = () => {
  const { data: menu } = Endpoint.fetch('/api/menu')
  const isSideBarOpen: boolean = useSelector(sidebarState)
  const sideBarIndex: number = useSelector(sidebarIndex)
  
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
          menu &&
          <Navigation
            menu={menu}
            isSideBarOpen={isSideBarOpen}
            sideBarIndex={sideBarIndex}
          />
        }
        <Profile />
      </Flex>
      {
        menu &&
        <SubSidebar
          name={sideBarIndex! >= 0 && menu[sideBarIndex!].name}
          isOpen={isSideBarOpen && menu[sideBarIndex!].useSidebar}
        />
      }
    </Flex>
  )
}

export default Sidebar