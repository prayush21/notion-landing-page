import React from "react";
import Image from "next/image";
import NotionCalendarIcon from "../../public/calendar-banner-mobile.svg";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
// import { ArrowRightIcon, Cross2Icon } from "@radix-ui/react-icons";

function Banner() {
  return (
    <div className="w-full p-3 md:p-6 flex justify-between md:justify-center md:gap-4 align-middle bg-neutral-100 gap-2">
      <div className="flex flex-col text-sm max-w-56 md:max-w-max">
        <div className="font-bold">Meet Notion Calendar</div>
        <div className="">
          Beautifully designed and fully integrated for your life and work.
        </div>

        <Link
          className="flex flex-row place-items-center font-bold hover:text-blue-700 hover:underline"
          href="/"
        >
          Get it for free
          <span>
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </Link>
      </div>
      <Image
        className="md:order-first"
        height={50}
        width={50}
        src={NotionCalendarIcon}
        alt="Notion Calendar Icon"
      />
      <div className="text-2xl max-sm:self-center md:absolute md:top-0 md:right-0 md:p-4">
        <X size={24} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Banner;
