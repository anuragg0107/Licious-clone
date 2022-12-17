import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Divider,
  } from "@chakra-ui/react";
  import source_image from "./source_image.jpg";
  import delhivery_image from "./delhivery_image.jpg";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { Link, useParams } from "react-router-dom";
  import { addProductToCart, getProducts } from "../../Redux/ProductReducer/action";
  
  export default function ProductDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const chicken = useSelector((state) => state.reducer.chicken);
  
    useEffect(() => {
      if (chicken.length === 0) {
        let cat = chicken;
        dispatch(getProducts(cat));
      }
    }, [chicken?.length, dispatch]);
  
    useEffect(() => {
      if (id) {
        const temp = chicken.find((item) => item.id === Number(id));
        //   console.log(temp)
        temp && setCurrentProduct(temp);
      }
    }, [chicken, id]);
  
    const addToCartFunction = () => {
      console.log(currentProduct);
      currentProduct && dispatch(addProductToCart(currentProduct));
    };
    // console.log(chicken);
    console.log(currentProduct);
  
    return (
      <Container maxW={"7xl"} mt="2rem" boxShadow={" rgba(0, 0, 0, 0.1) 0px 10px 50px"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
          borderRadius="5px"
        >
          <Flex >
            <Image          
              rounded={"md"}
              alt={"product image"}
              src={currentProduct.image}
              fit={"contain"}
              align={"center"}
              w={"100%"}            
              h={{ base: "100%", sm: "400px", lg: "500px" }}
              boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }} alignItems="left">
            <Box as={"header"} >
              <Heading
                lineHeight={1.1}
                fontWeight={500}
                textAlign="left"
                fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}              
              >
                {currentProduct.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"md"}
                textAlign="left"
              >
                {currentProduct.category}
              </Text>
              <Divider color="black" />
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }} textAlign="left" >
                <Text                  
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Keep your chopping board aside, our special nakhras have curated special cuts of chicken for 
                  Chicken Popcorn, Garlic Chicken Bites, Chicken Nuggets and more!
                </Text>
                <Text
                  fontSize={"md"}
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Our Chicken Mini Bites (Boneless) is made by cutting fresh boneless chicken into bite-sized pieces. 
                  You can use them to whip up easy toppings for your pizzas, salads, pastas, the possibilities are endless.
                </Text>
                <Text
                  fontSize={"md"}
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Licious chickens are raised on biosecure farms and are antibiotic residue-free. They are cut and 
                  cleaned by experts so you can cook them straight off the pack.Our fresh chicken cuts are stored in 
                  temperature-controlled conditions, between 0-4?, to ensure that it is chilled, never frozen.
                </Text>
                <Text
                  fontSize={"md"}
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Order Licious Chicken Mini Bites (Boneless) online and get it home delivered.
                </Text>
              </VStack>
              <Box
                border="1px solid grey"
                height="100px"
                borderRadius={"5px"}
                padding="20px"
              >
                <Flex justifyContent={"space-between"}>
                    <div className="picess_class22">
                        <Image className="piecess_image111" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Pieces.png" alte="pices_image11" />
                        <Text>No. of Pieces:14-16</Text>
                    </div>

                    <div className="picess_class22">
                        <Image className="piecess_image111" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Serves.png" alte="serve_image11" />
                        <Text>Serve 4</Text>
                    </div>
                  
                </Flex>
                <Divider margin={"5px"} />
                <Flex justifyContent={"space-between"}>
                  <div className="picess_class22">
                      <Image className="piecess_image111" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Netwt.png" alte="grams_image11" />
                      <Text>526gms</Text>
                  </div>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent={"space-between"}>
                  <Text
                    color="#d11243"
                    fontWeight={700}
                    fontSize={"30px"}
                  >
                    ₹{currentProduct.price}
                  </Text>
                  <Button
                    fontSize= {"11px"}
                    textTransform= {"uppercase"}
                    color= {"#fff"}
                    border= {"none"}
                    cursor= {"pointer"}
                    fontWeight= {"600"}
                    borderRadius= {"5px"}
                    backgroundColor= {"#D11243"}
                    height= {"36px"}
                    width= {"100px"}
                    onClick={addToCartFunction}
                  >
                    Add to cart
                  </Button>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent={"space-between"}>
                  <Text color="#d11243"> Only the Safest Chicken!</Text>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"left"}
                  >
                    <div className="picess_class22">
                      <Image className="piecess_image111" src="https://www.licious.in/img/rebranding/express_delivery.svg" alte="delivery_image11" />
                    <Text>Today in 90 min</Text>
                  </div>
                  </Stack>
                </Flex>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
        <Image
          src={source_image}
          alt="Dan Abramov"
          size="full"
          mt="-50px"
          boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"}
        />
        <Image
          src={delhivery_image}
          alt="Dan Abramov"
          size="full"
          mt="20px"
          boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"}
          marginBottom={"50px"}
        />
      </Container>
    );
  }
  
  