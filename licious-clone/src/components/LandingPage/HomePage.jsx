import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {Center,Box, List,Container, ListItem, UnorderedList,Text,Image,Input, Menu, MenuButton, Portal, MenuList, MenuItem, Button,Hide} from "@chakra-ui/react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import News from "./News";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./HomePage.css";

function SmapleNextArrow(props){
  const {className,style,onClick}=props
  return(
    <div
    className={className}
    style={{ ...style, display: "block", color: "black",right:"-8px" }}
    onClick={onClick}
  >
    <ChevronRightIcon w={"40px"} h={"40px"} />
  </div>
  )
}
// 

function SmaplePrevArrow(props){
  const {className,style,onClick}=props
  return(
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <ChevronLeftIcon
       w={"40px"} h={"40px"} />
    </div>
  )
}

const HomePage=()=> {
  const [data,setData]=useState([]);
  const [bonelessData, setBonelessData]=useState([])
  const [breakfast,setBreakfast]=useState([])
  const [newsData,setnewsData]=useState([])

  let settings= {
    dots:true,
    infintie:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    nextArrow:<SmapleNextArrow />,
    prevArrow:<SmaplePrevArrow />,
    responsive: [
    {
        breakpoint:1284,
        settings:{
            slidesToShow:3,
            slidesToScroll:1,
            infinite:true,
        },
    }
    ]
  }

  useEffect(()=>{
    axios.get('https://licious-database.vercel.app/bestsellers').then((res)=>{
      setData(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get('https://licious-database.vercel.app/bonelesscuts').then((res)=>{
      setBonelessData(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get('https://licious-database.vercel.app/breakfast').then((res)=>{
      setBreakfast(res.data)
    })
  },[])
  // useEffect(()=>{
  //   axios.get('https://licious-database.vercel.app/news').then((res)=>{
  //     setnewsData(res.data)
  //   })
  // })

  return (
    <div >

     <Box>         
   <Box background={"#eaeaea"}   >
      <Image border='0' src='https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e' alt='jhakaas logo' />
   </Box>
     </Box>
      
   
     <Box >
     <Center>
      <Box w={'70%'}>
        <Text as='h2' className='title_heading' fontSize={"22px"}>Shop by categories</Text>
        <Box className='subtitle_text_name'>
          Freshest meats just for you
        </Box>
        </Box>
        </Center>
        <Center>
      <Box className='shop_categories_data'>
              <UnorderedList className='cateogoires_titles'>
                <ListItem>
                  <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png' alt='todays deals' />
                       </figure>
                      </Box>
                      <Text className='text'>Today's Deals</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png' alt='chicken ' />
                       </figure>
                      </Box>
                      <Text className='text'>Chicken</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png' alt='fish' />
                       </figure>
                      </Box>
                      <Text className='text'>Fish & Seafood</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png' alt='mutton' />
                       </figure>
                      </Box>
                      <Text className='text'>Mutton</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png' alt='ready to cook' />
                       </figure>
                      </Box>
                      <Text className='text'>Ready to Cook</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png' alt='prawns' />
                       </figure>
                      </Box>
                      <Text className='text'>Prawns</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png' alt='cold cuts' />
                       </figure>
                      </Box>
                      <Text className='text'>Cold Cuts</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png' alt='spreads' />
                       </figure>
                      </Box>
                      <Text className='text'>Spreads</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png' alt='eggs' />
                       </figure>
                      </Box>
                      <Text className='text'>Eggs</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png' alt='biryani and kebab' />
                       </figure>
                      </Box>
                      <Text className='text'>Biryani & Kebab</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png' alt='plant based meat' />
                       </figure>
                      </Box>
                      <Text className='text'>Plant Based Meat</Text>
                  </Box>
                </ListItem>
                <ListItem>
                <Box className="list_data">
                      <Box className='list_img_categories'>
                       <figure>
                       <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png' alt='meat masala' />
                       </figure>
                      </Box>
                      <Text className='text'>Meat Masala</Text>
                  </Box>
                </ListItem>
              </UnorderedList>
      </Box>
      </Center>
      </Box>

<Hide below="lg">
   
    <Box className='metaopia_heading'>
        <Box className='metopia_banner_data'>
          <Image className='metopia_logo' src='https://www.licious.in/img/rebranding/loyalty_licious_logo.svg' alt='meatopia-image' />
         <Button className='metopia_join_now'>JOIN NOW</Button>
        </Box>
        <hr></hr>
        <Box className='meatopia_bottom'>
          <b>
          Join MEATOPIA to get free delivery on all orders with cart 
          value more than Rs.99.
          </b>
        </Box>
    </Box>
    
    </Hide>
    <Center>
    <Box className='know_about_licious'>
      <Text as='h2'>Know the Licious way</Text>
    <UnorderedList>
      <ListItem>
        Premium
        <Text>Produce</Text>
      </ListItem>
      <ListItem>
      World-class central
          <Text>Production unit</Text>              
      </ListItem>
      <ListItem>
        150 Quality
        <Text>Checks</Text>
      </ListItem>
      <ListItem>
        Delivered Fresh
        <Text>Everyday</Text>
      </ListItem>
      <ListItem>
        Extraordinary
        <Text>cooking</Text>
      </ListItem>
    </UnorderedList>
    <Box className='discovered_licious_way'>
      Discover How
      <Image  src='https://www.licious.in/img/rebranding/arrow.png' alt='discovered licious' />
    </Box>
    </Box>
    </Center>
    <Hide below="lg">
    <Box className='bank_offer'>
      <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/a5372f18-3f0a-a801-0160-cb20957f3acd/original/static-bank-units-nov-web.jpg?format=webp' alt='bank-offer' />
    </Box>
    </Hide>


   <Box ml='80px' mt='20px'>
       <Text as='h2' fontSize={"22px"} fontWeight="600" color={'#4a4a4a'}
       display={'inline-block'}>Best Sellers</Text>
   </Box>
    
   {/* style={{margin:"auto", justifyContent:"center", width:"85%"}} */}
    <div style={{margin:"auto", justifyContent:"center", width:"85%"}} >
      {/* <Hide></Hide> */}
        <Slider 
        {...settings}>
         {data.map((el)=>{
          return(
            <Box key={el.id}   borderWidth={'1px'} borderRadius='lg' overflow={'hidden'}>
               <Image src={el.image} alt={el.title} 
              
               /> 
                 <Box className='best_seller_item_detail'>
                     <Box className='best_seller_item_title'>
                       <span className='best_seller_product_name'>{el.title}</span>
                     </Box>
                     <Box className='best_seller_item_desc'>{el.subtitle}</Box>
                     <Text className='best_seller_item_weight'>
                     <span>{el.qty}</span>
               </Text>
               <Box className='best_seller_item_action'>
                  <Box className='rate'>
                  <span className='best_seller_price'>₹{el.price}</span>
                    <span  color='#aeaeae'>
                      <span style={{fontSize:"14px"}} color='#aeaeae'  >MRP:</span>
                     <span className='line_through' color='#aeaeae'> ₹{el.mrp}</span> 
                    </span>
                    <span className='offer_discount'>{el.discount}</span>
                  </Box>
                  <Box className='action'>
                    <Box className='action_slider'>
                      <Button>Add To Cart</Button>
                    </Box>
                  </Box>
               </Box>
               <hr></hr>
                 </Box>
                 <Box className='product_messages'>
             <Box className='icon_messages'>
              <Image src='https://www.licious.in/img/rebranding/express_delivery.svg' alt='delivery image' />
              <span className='delivery_time'>{el.time}</span>
             </Box>
           </Box>
            </Box>
          )
         })}
        </Slider>
    </div>
   


    <Box ml='80px' mt='50px' mb='20px'>
       <Text as='h2' fontSize={"22px"} fontWeight="600" color={'#4a4a4a'}
       display={'inline-block'}>Boneless Cuts</Text>
   </Box>
    
    <div  style={{margin:"auto", justifyContent:"center", width:"85%"}}>
        <Slider 
        {...settings}>
         {bonelessData.map((el)=>{
          return(
            <Box key={el.id} margin='auto'  borderWidth={'1px'} borderRadius='lg' overflow={'hidden'}>
               <Image src={el.image} alt={el.title} 
              
               /> 
                 <Box className='best_seller_item_detail'>
                     <Box className='best_seller_item_title'>
                       <span className='best_seller_product_name'>{el.title}</span>
                     </Box>
                     <Box className='best_seller_item_desc'>{el.subtitle}</Box>
                     <Text className='best_seller_item_weight'>
                     <span>{el.qty}</span>
               </Text>
               <Box className='best_seller_item_action'>
                  <Box className='rate'>
                  <span className='best_seller_price'>₹{el.price}</span>
                    <span  color='#aeaeae'>
                      <span style={{fontSize:"14px"}} color='#aeaeae' >MRP:</span>
                     <span className='line_through' color='#aeaeae'> ₹{el.mrp}</span> 
                    </span>
                    <span className='offer_discount'>{el.discount}</span>
                  </Box>
                  <Box className='action'>
                    <Box className='action_slider'>
                      <Button>Add To Cart</Button>
                    </Box>
                  </Box>
               </Box>
               <hr></hr>
                 </Box>
                 <Box className='product_messages'>
             <Box className='icon_messages'>
              <Image src='https://www.licious.in/img/rebranding/express_delivery.svg' alt='delivery image' />
              <span className='delivery_time'>{el.time}</span>
             </Box>
           </Box>
            </Box>
          )
         })}
        </Slider>
    </div>
   
<Box className='reward_section' display='flex'>
   <Box className='reward_banner' display='flex' >
      <Box className='logo'>
        <Image src='https://www.licious.in/img/rebranding/rewards/rewards_icon.svg' alt='reward-logo' />
      </Box>
      <Box className='content' display='flex'>
        <Box className='top_content' display='flex'>
          <Box className='title'>My Rewards</Box>
        </Box>
        <Box className='view_btn'display={"flex"}>
          <span>CLICK TO VIEW</span>
          <Image className='arrow' src='https://www.licious.in/img/rebranding/arrow.png' alt='arrow' />
        </Box>
      </Box>
      <Box className='next_reward'>
        <Text className='desc'>Place an order and win you next reward !</Text>
      </Box>
   </Box>
</Box>



<Box ml='80px' mt='50px' mb='20px'>
       <Text as='h2' fontSize={"22px"} fontWeight="600" color={'#4a4a4a'}
       display={'inline-block'}>Breakfast & Sneaking Specials</Text>
   </Box>
    
    <div  style={{margin:"auto", justifyContent:"center", width:"85%"}}>
        <Slider 
        {...settings}>
         {breakfast.map((el)=>{
          return(
            <Box key={el.id} margin='auto'  borderWidth={'1px'} borderRadius='lg' overflow={'hidden'}>
               <Image src={el.image} alt={el.title} 
              
               /> 
                 <Box className='best_seller_item_detail'>
                     <Box className='best_seller_item_title'>
                       <span className='best_seller_product_name'>{el.title}</span>
                     </Box>
                     <Box className='best_seller_item_desc'>{el.subtitle}</Box>
                     <Text className='best_seller_item_weight'>
                     <span>{el.qty}</span>
               </Text>
               <Box className='best_seller_item_action'>
                  <Box className='rate'>
                  <span className='best_seller_price'>₹{el.price}</span>
                  </Box>
                  <Box className='action'>
                    <Box className='action_slider'>
                      <Button>Add To Cart</Button>
                    </Box>
                  </Box>
               </Box>
               <hr></hr>
                 </Box>
                 <Box className='product_messages'>
             <Box className='icon_messages'>
              <Image src='https://www.licious.in/img/rebranding/express_delivery.svg' alt='delivery image' />
              <span className='delivery_time'>{el.time}</span>
             </Box>
           </Box>
            </Box>
          )
         })}
        </Slider>
    </div>

<Hide below="lg">
   <Box className='blogs'>
    <Box className='header'>
      <Text as='h2'>Check out our blog</Text>
    </Box>
   {/* <Box display={"flex"}> */}
   {/* <UnorderedList className='blog_itmes'>
      <ListItem className='li'>
        <Box className='img_holder'>
          <Image src='https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1903754353.jpg' alt='blogimage1' />
        </Box>
        <Text>Chicken Korma is a Mughlai Classis That Everyone Should Know How to Make!</Text>
      </ListItem>
      <ListItem className='li'>
        <Box className='img_holder'>
          <Image src='' alt='blogimage1' />
        </Box>
        <Text></Text>
      </ListItem>
      <ListItem className='li'>
        <Box className='img_holder'>
          <Image src='' alt='blogimage1' />
        </Box>
        <Text></Text>
      </ListItem> */}
      
    {/* </UnorderedList> */}
    <Box className='checkoutblogs'>
    <Box className='img_holder'>
          <Image src='https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1903754353.jpg' alt='blogimage1' />
          <Text as='h2'>Chicken Korma is a Mughlai Classis That Everyone Should Know How to Make!</Text>
        </Box>
        <Box className='img_holder'>
          <Image src='https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2208727095.jpg' alt='blogimage1' />
          <Text as='h2'>Sri Lankan Chicken Curry is Unmissable - Make this Recipe Today!</Text>
        </Box>
        <Box className='img_holder'>
          <Image src='https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_677330572.jpg' alt='blogimage1' />
          <Text as='h2'>Make The Delectable Chicken Curry With Coconut Milk Easily At Home!</Text>
        </Box>
    </Box>
   {/* </Box> */}
   </Box>
   </Hide>
    <Box className='licious_meat'>
      <Image src='https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db' alt='meat' />
    </Box>


<Box>
  <News />
</Box>



    </div>
  )
}
export default HomePage