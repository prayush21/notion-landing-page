"use client";

import Image from "next/image";
import React, { useState } from "react";
import EngineerIcon from "../../public/engineering-v2.png";
import DesignIcon from "../../public/design-v2.png";
import ProductIcon from "../../public/product.png";
import MarketingIcon from "../../public/marketing-v2.png";
import OperationsIcon from "../../public/operations-v2.png";
import HrIcon from "../../public/hr-v2.png";
import HrScreen from "../../public/teams/hr.webp";
import clsx from "clsx";
import { Button } from "./ui/button";

function EveryTeams() {
  const [active, setActive] = useState("engineering");
  return (
    <div className="w-full flex flex-col  place-items-center mt-20 md:mt-40">
      <div className="text-3xl md:text-5xl font-semibold text-center mb-10">
        Every team, side-by-side
      </div>
      <div className="w-full flex flex-col place-items-center">
        <div className="tab-wrap mb-4 lg:mb-5 flex flex-wrap lg:flex-nowrap justify-center gap-1 lg:gap-4 w-full">
          <Button
            onClick={() => setActive("engineering")}
            value="board"
            variant="outline"
            className="leading-3 text-sm max-lg:py-3 max-lg:px-2 border-0 hover:border-neutral-300 lg:bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 
          lg:flex lg:flex-col lg:h-max max-lg:max-h-4 w-1/5 p-4"
          >
            <Image
              className="hidden lg:block"
              alt="eng"
              src={EngineerIcon}
              width={70}
              height={70}
            />
            Engineering
          </Button>
          <Button
            onClick={() => setActive("design")}
            variant="outline"
            className="leading-3 text-sm max-lg:py-3 max-lg:px-2 border-0 hover:border-neutral-300 lg:bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 
          lg:flex lg:flex-col lg:h-max max-lg:max-h-4 w-1/5 p-4"
          >
            <Image
              className="hidden lg:block"
              alt="eng"
              src={DesignIcon}
              width={70}
              height={70}
            />
            Design
          </Button>
          <Button
            onClick={() => setActive("product")}
            variant="outline"
            className="leading-3 text-sm max-lg:py-3 max-lg:px-2 border-0 hover:border-neutral-300 lg:bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 
          lg:flex lg:flex-col lg:h-max max-lg:max-h-4 w-1/5 p-4"
          >
            <Image
              className="hidden lg:block"
              alt="eng"
              src={ProductIcon}
              width={70}
              height={70}
            />
            Product
          </Button>
          <Button
            onClick={() => setActive("marketing")}
            variant="outline"
            className="leading-3 text-sm max-lg:py-3 max-lg:px-2 border-0 hover:border-neutral-300 lg:bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 
          lg:flex lg:flex-col lg:h-max max-lg:max-h-4 w-1/5 p-4"
          >
            <Image
              className="hidden lg:block"
              alt="eng"
              src={MarketingIcon}
              width={70}
              height={70}
            />
            Marketing
          </Button>
          <Button
            onClick={() => setActive("operations")}
            variant="outline"
            className="leading-3 text-sm max-lg:py-3 max-lg:px-2 border-0 hover:border-neutral-300 lg:bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 
          lg:flex lg:flex-col lg:h-max max-lg:max-h-4 w-1/5 p-4"
          >
            <Image
              className="hidden lg:block"
              alt="eng"
              src={OperationsIcon}
              width={70}
              height={70}
            />
            Operations
          </Button>
          <Button
            onClick={() => setActive("hr")}
            variant="outline"
            className="leading-3 text-sm max-lg:py-3 max-lg:px-2 border-0 hover:border-neutral-300 lg:bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 
          lg:flex lg:flex-col lg:h-max max-lg:max-h-4 w-1/5 p-4"
          >
            <Image
              className="hidden lg:block"
              alt="eng"
              src={HrIcon}
              width={70}
              height={70}
            />
            HR
          </Button>
        </div>
        <div className="transition-opacity ">
          <Image
            className={clsx(
              // active == "board" ? "block" : "hidden",
              "rounded-xl border transition-all"
            )}
            src={HrScreen}
            alt="hr-screen"
          />
        </div>
      </div>
    </div>
  );
}

export default EveryTeams;
