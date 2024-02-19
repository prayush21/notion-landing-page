import React from "react";
import MatchgroupIcon from "./../../public/clientLogos/match-group.webp";
import Image from "next/image";

function Testimonial() {
  var leftDoubleQuote = "\u201c";
  var rightDoubleQuote = "\u201d";
  return (
    <div className="w-full flex flex-col mt-10 gap-3">
      <div
        className={` text-3xl font-serif text-center before:content-['${leftDoubleQuote}'] after:content-['${rightDoubleQuote}']`}
      >
        Notion adapts to your needs. It’s as minimal or as powerful as you need
        it to be.
      </div>
      <div className="flex flex-col sm:flex-row justify-center place-items-center gap-2">
        <Image width={36} height={33} alt="match-logo" src={MatchgroupIcon} />
        <div className="text-sm sm:text-start text-center">
          <div className="font-bold">Rahim Makani</div>
          <div>Director of Product, Matchgroup</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
