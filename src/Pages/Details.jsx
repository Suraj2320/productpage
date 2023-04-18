import { Card, CardBody, Divider, Heading, SimpleGrid, Stack,Image,Text,Flex, Button,Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const {id}=useParams()
  // console.log(params)
  console.log(id,"hello")
  // const productId = match.params._id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://product-h25t.onrender.com/product/${id}`)
      .then((response) => response.json())
      .then((data) =>{
      
      console.log(data,'Hello')
      setProduct(data);
  })
  }, [id]);

  return (
    <>

<Button style={{ marginTop: "25px" }}><Link to="/cart">Go To Product Page</Link></Button>
       <Flex justifyContent="center" alignItems="center">
      <SimpleGrid columns={[1, 2, 3]} spacing={{ base: '20px', md: '30px', lg: '40px' }}>   
        <Card maxW={{ base: 'full', md: 'xs' }} mx={{ md: 'auto' }}>
          <CardBody>
            <Image
              src={product.image}
              alt='Image is not displaying'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'> Name:- {product.title}</Heading>
              <Text color='blue.600' fontSize='2xl'>
                Price :- ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />             
        </Card>
      </SimpleGrid>
    </Flex>
    </>
  );
};
export default Details;
