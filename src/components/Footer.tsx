import React from "react";
import LogoWithName from "./LogoWithName";
import Socials from "./Socials";
import LanguageMenu from "./LanguageMenu";
import Image from "next/image";
import NotionLogo from "../../public/notion-logo.svg";
import FooterColumnList from "./FooterColumnList";

type FooterColumnGroup = {
  title: string;
  list: string[];
};

function Footer() {
  const FooterColumnData: FooterColumnGroup[] = [
    {
      title: "Product",
      list: ["AI", "Docs", "Wikis", "Projects", "Calendar", "What’s new"],
    },
    {
      title: "Solutions",
      list: [
        "Enterprise",
        "Small business",
        "Personal use",
        "Remote work",
        "Startups",
        "Education",
        "Nonprofits",
        "Engineering",
        "Product",
        "Design",
        "Managers",
      ],
    },
    {
      title: "Download",
      list: ["iOS & Android", "Mac & Windows", "Calendar", "Web Clipper"],
    },
    {
      title: "Build",
      list: [
        "Integrations",
        "Templates",
        "API docs",
        "Guides & tutorials",
        "Hire a consultant",
        "Become a partner",
        "Become an affiliate",
      ],
    },
    {
      title: "Learn",
      list: [
        "Customer stories",
        "Help center",
        "Webinars",
        "Blog",
        "Community",
      ],
    },
    {
      title: "Get started",
      list: [
        "Switch from Confluence",
        "Switch from Asana",
        "Switch from Evernote",
        "Compare vs Monday",
        "Compare vs Clickup",
        "Compare vs Jira",
      ],
    },
    {
      title: "Resources",
      list: [
        "Pricing",
        "About us",
        "Careers",
        "Media kit",
        "Email us",
        "Security",
        "Cookie settings",
        "Terms & privacy",
        "California Privacy Notice",
        "Status",
      ],
    },
  ];
  return (
    <nav className="mx-auto max-w-screen-xl flex flex-col justify-between gap-6 md:flex-row md:py-20 md:px-32 p-4">
      <div className="flex flex-col space-y-4">
        <Image width={92} height={32} src={NotionLogo} alt="notion-logo" />
        <Socials />
        <LanguageMenu />
      </div>
      {/* <div className=" flex-1 grid grid-cols-2 md: md:grid-cols-3 md:gap-4"> */}
      <div className="flex-1 columns-2 md:columns-3">
        {/* <div> */}
        {FooterColumnData.map(({ title, list }, index) => {
          return <FooterColumnList key={index} title={title} list={list} />;
        })}
        {/* <FooterColumnList
          title="Product"
          list={["AI", "Docs", "Wikis", "Projects", "Calendar", "What’s new"]}
        />
        <FooterColumnList
          title="Solutions"
          list={[
            "Enterprise",
            "Small business",
            "Personal use",
            "Remote work",
            "Startups",
            "Education",
            "Nonprofits",
            "Engineering",
            "Product",
            "Design",
            "Managers",
          ]}
        />
        <FooterColumnList
          title="Download"
          list={["iOS & Android", "Mac & Windows", "Calendar", "Web Clipper"]}
        /> */}
        {/* </div> */}
      </div>
    </nav>
  );
}

export default Footer;
