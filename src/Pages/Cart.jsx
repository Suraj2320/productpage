import { Box, Image } from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Checkout from "../Components/Checkout";
import { alldlt, getCartItems, removeItemFromCart, updateCartItem } from "../redux/cart/cart.action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { data } = useSelector((store) => store.cart);

  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].price * data[i].count
  }
  let discount = Math.floor((total / 100) * 10)

  const handleUpdate = (id, newCount) => {

    if (newCount === 0) {

      dispatch(removeItemFromCart(id));

    } else {
      console.log(id)
      dispatch(updateCartItem(id, { count: newCount }));

    }
    // dispatch(getCartItems()) 
  };

  useEffect(() => {
    dispatch(getCartItems())
  }, [])


  const handleBl=()=>{

    alert("Order placed Succesfully")
  }
 



  return (
    <>
      <div className="cart-body">

        <br />
        <br />  <br />
        <h3 style={{ fontSize: "20px", fontWeigth: "600", textAlign: "center" }}>Your Cart</h3>

        <hr />

        <Box display={{ lg: "flex" }} flexDirection={{sm: "column", md: "row"}} justifyContent={{ sm: "center", md: "space-around" }} alignItems={{sm: "center", md: "flex-start"}} w='90%' m='auto'>
  <Box w={{ sm: "100%", md: "65%", lg: "35%" }}>
    <br />
    <br />
    {data?.map((el) => (
      <Box key={el._id} h={{ sm: '250px', md: '200px', lg: '150px' }} m="auto" marginBottom='15px' display='flex' justifyContent='space-between'>
        <Box w={{ sm: '40%', md: '30%', lg: '25%' }} h='100%'>
          <Image h='100%' src={el.image} />
        </Box>
        <Box w={{ sm: '55%', md: '65%', lg: '70%' }} h='100%' display='flex' flexDirection='column' justifyContent="space-evenly">
          <h1 style={{ fontWeight: "600", fontSize: { sm: "16px", md: "20px", lg: "22px" }, textAlign: "left" }}>{el.title}</h1>

          <Box display='flex' justifyContent='space-around' g={{ sm: "8vw", md: "10vw", lg: "15vw" }}>
            <p style={{ textAlign: "left" }}>Price: ₹{el.price}</p>
            <Box display='flex' alignItems='center'>
              <Box border="1px" backgroundColor='red' color='white' h='30px' w='18px' textAlign={"center"} cursor={"pointer"} onClick={() => handleUpdate(el._id, el.count - 1)}>-</Box>
              <span style={{ border: "1px solid black", height: "28px", width: "18px", marginLeft: "0px", textAlign: "center" }} >{el.count}</span>
              <Box border="1px" backgroundColor='green' color='white' h='30px' w='18px' textAlign={"center"} cursor={"pointer"} onClick={() => handleUpdate(el._id, el.count + 1)}>+</Box>
            </Box>

          </Box>
        </Box>

      </Box>

    ))}


          </Box>



          <Box>
            <Box>
              <Checkout/>
            </Box>
          <Box m='auto' w={{ sm: "100vw", md: "60vw", lg: "30vw" }}>
            <h1 style={{ fontSize: "17px", fontWeight: "500", textAlign: "center" }}>Total Summary</h1>
            <br />
            <Box display='flex' justifyContent='space-around'><h3>Total</h3><h3>₹ {Math.floor(total)}</h3></Box>
            <br />
            <Box display='flex' justifyContent='space-around'><h3>(-)Discount</h3><h3>- ₹ {discount}</h3></Box>
            <br />
            <Box display='flex' justifyContent='space-around'><h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Total Payable</h3><h3 style={{ fontSize: "20px", fontWeight: "bold" }}>₹ {Math.floor(total - discount)}</h3></Box>
            <br />
            <Box background='black' textAlign={"center"} p={"3"} w={{ sm: "40vw", md: "25vw", lg: "20vw" }} m={"auto"} color='white' cursor={"pointer"} onClick={handleBl()} >PAY NOW</Box>
          </Box>

          </Box>
       


        </Box>


      </div>
    </>
  );
};

export default Cart;