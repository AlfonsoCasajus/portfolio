'use client'

// Components
import { Navbar, NavbarContent, NavbarItem, Avatar } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

// Icons
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

// Hooks
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function NavBar() {

  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), [])


  if (!mounted) return;

  return (
    <Navbar className="bg-gray-100 dark:bg-slate-800">
      <NavbarContent justify="start">
        <Avatar
          isBordered
          className="transition-transform"
          color="primary"
          name="Alfonso Casajus Ponce"
          size="md"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <span>
          <p className="text- dark:text-white">Alfonso Casajus Ponce</p>
          <small className="dark:text-white">Software Developer</small>
        </span>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem isActive>
           Traduccion Ingles / Español
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            defaultSelected
            color="warning"
            endContent={<FaMoon  />}
            size="lg"
            startContent={<FiSun />}
            onValueChange={(isSelected) => isSelected ? setTheme('light') : setTheme('dark')}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};