import { Text } from '@chakra-ui/react';
import dynamic, { DynamicOptionsLoadingProps } from 'next/dynamic'

export interface MenuProps {
  name: string
}

const DynamicMenu: React.FC<MenuProps> = ({ ...props }) => {
  const folder = props.name
  
  const Menu = dynamic(() =>
    import(`../components/sidebar/subsidebar/${folder}/${folder}.module.tsx`),
    {
      loading: (prop: DynamicOptionsLoadingProps) =>
        <Text>
          {prop.error ? 'Error Loading Component' : 'loading...'}
        </Text>
    }
  )
  
  return <Menu />
};

export default DynamicMenu
