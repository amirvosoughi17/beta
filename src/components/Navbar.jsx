"use client";

import { useDispatch, useSelector } from "react-redux";
import { forwardRef } from "react";
import { fetchUserData } from "@/utils/userActions";
import { selectUserInfo, selectIsAuthenticated } from "@/redux/user/userSlice";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import navLogo from "@/assets/whit-logo.png";
// react icons
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center">
      <header className="w-[93%] md:w-[95%] lg:w-[85%] xl:w-[80%] max-x-[1200px]  mx-auto h-[63px] lg:h-[68px]  bg-[#141414dc] fixed top-5 md:top-8 backdrop-blur-xl  rounded-full px-2.5 md:px-3">
        <div className="flex items-center justify-between w-full h-full">
          <div className="flex items-center gap-[40px]">
            <Button variant='secondary' className="md:w-[50px] md:h-[50px] w-[46px] h-[46px]  rounded-full p-3  hover:bg-zinc-950 duration-300">
              <Image
                src={navLogo}
                alt="logo"
                width={40}
                height={40}
                className=""
              />
            </Button>
            <nav className=" hidden md:flex items-center gap-0">
              <NavigationMenu className='space-x-0'>
                <NavigationMenuList dir="rtl" className="flex items-center ">
                  <NavigationMenuItem className="ml-5">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="text-zinc-400 hover:text-white duration-300 rounded-full px-[6px] py-3  text-[15px] font-semibold">
                        صفحه اصلی
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="">
                    <NavigationMenuTrigger className="text-zinc-400 rounded-full hover:text-white duration-300 bg-transparent text-[15px] font-semibold px-[6px] py-3 ">
                      طراحی سایت
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[360px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="mr-[-100px]">
                    <NavigationMenuTrigger className="text-zinc-400 rounded-full hover:text-white bg-transparent duration-300 text-[15px] font-semibold px-[6px] py-3 ">
                      شبکه های اجتماعی
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                shadcn/ui
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components that you can
                                copy and paste into your apps. Accessible.
                                Customizable. Open Source.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Installation"
                        >
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Typography"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className=" px-[10px] py-3  duration-300 hover:text-white rounded-full">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="text-zinc-400 hover:text-white duration-300 text-[15px] font-semibold">
                        سوالات متداول
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className=" px-[10px] py-3  duration-300 hover:text-white rounded-full">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="text-zinc-400 hover:text-white duration-300 text-[15px] font-semibold">
                         ارتباط باما
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
          <div className="flex items-center gap-1.5 ">
            {isAuthenticated ? (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className=" w-[45px] h-[45px] items-center justify-center rounded-full hidden md:flex"
                >
                  <BiMessageDetail size={17} />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className=" w-[45px] h-[45px] items-center justify-center rounded-full  hidden md:flex"
                    >
                      <RiUserLine size={18} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-50 " dir="rtl">
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="ml-2 h-4 w-4" />
                        <span>پروفایل</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard className="ml-2 h-4 w-4" />
                        <span>پرداخت</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <RiShoppingBag2Line className="ml-2 h-4 w-4" />
                        <span>سفارشات</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <IoIosNotificationsOutline className="ml-2 h-4 w-4" />
                        <span>اعلانات</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BiMessageDetail className="ml-2 h-4 w-4" />
                        <span>پیام ها</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="ml-2 h-4 w-4" />
                      <span>خروج</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant='secondary' className='h-[45px] rounded-full  hidden md:flex'>
                  <span className="font-medium text-sm text-zinc-300">شروع کنید</span>
                </Button>
                <Button variant='secondary' size='icon' className='w-[45px] h-[45px] p-3 rounded-full md:hidden'>
                <BiMenu size={24}/>
              </Button>
              </>
            ) : (
              <>
              <Link href="/auth">
                <Button variant="secondary" className="py-2 px-6 rounded-full hidden md:block">
                  ورود
                </Button>
              </Link>
              <Button variant='secondary' size='icon' className='w-[45px] h-[45px] p-3 rounded-full md:hidden'>
                <BiMenu size={24}/>
              </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          }
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
