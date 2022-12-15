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
} from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";
import { Link, useParams } from "react-router-dom";


const Login = ({ onClose, isOpen }) => {
//   const {userData} = useContext(AppContext);
  let totalPrice = 0;
  return (
    <>
      <Drawer size={['xs','xs', 'sm', 'sm',]} placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"24px"} color="black" borderBottomWidth="1px">Bag</DrawerHeader>
          <DrawerBody>
            <Box border={"1px solid black"} height={"56%"} overflowY={"scroll"}>
                {/* {userData?.map((el) => (
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
                ))} */}
            </Box>
            <Box marginTop={"25px"}>
              <Text marginTop={"21px"} fontSize={"12.5px"}>FREE SHIPPING OVER Rs.499/-</Text>
              <Text fontSize={"12.5px"}>COD NOT APPLICABLE BELOW Rs.499</Text>
              <Link to="checkout">
              <Button

              marginTop={"20px"}
                colorScheme={"#7b7b7b"}
                borderRadius={"0px"}
                w={"100%"}
                bg="#7b7b7b"
                color={"white"}
              >
                CHECKOUT
              </Button>
              </Link>
              <Center>
                <Text fontSize={"11px"} color={"#FF6781"}>100% Purchase Protection</Text>
              </Center>
              <Center>
                <Image src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_2_71095016-e5c2-48f5-a50f-fbf011232ef2.png?v=1655301396" />
              </Center>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Login;
