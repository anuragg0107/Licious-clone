import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import {AppContext} from "../Context/AppContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  Text,
  Button,
  Center,
  Image,
  Spacer,
  useDisclosure
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MainPage from "../Cart/Mainpage";



const Bag_Drawer = ({ onClose, isOpen }) => {
     const {userData} = useContext(AppContext);
     let totalPrice=0;
  // const { onClose, isOpen, onOpen } = useDisclosure();
  const navigate = useNavigate();
  // let totalPrice = 0;
  const goToAddressPage = () => {
    onClose();
    navigate("/address");
  }
  return (
    <>
      {/* <Button
        // ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="black"
        _hover="none"
        fontWeight="400"
        // width="100px"
        fontSize={"14px"}
        colorScheme="gray"
        leftIcon={
        <Image color={"#000"} cursor="pointer"
         src='https://www.licious.in/img/rebranding/cart_icon.svg' 
         alt='cart'
        />}
      >
        Cart
      </Button> */}
      <Drawer size={['xs', 'xs', 'sm', 'sm']}
       placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"24px"} color="black" 
          borderBottomWidth="1px">Order Summary</DrawerHeader>
          <Box border={"1px solid green"} height={"40px"} 
          width={"100%"} backgroundColor={"rgb(65,117,5)"}>
            <Center>
              <Text fontSize={"13px"} color={"white"} marginTop={"10px"}>
                Your cart value is less than ₹399 & delivery charge applies
              </Text>
            </Center>
          </Box>
          <DrawerBody>

            <Box>
              <MainPage />
            </Box>

            {/* <Box border={"1px solid black"} height={"56%"} overflowY={"scroll"}>
                {userData?.map((el) => (
                  <Box padding={"5px 10px"}>
                    <Flex gap={2}>
                      <Box h={"100px"} w={"250px"}>
                        <Image h={"100px"} w={"100%"} src={el.image}/>
                      </Box>
                      <Box>
                        <Text noOfLines={2}>{el.name}</Text>
                        <Text>Rs.{el.price}</Text>
                      </Box>
                    </Flex>
                    </Box>
                ))}
            </Box> */}


            <Text marginTop={"15px"} fontSize={"14px"} >Stop paying delivery charges. Join Meatopia today!</Text>

            <Box marginTop={"15px"} >
              <Center>
                <Image src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63617b4964e45" height={"80px"} w={"100%"}></Image>
              </Center>
            </Box>
            <Text marginTop={"15px"} >You May Want To Try</Text>

            <Box marginTop={"15px"} >
              <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7a72cb59-4ca0-87b6-7fa1-d8f925f6cdbc/original/Purani-Dilli-ki-Mutton-Seekh-Kebab-.jpg" w={"40%"}></Image>
            </Box>
            <Box display={"flex"} gap={"120px"} marginTop={"20px"} backgroundColor={"white"}>
              <Text backgroundColor={"white"}>
                Shipping address
              </Text>
              <Button colorScheme={"white"} borderRadius={"0px"} color={"red"} onClick={goToAddressPage}>Add Address</Button>
            </Box>
            <Link to='/checkout'>
            <Box display={"flex"} gap={"140px"} backgroundColor={"white"} >
              {/* <Text>Total:</Text> */}
            
              <Button _hover={{backgroundColor:"#D11243"}} backgroundColor={'#D11243'}
                borderRadius={"5px"}
                textAlign='center'
        border={'none'}
        fontWeight='600' transition={'all 50ms ease-out'}
                w={"50%"}
                color={"white"}
                padding={"10px"} fontSize='15px'
                boxShadow='0 0 15px rgb(0 0 0 /20%)'
              >Proceed To Checkout</Button>
             
            </Box>
       </Link>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Bag_Drawer;
