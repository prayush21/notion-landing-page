import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Figma from "../../public/clientLogos/figma.png";
import Pixar from "../../public/clientLogos//pixar.png";
import Doordash from "../../public/clientLogos/doordash.png";
import Nike from "../../public/clientLogos/nike.png";
import Amazon from "../../public/clientLogos/amazon.png";
import Pinterest from "../../public/clientLogos/pinterest_logo.png";
import GE from "../../public/clientLogos/General_Electric_logo.png";
import Uber from "../../public/clientLogos/uber.png";
import Plaid from "../../public/clientLogos/plaid.png";
import Toyota from "../../public/clientLogos/toyota.png";
import Snowflake from "../../public/clientLogos/snowflake_logo.png";
import Headspace from "../../public/clientLogos/headspace_logo.png";
import AngelList from "../../public/clientLogos/angel-list.png";
import Robinhood from "../../public/clientLogos/robinhood.png";
import Image from "next/image";

function Customers() {
  const logos = [
    Figma,
    Pixar,
    Doordash,
    Nike,
    Amazon,
    Pinterest,
    GE,
    Uber,
    Plaid,
    Toyota,
    Snowflake,
    Headspace,
    AngelList,
    Robinhood,
  ];
  return (
    <div className="flex flex-col justify-center place-items-center mt-40 w-full space-y-4">
      <div className="text-4xl font-semibold sm:text-5xl sm:font-bold text-center">
        Millions run on Notion every day
      </div>
      <div className=" text-base font-light max-w-lg text-center">
        Powering the world’s best teams, from next-generation startups to
        established enterprises.
      </div>
      <Link
        className=" text-blue-400 flex place-items-center hover:underline"
        href="/"
      >
        Read Customer Stories <ArrowRight />
      </Link>

      <div className="flex flex-row items-center flex-wrap gap-5 justify-center w-100 mt-8">
        {logos.map((srcImg, index) => {
          return (
            <Image
              className="w-100 h-100 max-w-28"
              key={index}
              src={srcImg}
              alt="logo"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Customers;
