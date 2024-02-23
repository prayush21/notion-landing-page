import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import NotionParade from "../../public/notion-parade.webp";
import Image from "next/image";
import { Separator } from "./ui/separator";

function LastHero() {
  return (
    <div className="flex flex-col place-items-center mt-20 md:mt-40 w-full space-y-6">
      <div className="text-3xl font-semibold sm:text-6xl sm:font-bold text-center max-w-2xl">
        Get started for free
      </div>
      <div className="text-lg">
        Play around with it first. Pay and add your team later.
      </div>
      <div className="flex space-x-2 w-max">
        <Button>
          Get Notion free <ArrowRight />
        </Button>
        <Button variant="outline" className=" border-none text-blue-600">
          Request a demo <ArrowRight />
        </Button>
      </div>
      <Image width={670} height={330} src={NotionParade} alt="notion-parade" />
      <Separator className="w-full mt-0 mb-4" />
    </div>
  );
}

export default LastHero;
