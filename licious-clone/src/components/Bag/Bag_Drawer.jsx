import React, { useContext } from "react";
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
// import { AppContext } from "../Context/AppContext";
import { Link} from "react-router-dom";
import MainPage from "../Cart/Mainpage";


const Bag_Drawer = () => {
//   const {userData} = useContext(AppContext);
const { onClose, isOpen,onOpen } = useDisclosure();
  // let totalPrice = 0;
  return (
    <>
    <Button
            // ref={btnRef}
            onClick={onOpen}
            variant="ghost"
            color="black"
            _hover="none"
            fontWeight="400"
            // width="100px"
            fontSize={"14px"}
            colorScheme="gray"
            leftIcon={<Image color={"#000"} cursor="pointer" src='https://www.licious.in/img/rebranding/cart_icon.svg' alt='cart' 
            />}
          >
            {/* {hello} */}Cart
          </Button>
      <Drawer size={['xs','xs', 'sm', 'sm']} placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"24px"} color="black" borderBottomWidth="1px">Order Summary</DrawerHeader>
          <Box border={"1px solid green"} height={"40px"} width={"100%"} backgroundColor={"rgb(65,117,5)"}>
            <Center>
            <Text fontSize={"13px"} color={"white"} marginTop={"10px"}>
            Your cart value is less than ₹399 & delivery charge applies
            </Text>
            </Center>
          </Box>
          <DrawerBody>

            <Box>
             <MainPage/>
            </Box>
          
            
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
            <Box display={"flex"} gap={"120px"}  marginTop={"20px"} backgroundColor={"white"}>
              <Text backgroundColor={"white"}>
              Shipping address
              </Text>
              <Link to="/Address">
              <Button  colorScheme={"white"} borderRadius={"0px"} color={"red"}>Add Address</Button>
              </Link>
            </Box>
            <Box display={"flex"} gap={"140px"} backgroundColor={"white"} >
              <Text>Total:</Text>
              <Button colorScheme={"#7b7b7b"}
              borderRadius={"1%"}
              w={"50%"}
              bg="#7b7b7b"
              color={"white"}
              padding={"10px"}
              >Proceed To Checkout</Button>
            </Box>
            
             
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Bag_Drawer;
