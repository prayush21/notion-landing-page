import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroImage from "../../public/home-hero.webp";
function HeroComponent() {
  return (
    <div className="flex flex-col space-y-7 place-items-center max-sm:mt-10">
      <div className="text-5xl sm:text-6xl font-bold text-center min-w-80 leading-14 max-w-xl">
        Write, plan, share. With AI at your side.
      </div>
      <div
        className=" text-center font-normal text-xl tracking-wide
"
      >
        Notion is the connected workspace where better, faster work happens.
      </div>
      <div className="flex space-x-2 w-max">
        <Button>
          Get Notion free <ArrowRight />
        </Button>
        <Button variant="outline" className=" border-none text-blue-600">
          Request a demo <ArrowRight />
        </Button>
      </div>
      <Image
        src={HeroImage}
        sizes="(max-width: 390px) 358px,(min-width: 1023px) 640px"
        alt="hero-image"
        loading="lazy"
      />
    </div>
  );
}

export default HeroComponent;
