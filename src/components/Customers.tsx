import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Customers() {
  return (
    <div className="flex flex-col justify-center place-items-center mt-44 w-full space-y-4">
      <div className="text-5xl font-bold">Millions run on Notion every day</div>
      <div className=" text-base font-light max-w-lg text-center">
        Powering the world’s best teams, from next-generation startups to
        established enterprises.
      </div>
      <Link className=" text-blue-400 flex place-items-center" href="/">
        Read Customer Stories <ArrowRight />
      </Link>
    </div>
  );
}

export default Customers;
