import React, { useState } from "react";

import {
  Text,
  HStack,
  PinInput,
  PinInputField,
  Center,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";

const OTP = () => {
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    if (value === "123456") {
      alert("Order Sucessfull");
    }
  });

  return (
    <Box
      mb={"2%"}
      mt={"2%"}
      bgColor={"rgb(234,234,234)"}
      p={"100px"}
      display={"flex"}
      boxShadow={
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
    >
      <Box>
        <Heading m={"50px"}>Validate OTP (One Time Passcode)</Heading>
        <HStack
          m={"50px"}
          p={"10px"}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          }
          justifyContent={"center"}
        >
          <PinInput
            type="num"
            defaultValue="123456"
            onChange={(e) => setValue(e)}
            size="lg"
            mask
          >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </Box>

      <Box>
        <Image
          w={"70%"}
          src="https://cdn.dribbble.com/users/3821672/screenshots/7172846/otp.gif"
        ></Image>
      </Box>
    </Box>
  );
};

export default OTP;
