import {
  Stack,
  Input,
  Box,
  Image,
  Text,
  Badge,
  Button,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { backendSite } from "../backendSiteLink/backendSite";
import { PasswordInput } from "../Signin/PasswordInput";

const Register = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (name && email && password) {
      axios
        .post(`${backendSite}/users/register`, {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          // console.log(res.data.token);
          console.log(res.data.msg);
          alert(res.data.msg);
          Navigate("/login");
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
        });
    } else {
      alert("Please Fill The Required Fields");
    }
  };

  return (
    <div>
      <Box w="20%" m="auto">
        <Box borderBottomWidth="1px" w="100%">
          <Box
            p="4"
            w="100%"
            display="flex"
            justifyContent="center"
            alignContent="center"
            bgColor="#d11243"
          >
            <Image w="100%" src="/images/licious.png" />
          </Box>
        </Box>
        <Stack spacing="24px" mt="10px">
          <Box w="100%">
            <FormLabel htmlFor="username"> Name</FormLabel>
            <Input
              w="100%"
              placeholder="Enter your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="username">Email</FormLabel>
            <Input
              w="100%"
              placeholder="Enter your email id"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="username">Password</FormLabel>
            <PasswordInput password={password} setPassword={setPassword} />
          </Box>

          <Box>
            <Button bg="#d11243" w="100%" onClick={handleClick} mt="20px">
              Submit{" "}
              {isLoading && (
                <div>
                  <Spinner color="red.500" />
                </div>
              )}
            </Button>
            <Box mt="5px" mb="5px" textAlign="center">
              Have an account?{" "}
            </Box>
            <Link to="/login">
              <Box
                bg="#d11243"
                w="25%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                m="auto"
                borderRadius="3px"
                paddingBottom="2px"
                vertical-align="super"
                fontSize="12px"
                fontWeight="500"
                line-height="20px"
                padding-top="10px"
              >
                <Box>Login</Box>
              </Box>
            </Link>
          </Box>
          <Box>
            <Text fontSize="xs" textAlign="center">
              By signing up, you agree to our
              <a color="#0f847d" href="https://www.licious.in/terms">
                {" "}
                <Box w="100%" margin="auto" padding="4px" color="red">
                  Privacy Policy
                </Box>
              </a>
            </Text>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Register;
