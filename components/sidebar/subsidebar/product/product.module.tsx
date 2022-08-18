import { Flex, Input, Select, Stack, StackProps, Text } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import { SelectModel } from '../../../../models/select.module'
import { Endpoint } from '../../../../modules/endpoint.module'

interface SelectProps extends StackProps {
  data: Array<any>
}

const Status: React.FC<SelectProps> = (props) => {
  return (
    <Stack
      {...props}
    >
      <Text
        fontSize='sm'
        fontWeight='semibold'
      >
        Status
      </Text>
      <Select
        variant='filled'
      >
        {
          props.data.map((el: SelectModel, id: number) =>
            <option
              key={id}
              value={el.type}
            >
              {el.name}
            </option>
          )
        }
      </Select>
    </Stack>
  )
}

const Category: React.FC<SelectProps> = (props) => {
  return (
    <Stack
      {...props}
    >
      <Text
        fontSize='sm'
        fontWeight='semibold'
      >
        Category
      </Text>
      <Select
        variant='filled'
      >
        {
          props.data.map((el: SelectModel, id: number) =>
            <option
              key={id}
              value={el.type}
            >
              {el.name}
            </option>
          )
        }
      </Select>
    </Stack>
  )
}

const Gender: React.FC<SelectProps> = (props) => {
  return (
    <Stack
      {...props}
    >
      <Text
        fontSize='sm'
        fontWeight='semibold'
      >
        Gender
      </Text>
      <Select
        variant='filled'
      >
        {
          props.data.map((el: SelectModel, id: number) =>
            <option
              key={id}
              value={el.type}
            >
              {el.name}
            </option>
          )
        }
      </Select>
    </Stack>
  )
}

const Product: NextComponentType = () => {
  const { data: status } = Endpoint.fetch('/api/status')
  const { data: category } = Endpoint.fetch('/api/category')
  const { data: gender } = Endpoint.fetch('/api/gender')
  
  return (
    <Flex
      flexDirection='column'
    >
      {
        status &&
        <Status
          data={status}
          mb={4}
        />
      }
      {
        category &&
        <Category
          data={category}
          mb={4}
        />
      }
      {
        gender &&
        <Gender
          data={gender}
          mb={4}
        />
      }
    </Flex>
  )
}

export default Product