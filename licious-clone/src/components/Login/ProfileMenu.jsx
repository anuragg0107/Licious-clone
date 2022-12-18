import {
  Menu,
  MenuButton,
  MenuList,Box,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Text,
  Flex,Image
} from "@chakra-ui/react";
import { AppContext } from "../Context/ContextProvider";
import { useContext } from "react";
import { FiUser } from "react-icons/fi";

export const ProfileMenu = () => {
  const { userLogout, email } = useContext(AppContext);
  return (
    <Menu>
      <MenuButton>
        <Flex>
          <FiUser fontSize="22px" />
          <Text>Profile</Text>
         
        </Flex>
      </MenuButton>

      <MenuList>
        <MenuGroup title="Profile">
        <Box  >
            <Image width='10px' height='18.6px' src='https://www.licious.in/img/rebranding/loyalty_licious_logo.svg' alt='logo' />
          <Box backgroundColor={"#d11243"} textAlign='center'  border='none'color={"#fff"} fontSize='10px' fontWeight={"700"} padding="4px 8px" >JOIN NOW</Box>
          </Box>
          <MenuItem disabled>Account </MenuItem>
          <MenuItem>
            {" "}
            <Text fontSize="16px" color="black">
              {email}{" "}
            </Text>
          </MenuItem>
          <MenuItem>My Rewards </MenuItem>

          <MenuItem>My Orders</MenuItem>
          <MenuItem>Refer a Friend</MenuItem>
          <MenuItem onClick={() => userLogout()}>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
