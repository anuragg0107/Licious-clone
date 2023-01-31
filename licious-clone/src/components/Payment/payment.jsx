import React from "react";
import {
  Box,
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
  Text,
  Image,
  Button,
  Input,
  Hide,
  Divider,
  Stack,
} from "@chakra-ui/react";
// import Navbar from "../Navbar/Navbar";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Sum from "./GETTOTAL";
// import { Link } from BrowserRouter
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <Box display={"flex"} mb='25px'>
      {/* <Heading>
        Hope is a good thing may be the best of all thing and no good thing ever
        dies
      </Heading> */}
      {/* <Navbar /> */}

      <Box

        w={{base:"95%",sm:"90%",md:"90%",lg:"60%"}}
        mt={"6%"}
        ml={"6%"}
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="white"
      >
        <Tabs
          orientation="vertical"
          display="grid"
          gridTemplateColumns="auto 1fr"
        >
          <TabList>
            {/* <hr/> */}
            <Tab>
              <Box>
                <Text fontSize={'16px'} >Paytm</Text>
                <Box display={"flex"}>
                  <Image src="https://www.licious.in/img/rebranding/offer.svg"></Image>
                  <Text color={"green"} fontSize={'16px'} >Offers available</Text>
                </Box>
              </Box>
            </Tab>
            {/* <hr/> */}
            <Tab fontSize={'16px'}  >Amazon Pay</Tab>
            {/* <hr/> */}
            <Tab fontSize={'16px'} >Pay using UPI</Tab>
            <Tab fontSize={'16px'} >Credit/Debit Cards</Tab>
            <Tab>
              <Box>
                <Text fontSize={'16px'} >CRED pay</Text>
                <Box display={"flex"}>
                  <Image src="https://www.licious.in/img/rebranding/offer.svg"></Image>
                  <Text fontSize={'16px'}  color={"green"}>Offers available</Text>
                </Box>
              </Box>
            </Tab>
            <Tab fontSize={'16px'} >Sodexo Food Cards</Tab>
            <Tab fontSize={'16px'} >Netbanking</Tab>
            <Tab fontSize={'16px'} >Other wallets</Tab>
            <Tab fontSize={'16px'} >Pay Online on Delivery</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading mb={"10px"} fontSize={'22px'} >Paytm</Heading>
              <Box display={"flex"} mb={"15px"}>
                <Image src="https://www.licious.in/img/rebranding/offer.svg" mt='-15px'></Image>
                <Text color={"green"}  pl='7px'>
                  20-200 Cashback on Paytm Wallet | On orders above 650 | Valid
                  twice per user | Valid everyday
                </Text>
              </Box>
              <Box
                display={"flex"}
                border={"1px solid grey"}
                padding={"10px"}
                m={"10px"}
                borderRadius={"15px"}
              >
                <Image src="https://d2407na1z3fc0t.cloudfront.net/Banner/paytm.png"></Image>
                <Hide below="sm">
                <Text color={"orange"} >(Wallet + Food Wallet + Postpaid)</Text>
                </Hide>
              </Box>
              <Link to="/checkout/otp">
              <Button _hover={{backgroundColor:"#D11243"}} backgroundColor={"#D11243"}  color='#fff' outline={'none'} border='none' m={"10px"} width={"30%"} >
                Pay
              </Button></Link>
            </TabPanel>

            <TabPanel>
              <Heading mb={"10px"} fontSize={'22px'} >Amazon Pay</Heading>

              <Box
                display={"flex"}
                border={"1px solid grey"}
                padding={"20px"}
                m={"10px"}
                h={"60px"}
                borderRadius={"20px"}
              >
                <Image
                  w={10}
                  src="https://d2407na1z3fc0t.cloudfront.net/Banner/logo_pay-primary-fullcolor-positive.png"
                ></Image>
                <Hide below="sm">
                <Text pl='7px' >Amazon Pay</Text>
                </Hide>
              </Box>
              <Button _hover={{backgroundColor:"#D11243"}}  backgroundColor={"#D11243"}  color='#fff' outline={'none'} border='none' m={"10px"} width={"30%"}>
                Pay
              </Button>
            </TabPanel>

            <TabPanel>
              <Heading mb={"10px"} >Pay using UPI</Heading>
              <Box>
                <Box display={"flex"}>
                  <Box w={"150px"} m={"20px"} border={"1px solid grey"}>
                    <Image src="https://d2407na1z3fc0t.cloudfront.net/Banner/GPay@3x.png"></Image>
                  </Box>
                  <Box w={"150px"} m={"20px"} border={"1px solid grey"}>
                    <Image src="https://d2407na1z3fc0t.cloudfront.net/Banner/PaytmUPI@3xNew.png"></Image>
                  </Box>
                </Box>
                <Box display={"flex"}>
                  <Box w={"150px"} m={"20px"} border={"1px solid grey"}>
                    <Image src="https://d2407na1z3fc0t.cloudfront.net/Banner/Phonepe@3x.png"></Image>
                  </Box>

                  <Box w={"150px"} m={"20px"} border={"1px solid grey"}>
                    <Image src="https://d2407na1z3fc0t.cloudfront.net/Banner/More%20UPI@3x.png"></Image>
                  </Box>
                </Box>
              </Box>
            </TabPanel>

            <TabPanel>
              <Heading mb={"10px"}  fontWeight={'600'}>New Card</Heading>
              <Box display={"flex"} mb={"15px"}>
                <Image src="https://www.licious.in/img/rebranding/offer.svg"></Image>
                <Text color={"green"} >15% off | ICICI Bank Credit Cards</Text>
              </Box>
              <Text >
                15% off upto 150 on ICICI Credit Cards | On orders above 750 |
                Valid thrice per user per month | Valid on all days
              </Text>
              <hr />
              <Box display={"flex"} mb={"15px"}>
                <Image src="https://www.licious.in/img/rebranding/offer.svg"></Image>
                <Text  color={"green"}>
                  20% off | CITI Bank Credit & Debit Cards
                </Text>
              </Box>
              <Text >
                20% off upto 300 on all Citi Cards | Minimum order value 800 |
                Valid four times per user | Valid everyday
              </Text>
              <hr />
              <Box display={"flex"} mb={"15px"}>
                <Image src="https://www.licious.in/img/rebranding/offer.svg"></Image>
                <Text  color={"green"}>
                  10% off | Kotak Bank Credit & Debit Cards
                </Text>
              </Box>
              <Text >
                10% off upto 175 on all Kotak Cards | Minimum order value 750 |
                Valid four times per user | Valid from Thu to Fri
              </Text>
              <hr />
              <Box display={"flex"} mb={"15px"}>
                <Image src="https://www.licious.in/img/rebranding/offer.svg"></Image>
                <Text  color={"green"}>20-200 Cashback | LazyPay</Text>
              </Box>
              <Text >
                20-200 cashback on LazyPay | Valid on orders above 199 | Valid
                on first LazyPay transaction on Licious | Valid on all days
              </Text>
              <hr />
              <Box display={"flex"} mb={"15px"}>
                <Image src="https://www.licious.in/img/rebranding/offer.svg"></Image>
                <Text  color={"green"}>
                  20% off | Federal Bank Credit & Debit Cards
                </Text>
              </Box>
              <Text >
                20% off upto 200 on Federal Bank Cards | MOV 399 | Valid twice
                per user | Valid everyday
              </Text>
              <hr />
            </TabPanel>

            <TabPanel>
              <Heading mb={"10px"}  fontWeight={'600'}>CRED Pay</Heading>
              <Box display={"flex"} mb={"15px"}>
                <Image src="https://www.licious.in/img/rebranding/offer.svg" mt='-15px' ></Image>
                <Text color={"green"}  pl='7px'>
                  Pay using CRED pay and get cashback upto Rs.100. Applicable 2
                  times per month
                </Text>
              </Box>

              <Box
                display={"flex"}
                border={"1px solid grey"}
                padding={"20px"}
                m={"10px"}
                h={"60px"}
                borderRadius={"20px"}
              >
                <Image
                  w={10}
                  src="https://d2407na1z3fc0t.cloudfront.net/Banner/CREDcredLOGO.png"
                ></Image>
                <Hide below="sm">
                <Text >CRED Pay</Text>
                </Hide>
              </Box>
              <Button backgroundColor={"#D11243"}  color='#fff' outline={'none'} border='none' m={"10px"} width={"30%"}>
                Pay
              </Button>
            </TabPanel>

            <TabPanel>
              <Input
                type={"number"}
                placeholder={"Card Number"}
                m={"5"} 
                max={15}
              ></Input>
              <hr />
              <Input
                type={"name"} fontFamily="Lato"
                placeholder={"Cardholder Name"}
                m={"5"}
              ></Input>
              <hr />
              <Input type={"number"}  placeholder={"MM / YY"} m={"5"}></Input>
              <hr />
              <Button _hover={{backgroundColor:"#D11243"}} backgroundColor={"#D11243"}  color='#fff' outline={'none'} border='none' m={"10px"} width={"30%"}>
                Pay
              </Button>
            </TabPanel>

            <TabPanel>seven</TabPanel>

            <TabPanel>
              <Heading mb={"10px"}  fontWeight={'600'}>Other wallets</Heading>

              <Box
                display={"flex"}
                border={"1px solid grey"}
                padding={"20px"}
                m={"10px"}
                h={"60px"}
                borderRadius={"20px"}
              >
                <Image
                  w={10}
                  src="https://d2407na1z3fc0t.cloudfront.net/Banner/new-ola2.png"
                ></Image>
                <Hide below="sm">
                <Text >Ola Money</Text>
                </Hide>
              </Box>

              <Box
                display={"flex"}
                border={"1px solid grey"}
                padding={"20px"}
                m={"10px"}
                h={"60px"}
                borderRadius={"20px"}
              >
                <Image
                  w={10}
                  src="https://d2407na1z3fc0t.cloudfront.net/Banner/airtelmoney.png"
                ></Image>
                <Hide below="sm">
                <Text >Airtel Money</Text>
                </Hide>
              </Box>

              <Button _hover={{backgroundColor:"#D11243"}} backgroundColor={"#D11243"}  color='#fff' outline={'none'} border='none' m={"10px"} width={"30%"}>
                Pay
              </Button>
            </TabPanel>

            <TabPanel>
              <Heading fontFamily={'Lato'} fontWeight='600'>Pay Online on Delivery</Heading>
              <Image
                w={"40%"}
                src="https://www.licious.in/img/rebranding/pay_on_delivery.png"
              ></Image>
              <Button backgroundColor={"#D11243"}  color='#fff' outline={'none'} border='none' m={"10px"} width={"30%"} _hover={{backgroundColor:"#D11243"}}>
                Pay
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Hide below="lg">
      <Box w={"30%"} mt={"6%"} ml={"6%"} display={"flex"} >
        <Box>
          <Box>
            <CheckCircleIcon color={"green"} />
          </Box>

          <Box>
            {/* <Stack direction='row' h='120px' p={4} color={'red'} >
            <Divider orientation='vertical' color={'red'} />
          </Stack> */}
          </Box>

          <Box>
            <CheckCircleIcon color={"transparent"} />
          </Box>

          <Box>
            <CheckCircleIcon color={"green"} mt={50} />
          </Box>

          <Box>
            <CheckCircleIcon color={"transparent"} />
          </Box>

          <Box>
            <CheckCircleIcon color={"red"} mt={50} />
          </Box>
        </Box>

        <Box>
          <Box>
            <Heading fontSize={[12, 20]} fontWeight='600' ml='10px'> Address</Heading>
            <Heading fontSize={[10, 17]} color={"#6d6e71"} fontWeight='600'
            whiteSpace={'nowrap'} overflow='hidden' textOverflow={'ellipsis'} margin='7px 10px' width={'318.5px'}>
              5th Floor, SJR Primus, 20th Main Rd, next to Siddam Setty Complex, 5th Block, Koramangala, Bengaluru, Karnataka 560034
            </Heading>
          </Box>

          <Box>
            <Heading fontSize={[12, 20]} mt='40px' ml='10px' fontWeight='600'>
              Delivery Summary
            </Heading>
            <Heading fontSize={[10, 17]} color={"#6d6e71"}  fontWeight='600'
            whiteSpace={'nowrap'} overflow='hidden' textOverflow={'ellipsis'} margin='7px 10px' width={'318.5px'}>
              {/* Dynamic possibilities */}
            </Heading>
          </Box>

          <Box>
            <Heading fontSize={[12, 20]} mt='40px' ml='10px' fontWeight='600'>
              Payment Method
            </Heading>
            <Heading fontSize={[10, 17]} color={"#6d6e71"} fontWeight='600'
            whiteSpace={'nowrap'} overflow='hidden' textOverflow={'ellipsis'} margin='7px 10px' width={'318.5px'}>
              You have no saved cards
            </Heading>
          </Box>

          <Box>
            <Heading fontSize={[12, 20]} mt={75} fontWeight='600' color='#000'>
              Bill Details
            </Heading>
            <Heading fontSize={[10, 18]} color={"#6d6e71"} margin='8px 0'>
            <Flex justifyContent={'space-between'} > Subtotal   :- <Sum/></Flex>
            </Heading>

            <Heading fontSize={[10, 18]} color={"#6d6e71"}  margin='8px 0'>
            <Flex justifyContent={'space-between'}> Delivery Charge   :- <Text>0</Text></Flex>

            </Heading>
            <Heading fontSize={[10, 18]} color={"#6d6e71"}  margin='8px 0'>
            <Flex justifyContent={'space-between'}>  Discount   :- <Text>0</Text></Flex>

            </Heading>
         
            <Heading fontSize={[10, 18]} color={"#6d6e71"}  margin='8px 0'>
            <Flex justifyContent={'space-between'}>  Licious Wallet   :- <Text>0</Text></Flex>

            </Heading>
            <hr/>
            <Heading fontSize={[10, 18]} color={"#6d6e71"} mt={'15px'} >
            <Flex justifyContent={'space-between'}> Total   :- <Sum/></Flex>
            </Heading>
          </Box>
        </Box>
      </Box>

      </Hide>
    </Box>
  );
};

export default Payment;
