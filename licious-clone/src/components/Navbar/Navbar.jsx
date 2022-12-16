import React from 'react'
import {Box, List,useDisclosure, ListItem, UnorderedList,Text,Image,Input, Menu, MenuButton, Portal, MenuList, MenuItem, Button} from "@chakra-ui/react";
import "./Navbar.css";
import { Link, useParams } from "react-router-dom";
import Bag_Drawer from '../Bag/Bag_Drawer';
import Login from '../Login/Login';
import { DrawerLogin } from "../Login/DrawerLogin";
import { AppContext } from "../Context/ContextProvider";
import { ProfileMenu } from "../Login/ProfileMenu";
const Navbar = () => {
  const { isAuth } = React.useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBag = useDisclosure();
  return (
    <>
      <Box className='header_wrapper'>
                <Box className='navbar_top'>
                    <Box className='container'>
                          <Box className='header_menu'>
                              <UnorderedList>
                                <ListItem className='why_licious'>Why Licious?</ListItem>
                                <ListItem className='download'>
                                  <Text as='span'>Download App</Text>
                                  <a href='https://itunes.apple.com/in/app/buy-meat-online-licious/id1052440342?mt=8'
                                  target={"_blank"}>
                                    <Image  src= "https://www.licious.in/img/rebranding/ios_app_icon.svg" alt='apple_Store' />
                                  </a>
                                  <a href='https://play.google.com/store/apps/details?id=com.licious&pli=1' target={"_blank"}>
                                    <Image  src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="play_store" />
                                  </a>
                                </ListItem>
                              </UnorderedList>
                          </Box>
                          <Box className='header_right'>
                                 <UnorderedList>
                                  <ListItem className='certification'>FSSC 200 Certification </ListItem>
                                  <ListItem className='about-us'>About Us</ListItem>
                                  <ListItem className='careers'>Careers</ListItem>
                                  <ListItem className='contact-us'>Contact Us</ListItem>
                                 </UnorderedList>
                          </Box>
                    </Box>
                </Box>

                <Box className='bottom_header'>
                     <Box className='bottom_container'>
                         <Box className='bottom_header_logo'>
                              <a href='#'>
                                <Image src='https://www.licious.in/img/rebranding/licious-logo.svg' alt='licious_logo' />
                              </a>
                         </Box>
                         <Box className='location'>
                              <Image src='https://www.licious.in/img/rebranding/location_icon.svg' alt='location' />
                              <Box className='city_location'>
                                <Box className='city'>Bengaluru</Box>
                                <Box className='location_data'>
                                  <Box className='location_name'>home</Box>
                                  <Image src='https://www.licious.in/img/rebranding/down-arrow.png' alt="drop-down" style={{height:"7px",width:"11px",margin:"5px 0 0 8px"}} />
                                </Box>
                              </Box>
                              <Box className='loc_screen'></Box>
                         </Box>
                         <Box className='search_bar disabled'>
                             <Input className='search_input' placeholder='Search for any delicious product' type={'search'} />
                                {/* <span className='search_placeholder'>Search for any delicious product</span> */}
                             {/* <Image src='https://www.licious.in/img/rebranding/search_icon.svg' alt='search-logo' className='search_logo' /> */}
                         </Box>
                         <Box className='categories_menu'>
                          <Image src='https://www.licious.in/img/rebranding/category-dropdown-icon.svg' alt='categories' />
                          <Box className='cateogires_menu' _hover={{color:"#D11243"}}>
                           <Menu>
                              <MenuButton _hover={{color:"#D11243"}} style={{marginLeft:"10px",fontSize:"12px",lineHeight:"14px",color:"#000"}} className='categories_icon_scrollbar'>Categories</MenuButton>
                              <Portal className='categories_icon_scrollbar'>
                                <MenuList className='scroll_data_head'  display={"inline-grid"} 
                               overflow='hidden'   borderRadius={"8px"} padding='20px' 
                                backgroundColor={"#fff"} boxShadow="0 2px 12px 0 rgb(0 0 0 / 16% ) " marginLeft={"-100px"} marginTop="14px">
                                 <a className='scroll_data' href="#"><Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png' alt='todays deals' height={"36px"} width="36px" margin={"10px 14px 6px 10px"}  /> <MenuItem color="#4b4f54" fontWeight={"500"} lineHeight="19px" fontSize={"16px"} background={"#fff"}>Today's Deals</MenuItem></a>
                                 <a className='scroll_data'><Image height={"36px"} width="36px"  margin={"10px 14px 6px 10px"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png' alt='chicken' className='categories_img' /> <MenuItem background={"#fff"} color="#4b4f54" fontWeight={"500"} lineHeight="19px" fontSize={"16px"}>Chicken</MenuItem></a>
                                 <a className='scroll_data'><Image height={"36px"} width="36px"  margin={"10px 14px 6px 10px"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png' alt='fish' /> <MenuItem background={"#fff"}>Fish & Seafood</MenuItem></a>
                                  <a className='scroll_data'><Image height={"36px"} width="36px"  margin={"10px 14px 6px 10px"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png' alt='mutton' /> <MenuItem background={"#fff"} color="#4b4f54" fontWeight={"500"} lineHeight="19px" fontSize={"16px"}>Mutton</MenuItem></a>
                                  <a className='scroll_data'><Image height={"36px"} width="36px"  margin={"10px 14px 6px 10px"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png' alt='ready to cook' /> <MenuItem background={"#fff"}color="#4b4f54" fontWeight={"500"} lineHeight="19px" fontSize={"16px"}>Ready to Cook</MenuItem></a>
                                  <a className='scroll_data'><Image height={"36px"} width="36px"  margin={"10px 14px 6px 10px"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png' alt='prawns' /><MenuItem color="#4b4f54" fontWeight={"500"} lineHeight="19px" fontSize={"16px"} background={"#fff"}>Prawns</MenuItem></a>
                                  <a className='scroll_data'><Image height={"36px"} width="36px"  margin={"10px 14px 6px 10px"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png' alt='cold cuts'/><MenuItem background={"#fff"} color="#4b4f54" fontWeight={"500"} lineHeight="19px" fontSize={"16px"}>Cold Cuts</MenuItem></a>
                                  <a className='scroll_data'><Image height={"36px"} width="36px"  margin={"10px 14px 6px 10px"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png' alt='spread' /><MenuItem background={"#fff"} color="#4b4f54" fontWeight={"500"} lineHeight="19px" fontSize={"16px"}>Spread</MenuItem></a>
                                  <a className='scroll_data'><Image height={"36px"} width="36px"  margin={"10px 14px 6px 10px"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png' alt='eggs' /><MenuItem background={"#fff"} color="#4b4f54" fontWeight={"500"} lineHeight="19px" fontSize={"16px"}>Eggs</MenuItem></a>
                                </MenuList>
                              </Portal>
                           </Menu>
                         </Box>
                          {/* <span>Categories</span> */}
                         </Box>
                        

                        <Box className='profile_section'>
                            <Box className='profile'>
                              <a href="#">
                                <Box className='profile_container'>
                                  {/* <Box className='profile_logo'>
                                    <Image padding={"8px"} src='https://www.licious.in/img/rebranding/profile_icon.svg' alt='profile-logo'
                                     />
                                  </Box> */}
                                  <Box className="username_container" background={"#fff"}>
                      {/* <Box className="user_login">Login</Box> */}
                      {isAuth ? <ProfileMenu /> : <DrawerLogin />}
                    </Box>
                                  <Box className='username_container'>
                                    {/* <Box className='user_login'>Login</Box> */}
                                  </Box>
                                </Box>
                              </a>
                            </Box>
                            <Box className='cart_section'>
                              <a className='cart_data'>
                              <Image color={"#000"} cursor="pointer" src='https://www.licious.in/img/rebranding/cart_icon.svg' alt='cart' 
                                onClick={() => drawerBag.onOpen()}/>
                              </a>
                            </Box>
                            <Box className='cart_details'>
                              <Text className='cart_text'>Cart</Text>
                            </Box>
                        </Box>
                     </Box>
                </Box>
                </Box>
                <Bag_Drawer onClose={drawerBag.onClose} isOpen={drawerBag.isOpen}/>
                {/* <Login onClose={drawerBag.onClose} isOpen={drawerBag.isOpen} />      */}
    </>
  )
}

export default Navbar