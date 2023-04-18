import { Button, Card, CardBody, Heading, SimpleGrid, Stack,  Image, Text, Divider, CardFooter,  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Adnavbar from '../Components/Adnavabar'
import { deleteProduct, getProduct } from '../redux/products/product.action'

export default function Productmanage() {
  const { data } = useSelector(store => store.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [])
  
  const handleDelete = (el) => {
    dispatch(deleteProduct(el._id))
  }
  return (
    <>

          <Adnavbar />
      <Button style={{ marginTop: "25px" }}>Manage Product</Button>
      <SimpleGrid columns={[1, 2, 3]} spacing={{ base: '20px', md: '40px' }}>
        {data?.map((el) => {
          return (
            <Card maxW='xs'>
              <CardBody>
                <Image
                  src={el.image}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Title :- {el.title}</Heading>
                  <Text color='blue.600' fontSize='2xl'>
                   Price :- ${el.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>                
                <Button
                  style={{ margin: 'auto', width: '80%' }}
                  // variant='ghost'
                  colorScheme='red'
                  onClick={() => handleDelete(el)}
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  )
}
