import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

const MenuComponent = (props) => {
  const { username, handleLogout } = props;
  return (
    <>
      <Menu>
        <MenuButton bgColor="#d11243" color="white" as={Button}>
          {username}
        </MenuButton>
        <MenuList>
          {username && <MenuItem onClick={handleLogout}>logout</MenuItem>}
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuComponent;
