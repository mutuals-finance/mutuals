"use client";

import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@mutuals/ui";
import { IoChevronDown } from "react-icons/io5";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton
        size={"sm"}
        as={Button}
        aria-label="Open theme menu"
        leftIcon={colorMode === "dark" ? <RiMoonFill /> : <RiSunLine />}
        rightIcon={<IoChevronDown rotate={colorMode === "dark" ? 0 : 0.5} />}
      >
        {colorMode === "dark" ? "Dark" : "Light"}
      </MenuButton>

      <MenuList>
        <MenuItem
          aria-label="Enable light theme"
          icon={<RiSunLine />}
          onClick={() => setColorMode("light")}
        >
          Light
        </MenuItem>

        <MenuItem
          aria-label="Enable dark theme"
          icon={<RiMoonFill />}
          onClick={() => setColorMode("dark")}
        >
          Dark
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
