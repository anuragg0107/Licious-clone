import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Input,
  Box,
  Image,
  Text,
  Badge,
  Button,
  FormLabel,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertDialog,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useContext } from "react";
import { FiUser } from "react-icons/fi";
import { PasswordInput } from "./PasswordInput";

import { AppContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";

export function DrawerLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isAuth,
    userLogin,
    setIsAuth,
    email,
    password,
    setEmail,
    setPassword,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const handleClick = () => {
    axios
      .post(`https://reqres.in/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res.data.token);

        userLogin(res.data.token);
        alert("Login Successful");

        onClose();
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        onClose();
      });
  };

  // console.log(token);

  //  console.log(email);
  //  console.log(password);

  return (
    <>
      <Button
        bg="#fafafa"
        onClick={onOpen}
        background="#fff"
        outline={"none"}
        _hover={{ background: "#fff" }}
      >
        {/* <FiUser fontSize="22px" /> */}
        <Image
          padding={"8px"}
          src="https://www.licious.in/img/rebranding/profile_icon.svg"
          alt="profile-logo"
        />
        <Text fontSize="xs" _hover={{ color: "#D11243" }}>
          login
        </Text>
        {/* <BsDot color="red" /> */}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg="#d11243" _hover={{ bg: "#d11243" }} />
          <DrawerHeader borderBottomWidth="1px" w="100%">
            <Box p="4" w="100%">
              <Image src="https://content3.jdmagicbox.com/comp/hyderabad/i2/040pxx40.xx40.190204215146.t7i2/catalogue/licious-delivery-hub-yousufguda-hyderabad-online-websites-for-meat-eazdfnrkqe.jpg?clr=4f2217" />
            </Box>
          </DrawerHeader>

          <DrawerBody mt="40px">
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Email</FormLabel>
                <Input
                  id="username"
                  placeholder="Enter your email id"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Password</FormLabel>
                <PasswordInput password={password} setPassword={setPassword} />
              </Box>

              <Box>
                <Button
                  bg="#d11243"
                  w="100%"
                  _hover={{ bg: "#d11243" }}
                  onClick={handleClick}
                  mt="20px"
                >
                  Submit{" "}
                  {isLoading && (
                    <div>
                      <Spinner color="red.500" />
                    </div>
                  )}
                </Button>
              </Box>
              <Box>
                <Text fontSize="xs">
                  By clickng, you agree with our{" "}
                  <a color="#ffdc93" href="https://www.licious.in/terms">
                    {" "}
                    <Badge
                      display="inline"
                      variant="subtle"
                      textTransform="lowercase"
                      colorScheme="green"
                    >
                      Privacy Policy
                    </Badge>
                  </a>
                </Text>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose} bg="#d11243">
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {isError && alert("password and email do not match")}
    </>
  );
}
