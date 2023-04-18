import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Adnavbar from '../Components/Adnavabar'
import { getCartItems } from '../redux/cart/cart.action'
import { Button, Card, CardBody, Heading, SimpleGrid, Stack, Image, Text, Divider, CardFooter } from '@chakra-ui/react'


export default function Ordermanage() {
  const { data } = useSelector(store => store.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  return (   
     <>
           <Adnavbar />
      <Button style={{ marginTop: "25px" }}>Placed order Product</Button>
      <SimpleGrid columns={[1, 2, 3]} spacing={['20px', '30px', '40px']}>
        {
          data?.map((el) => {
            return <Card maxW='xs'>
              <CardBody>
                <Image
                  src={el.image}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{el.title}</Heading>
                  <Text color='blue.600' fontSize='2xl'>
                    ${el.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
              </CardFooter>
            </Card>
          })
        }
      </SimpleGrid>
    </>
  )
}
