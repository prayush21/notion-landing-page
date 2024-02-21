import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Community() {
  return (
    <div className="flex flex-col place-items-center mt-20 md:mt-40 w-full space-y-4">
      <div className="text-3xl font-semibold sm:text-5xl sm:font-bold text-center max-w-2xl">
        Join a global movement. Unleash your creativity.
      </div>
      <div className=" text-lg font-light max-w-3xl text-center">
        Our vibrant community produces content, teaches courses, and leads
        events all over the world.
      </div>
      <Link
        className=" text-blue-400 flex place-items-center hover:underline"
        href="/"
      >
        Learn more <ArrowRight />
      </Link>
    </div>
  );
}

export default Community;
