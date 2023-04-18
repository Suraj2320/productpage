import axios from "axios";
import { Button, Card, CardBody, Heading, SimpleGrid, Stack, Image, Text, Divider, CardFooter, } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart } from "../redux/cart/cart.action";


export default function User(el) {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`https://surajinter.onrender.com/product/get`).then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])

  const handleAdd = (el) => {
    // console.log(el)
    dispatch(
      addItemToCart({
        ...el,
        productId: el._id,
        count: 1,
      })
    );
  };



  return (
    <>

      <Button style={{ marginTop: "25px" }}><Link to="/cart">Go To Cart  Page</Link></Button>
      <SimpleGrid columns={[1, 2, 3]} spacing={{ base: '20px', md: '30px', lg: '40px' }}>
        {data?.map((el) => {
          return (
            <Card maxW={{ base: 'full', md: 'xs' }} mx={{ md: 'auto' }}>
              <CardBody>
                <Image
                  src={el.image}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'> Name:- {el.title}</Heading>
                  <Text color='blue.600' fontSize='2xl'>
                    Price :- ${el.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter display='flex' justifyContent='space-between' alignItems='center'>
               

                <Link
                  to={`/details/${el._id}`}
                  style={{ margin: 'auto', width: '80%' }}
                  variant='solid'
                  colorScheme='blue'
                  w={{ base: 'full', md: 'auto' }}
                  bg='blue.500'
                >
                  VIEW DETAIL
                </Link>


                <Button
                  style={{ margin: 'auto', width: '80%', marginLeft: '30px' }}
                  variant='solid'
                  colorScheme='blue'
                  onClick={() => handleAdd(el)}
                  w={{ base: 'full', md: 'auto' }}
                  mt={{ base: '4', md: '0' }}
                  ml={{ md: '2' }}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
}
