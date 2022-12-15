import React from 'react'
import "./Footer.css";
import { Box,Image, ListItem, UnorderedList,Text } from '@chakra-ui/react';
const Footer = () => {
  return (
    <div>
    <Box className='footer_section'>
      <Box position={'relative'}>
        <Image width='120px' src='https://www.licious.in/img/rebranding/licious-logo.svg' alt='licious-logo'/>
      </Box>
      <Box className='useful_links'>
        <Box className='links'>
          <UnorderedList style={{width:"40%"}}>
            <ListItem className='heading'>UseFul Links</ListItem>
            <ListItem >Why Licious?</ListItem>
            <ListItem >Refer & Earn</ListItem>
            <ListItem >Licious Cash & Cash+</ListItem>
            <ListItem >Careers</ListItem>
            <ListItem >BLOGS</ListItem>
            <ListItem >Campaign</ListItem>
            <ListItem >Bug Bounty Guidelines</ListItem>
            <ListItem >About Us</ListItem>
            <ListItem >FSSC 22000 Certification</ListItem>
            <ListItem >SA8000 Certification</ListItem>
            <ListItem >Sitemap</ListItem>
          </UnorderedList>
          <UnorderedList width={"55%"}>
            <ListItem className='heading'> Experience Licious App on Mobile </ListItem>
          <ListItem className='download_app'>
            <Image pt='4px' pb='10px' width='122px' src='https://www.licious.in/img/rebranding/app-store-new.svg' alt='playstore'/>
            <Image width='122px' src='https://www.licious.in/img/rebranding/play-store-new.png' alt='apple'/>
          </ListItem>
          </UnorderedList>
          <Box className='links contact'>
            <UnorderedList className='contact_us'>
              <ListItem className='heading'>CONTACT US</ListItem>
              <ListItem>	Call: 1800-4190-786</ListItem>
              <ListItem>		REGISTERED OFFICE ADDRESS:</ListItem>
              <ListItem>House of Licious, Zed Pearl, No 12, Domlur Layout	</ListItem>
              <ListItem>	Bangalore, Karnataka - 560071	</ListItem>
            </UnorderedList>
            <UnorderedList className='essential_list'>
              <ListItem >T&C</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Privacy Policies</ListItem>
              <ListItem>House of Licious, Zed Pearl, No 12, Domlur Layout	</ListItem>
              <ListItem className='heading addr'>HAVE SECURITY CONCERN?</ListItem>
              <ListItem>Mail us to:
              security@licious.com
              </ListItem>
            </UnorderedList>
            <UnorderedList >
              <ListItem  >
                <Image className='payment' src='https://www.licious.in/img/rebranding/3-dsecure.png' alt='payment' />
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>

      </Box>
      <Box className='keep_in_touch'>
        <Text pl='116px' textTransform="uppercase">Keep In Touch</Text>
     <a href='https://www.instagram.com/licious_foods/' target={"_blank"}>
      <Image src='https://www.licious.in/img/rebranding/insta_color.png' alt='insta' />
     </a>
     <a href='https://www.facebook.com/LiciousFoods/' target={"_blank"}>
      <Image src='https://www.licious.in/img/rebranding/fb_color.png' alt='insta' />
     </a>
     <a href='https://twitter.com/LiciousFoods' target={"_blank"}>
      <Image src='https://www.licious.in/img/rebranding/twitter_color.png' alt='insta' />
     </a>
      </Box>
      <Box className='city_we_server'>
      <Box className='city_heading' position={'relative'}>
        <span class='city_header'>City We Serve</span>
      </Box>
      <Box className='city_we_served'>
        <Box className='city_name'>Bangaluru</Box>
        <Box className='city_name'>NCR</Box>
        <Box className='city_name'>Hyderabad</Box>
        <Box className='city_name'igarh>Chand</Box>
        <Box className='city_name'>Panchkula</Box>
        <Box className='city_name'>Mohali</Box>
        <Box className='city_name'>Mumbai</Box>
          <Box className='city_name'>Pune</Box>
            <Box className='city_name'>Cheenai</Box>
              <Box className='city_name'>Comibatore</Box>
                <Box className='city_name'>Jaipur</Box>
                <Box className='city_name'>Cochin</Box>
                <Box className='city_name'>Vijayawada</Box>
                <Box className='city_name'>Visakhapatnam</Box>
                  <Box className='city_name'>Kolkata</Box>
                  <Box className='city_name'>Lucknow</Box>
                    <Box className='city_name'>Kanpur</Box>
                    <Box className='city_name'>Nagpur</Box>
      </Box>
    </Box>
    <Box className='popular_search'>
      <Box position={'relative'}>
        <Text as='h1' margin={"0"} fontWeight='500' fontSize="16px" color="#4a4a4a" lineHeight={'2.9'}>
        Popular Searches</Text>
      </Box>
      <Box className='list_items'>
        <UnorderedList>
          <ListItem className='heading'>CHICKEN</ListItem>
          <ListItem>Chicken Breast (Boneless)</ListItem>
          <ListItem>Chicken (Skinless) - Curry Cut (Large)</ListItem>
          <ListItem>Chicken Mince/Keema</ListItem>
          <ListItem>Chicken Leg Curry Cut (Large - 4 pieces)</ListItem>
          <ListItem>Chicken Lollipop - 10 Pieces</ListItem>
          <ListItem>Tender Spring Chicken Curry Cut</ListItem>
          <ListItem>Chicken - Whole with Skin</ListItem>
          <ListItem>Chicken Curry Cut (Small - 13 to 16 Pieces)</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem className='heading'>EGGS</ListItem>
          <ListItem>Classic Eggs - Pack of 6</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem className='heading'>MUTTON</ListItem>
          <ListItem>Goat Mince/Keema</ListItem>
          <ListItem>Rich Goat Curry Cut (Small - 16 to 20 pieces)</ListItem>
          <ListItem>Lean Goat Curry Cut (Small - 16 to 20 pieces)</ListItem>
          <ListItem>Lean Lamb Curry Cut (Small - 16 to 20 pieces)</ListItem>
          <ListItem>Rich Lamb Curry Cut (Small - 16 to 20 pieces)</ListItem>
          <ListItem>Lamb Ribs and Chops</ListItem>
          <ListItem>Goat Ribs and Chops</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem className='heading'>FISH & SEAFOOD</ListItem>
          <ListItem>Basa Fillet (Platinum Grade) </ListItem>
          <ListItem>Premium Grade Mackerel (Cleaned)</ListItem>
          <ListItem>Freshwater Rohu Large - Bengali Cut (w/o Head)</ListItem>
          <ListItem>Freshwater Rohu - Bengali Cut (Without Head)</ListItem>
          <ListItem>Medium Prawns -  Without Tail</ListItem>
          <ListItem>Seer (Surmai) Steaks</ListItem>
          <ListItem>Freshwater Rohu Small - Bengali Cut (without Head)</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem className='heading'>READY TO COOK</ListItem>
          <ListItem>Caribbean Jerk Chicken (Boneless) </ListItem>
          <ListItem>Habanero Chicken Wings (Hot) - 10 Pieces</ListItem>
          <ListItem>Creamy Afghani Chicken</ListItem>
          <ListItem>Peri Peri Chicken (Spicy)</ListItem>
          <ListItem>Chicken Cutlet (Bengali Style)</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem className='heading'>EXOTIC MEATS</ListItem>
          <ListItem>Atlantic Salmon Steaks</ListItem>
          <ListItem>Blue Crab</ListItem>
          <ListItem>Sea Bass/ Bhetki Fillet </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem className='heading'>SPREADS</ListItem>
          <ListItem>Chunky Butter Chicken Spread (Single Serve)</ListItem>
          <ListItem>Chunky Continental Chicken Spread</ListItem>
          <ListItem>Chunky Shawarma Chicken Spread (Single Serve)</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem className='heading'>KEBABAS</ListItem>
          <ListItem>Afghani Murgh Seekh Kebab</ListItem>
          <ListItem>Purani Dilli ki Mutton Seekh Kebab</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem className='heading'>Meat Masala</ListItem>
          <ListItem>Classic Meat Masala</ListItem>
          <ListItem>Dakshin Pepper Fry Masala</ListItem>
          <ListItem>Chatpata Fish Fry Masala</ListItem>
          <ListItem>Classic Chicken Masala</ListItem>
          <ListItem>Asli Garam Masala</ListItem>
          <ListItem>Original Tandoori Chicken Masala</ListItem>
          <ListItem>Shandaar Butter Chicken Masala</ListItem>
        </UnorderedList>
      </Box>
    </Box>
    <Box className='faqs'>
      <Text as='h4'>We will sell only the meat that we would eat ourselves.
      <Text>At Licious, we’re big meat-lovers. And by big, we mean huge.
       So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is 
      handpicked by a team with years of experience.</Text>
      </Text>
      <Text as='h4'>If it’s not fresh, we won’t sell it</Text>
      <Text>For meat to stay fresh and retain its natural juices,
       it needs to be stored at a temperature between 0° and 5°C.
        We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right
       up to your doorstep.Did we mention that we’re obsessed?</Text>
       <Text as='h4'>We will charge only for what you buy</Text>
       <Text>Doesn’t everyone do this? Not really. Most other places 
       first weigh the meat, then cut up the pieces, and throw out the 
       parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original 
       weight even though what you finally get is 10% to 30% less</Text>
    </Box>
    <Box className='disclaimer'>
      <Text as='h5'>
        <Image src='https://www.licious.in/img/rebranding/copyright2.png' alt='logo' />
     <span>2022</span>
     Delightful Gourmet Pvt Ltd. All Rights Reserved.
      </Text>
      <Text as='h5'> 
				Licious is your one-stop fresh meat delivery shop. In here, you get nothing but
				the freshest meat & seafood, delivered straight to your doorstep. Now you can buy
				meat online anytime at your convenience. Indulge in our diverse selection: Chicken,
				Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are 
				completely natural and healthy. Once you've experienced Licious, you'll never
				go back to the old way of buying meat and seafood.
      </Text>
    </Box>
    </Box>
   
    </div>
  )
}

export default Footer