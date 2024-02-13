"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import NotionLogo from "../../public/notion-logo.svg";
import { Link, Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import SparklesIcon from "../../public/sparkles.svg";
import BookOpenIcon from "../../public/bookOpen.svg";
import CalendarIcon from "../../public/calendar.svg";
import TargetIcon from "../../public/target.svg";
import DocsIcon from "../../public/docs.svg";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ProductListItemsMob = ["AI", "Docs", "Wikis", "Projects", "Calendar"];
  const ResourcesListItemsMob = [
    "Blog",
    "Notion Academy",
    "Guides & tutorials",
    "Webinars",
    "Help center",
    "API docs",
    "Community",
    "Hire a consultant",
  ];
  const DownloadListItemsMob = ["Notion", "Calendar", "Web Clipper"];

  const productListItems: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: "AI",
      href: "/",
      description: "Integrgated AI assistant",
    },
    {
      title: "Docs",
      href: "/",
      description: "Simple & powerful",
    },
    {
      title: "Wikis",
      href: "/",
      description: "Centralize your knowledge",
    },
    {
      title: "Projects",
      href: "/",
      description: "For every team or size",
    },
    {
      title: "Calendar",
      href: "/",
      description: "Time and work together",
    },
    {
      title: "Template Gallery",
      href: "/",
      description: "Setups to get you started",
    },
    {
      title: "Customer Stories",
      href: "/",
      description: "See how teams use Notion",
    },
    {
      title: "Connections",
      href: "/",
      description: "Connect your tools to Notion",
    },
  ];

  return (
    <div className="w-full bg-white sticky top-0 border-b-2 border-neutral-200 z-50">
      <nav className="p-4 flex justify-between ">
        <div className="flex flex-row space-x-3">
          <Image width={92} height={32} src={NotionLogo} alt="notion-logo" />
          <div className="hidden xl:flex">
            <NavigationMenu>
              <NavigationMenuList className="">
                <NavigationMenuItem value="product">
                  <NavigationMenuTrigger className=" text-base font-normal">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-1 md:grid-cols-2 ">
                      {productListItems.map((component) => {
                        return (
                          <ListItemWithDesc
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItemWithDesc>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="download">
                  <NavigationMenuTrigger className="columns-1 text-base font-normal">
                    Download
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <ul className="grid w-[200px] p-1">
                      <ListItem>Notion</ListItem>
                      <ListItem>Calendar</ListItem>
                      <ListItem>Web Clipper</ListItem>

                      <div className=" text-sm font-light p-2">
                        Notion is always at home right{" "}
                        <span className=" underline">in your browser</span>
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" text-base font-normal">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <div className="w-[800px] grid grid-cols-8 p-1">
                      <ul className="p-1 col-span-4 border-r-2">
                        <div className="text-xs uppercase font-light text-neutral-500 mx-2">
                          By Team Size
                        </div>
                        <ListItemWithDesc title="Enterprise" href="/">
                          Advance features for your org
                        </ListItemWithDesc>
                        <ListItemWithDesc title="Small Business" href="/">
                          Run your team on one tool
                        </ListItemWithDesc>
                        <ListItemWithDesc title="Personal" href="/">
                          Free for individuals
                        </ListItemWithDesc>
                      </ul>
                      <ul className="p-1 col-span-2 border-r-2">
                        <div className=" text-xs mx-2 uppercase font-light text-neutral-500">
                          By Team Function
                        </div>
                        <ListItem>Design</ListItem>
                        <ListItem>Engineering</ListItem>
                        <ListItem>Product</ListItem>
                        <ListItem>Managers</ListItem>
                      </ul>
                      <ul className="p-1 col-span-2">
                        <div className=" text-xs mx-2 uppercase font-light text-neutral-500">
                          Notion For
                        </div>
                        <ListItem>Startups</ListItem>
                        <ListItem>Remote Work</ListItem>
                        <ListItem>Education</ListItem>
                        <ListItem>Nonprofits</ListItem>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" text-base font-normal">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] p-1">
                      <ListItem>Blog</ListItem>
                      <ListItem>Notion Academy</ListItem>
                      <ListItem>Guides & Tutorials</ListItem>
                      <ListItem>Webinars</ListItem>
                      <ListItem>Help Center</ListItem>
                      <ListItem>API Docs</ListItem>
                      <ListItem>Community</ListItem>
                      <ListItem>Hire a consultant</ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              variant="outline"
              className=" text-base font-normal border-none"
            >
              Pricing
            </Button>
          </div>
        </div>
        <div className="flex flex-row space-x-5 place-items-center">
          <div className="hidden md:flex h-5 flex-row place-items-center gap-3 ">
            <Button variant="outline" className="border-none">
              Request a demo
            </Button>
            <Separator orientation="vertical" />
            <Button variant="outline" className="border-none">
              Log in
            </Button>
          </div>
          <Button>Get Notion Free</Button>
          {isMenuOpen ? (
            <X
              onClick={() => setIsMenuOpen(false)}
              className=" md:hidden cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setIsMenuOpen(true)}
              className=" md:hidden cursor-pointer"
            />
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden w-full p-4 border-t-2">
          <Accordion type="multiple" className="w-full" defaultValue="product">
            <AccordionItem value="product">
              <AccordionTrigger className="text-lg font-bold">
                Product
              </AccordionTrigger>
              <AccordionContent>
                {" "}
                <List items={ProductListItemsMob} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="solution">
              <AccordionTrigger className="text-lg font-bold">
                Solutions
              </AccordionTrigger>
              <AccordionContent>
                {" "}
                <SolutionsList />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resources">
              <AccordionTrigger className="text-lg font-bold">
                Resources
              </AccordionTrigger>
              <AccordionContent>
                {" "}
                <List items={ResourcesListItemsMob} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="download">
              <AccordionTrigger className="text-lg font-bold">
                Download
              </AccordionTrigger>
              <AccordionContent>
                {" "}
                <List items={DownloadListItemsMob} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button variant="" className="w-full mb-2">
            Get Notion Free
          </Button>
          <Button variant="outline" className="w-full">
            Log in
          </Button>
        </div>
      )}
    </div>
  );
}

const List = ({ items }: { items: string[] }) => {
  return (
    <ul className=" text-base text-neutral-700 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const SolutionsList = () => {
  return (
    <ul className="text-base text-neutral-700 pt-5">
      <div className="mb-5">
        <div className="  text-xs font-normal text-neutral-600 uppercase mb-3">
          By Team Size
        </div>
        <li>Enterprise</li>
        <li>Small business</li>
        <li>Personal</li>
      </div>
      <div className="mb-5">
        <div className=" text-xs font-normal text-neutral-600 uppercase mb-3">
          By Team Function
        </div>
        <li>Design</li>
        <li>Engineering</li>
        <li>Product</li>
        <li>Managers</li>
      </div>
      <div className="mb-5">
        <div className=" text-xs font-normal text-neutral-600 uppercase mb-3">
          Notion For
        </div>
        <li>Startups</li>
        <li>Remote Work</li>
        <li>Education</li>
        <li>Nonprofits</li>
      </div>
    </ul>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-neutral-100  focus:bg-neutral-100 focus:text-accent-foreground"
          {...props}
        >
          {children}
        </a>
        {/* </Link> */}
      </NavigationMenuLink>
    </li>
  );
});

const ListItemWithDesc = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block rounded-md p-2 mb-1 leading-none no-underline outline-none transition-colors hover:bg-neutral-100  focus:bg-neutral-100 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-neutral-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
ListItemWithDesc.displayName = "ListItemWithDesc";

export default Navbar;
