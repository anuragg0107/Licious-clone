import {
  Stack,
  Input,
  Box,
  Image,
  Text,
  Button,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { backendSite } from "../backendSiteLink/backendSite";
import { PasswordInput } from "./PasswordInput";

const Login = () => {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (email && password) {
      axios
        .post(`${backendSite}/users/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          localStorage.setItem("User_name", res.data.user_name);
          console.log(res);

          alert(res.data.msg);

          if (res.data.token) {
            localStorage.setItem("Token", res.data.token);

            Navigate("/");
            window.location.reload(false);
          } else {
            Navigate("/login");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
        });
    } else {
      alert("Please Fill your credentials");
    }
  };
  return (
    <div>
      <Box w={{base:'80%',sm:"50%",lg:"25%"}} m="auto" >
        <Box borderBottomWidth="1px" w="100%">
          <Box p="4" w="100%" bgColor="#d11243">
            <Image w="100%" src="/images/licious.png" />
          </Box>
        </Box>
        <Stack spacing="24px" mt="10px">
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
              Don't Have an Account?
            </Box>
            <Link to="/signup">
              <Box
                bg="#d11243"
                w="25%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                m="auto"
                borderRadius="3px"
                paddingBottom="2px"
               
              >
                <Box>Register</Box>
              </Box>
            </Link>
          </Box>
          <Box>
            <Text fontSize="xs" textAlign="center">
              By clickng, you agree with our{" "}
              <a color="#0f847d" href="https://www.licious.in/terms">
                {" "}
                <Box color="red">Privacy Policy</Box>
              </a>
            </Text>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
