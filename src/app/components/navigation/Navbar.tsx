'use client'

// Components
import { Navbar, NavbarContent, NavbarItem, Switch, User, Select, SelectItem, Avatar } from "@nextui-org/react";

// Icons
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

// Hooks
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function NavBar() {

  const [mounted, setMounted] = useState(false)
  // const [showNavbar, setShowNavbar] = useState(false)

  const { theme, setTheme } = useTheme();

  const languages = [
    { key: "es", label: "Castellano", flag: 'ar' },
    { key: "brt", label: "Ingles", flag: 'gb' }
  ]

  // const handleScroll = () => {
  //   if (window.scrollY > 20) setShowNavbar(true)
  //   else setShowNavbar(false)
  // }

  useEffect(() => setMounted(true), [])
  // useEffect(() => window.addEventListener('scroll', handleScroll), [])


  if (!mounted) return;

  return (
    <Navbar position="sticky" className="justify-around">
      <NavbarContent justify="start">
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          description="Web developer"
          name="Alfonso Casajus"
          className="dark:text-white"
        />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            isSelected={ theme === 'light' }
            color="warning"
            endContent={<FaMoon  />}
            size="lg"
            startContent={<FiSun />}
            onValueChange={(isSelected) => isSelected ? setTheme('light') : setTheme('dark')}
          />
        </NavbarItem>
        <NavbarItem>
          <div className="w-48">
            <Select
              defaultSelectedKeys={["es"]}
              disallowEmptySelection
            >
              {
                languages.map((language) => (
                  <SelectItem
                    key={language.key}
                    startContent={<Avatar alt={`${language.label}`} className="w-6 h-6" src={`https://flagcdn.com/${language.flag}.svg`} />}
                  >
                    {language.label}
                  </SelectItem>
                ))
              }
            </Select>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};