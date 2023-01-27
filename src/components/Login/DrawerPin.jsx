import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Box,
  Text,
  Image
  
} from '@chakra-ui/react'
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import {FcHome} from "react-icons/fc";
import {GiScooter} from "react-icons/gi";
import {Link} from "react-router-dom"



export function DrawerPin() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button  colorScheme='black' onClick={onOpen} border="none" color="teal">
        Enter Pin <BiChevronDown fontSize="25px"color="teal" />
      </Button> 
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt="60px" fontSize="28px" fontWeight="bold">Choose your Location</DrawerHeader>

          <DrawerBody  pos="relative">
            <Input placeholder='Enter PIN code...' outline="none" _hover={{outline:"none"}} type="number" />
            <Button colorScheme='teal' size='md' pos="absolute" left="215px">Check </Button>
            <Box  display="flex" w="100%" h="90px" alignItems="center" justifyContent="space-around" mt="40px" boxShadow='base' p='6' rounded='md'>
            <FcHome/>
            <Text color="
#008080" fontWeight="bold"><Link to="login">Login to view Addresses</Link></Text>
            </Box>

            <Box  display="flex" w="100%" h="90px" alignItems="center" justifyContent="space-around" mt="40px" boxShadow='base' p='6' rounded='md' bg="#eef4ff">
            <GiScooter fontSize="50px" color="#3ec49f"/>
            <Text ml="20px" fontSize='md'>Serving more than 1,000 town and cities in India.</Text>
            </Box>

            <Box  display="flex" w="100%" h="90px" alignItems="center" justifyContent="space-around" mt="40px" boxShadow='base' p='6' rounded='md' bg="#cdf8ff">
           <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Skype.svg/512px-Skype.svg.png" boxSize="35px"/>
            <Text ml="20px" fontSize='md'>Over 30,00,000 orders safely delivered</Text>
            </Box>
           

          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
    </>
  )
}
