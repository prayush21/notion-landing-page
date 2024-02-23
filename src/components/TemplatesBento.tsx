import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import HomeIcon from "./../../public/home.svg";
import FlagIcon from "./../../public/flag.svg";
import WaypointIcon from "./../../public/waypoint.svg";
import MeetingNotesIcon from "./../../public/meetingnotes.svg";
import PlaneIcon from "./../../public/plane.svg";
import Calendar from "./../../public/editorial-calendar.svg";
import HabitIcon from "./../../public/habit.svg";
import Link from "next/link";
import CompanyTemplate from "../../public/company-wiki-template.webp";

function TemplatesBento() {
  return (
    <div className="flex flex-col place-items-center mt-20 md:mt-40 w-full space-y-4">
      <div className="text-3xl font-semibold sm:text-5xl sm:font-bold text-center max-w-2xl">
        Endless ways to use it
      </div>
      <Link
        className=" text-blue-400 flex place-items-center hover:underline"
        href="/"
      >
        Browse all templates <ArrowRight />
      </Link>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-full sm:col-span-6 col-start-1 bg-neutral-100 rounded-xl p-6 cursor-pointer hover:bg-neutral-200">
          <div className=" flex flex-col place-items-start gap-4">
            <Image src={HomeIcon} alt="home-icon" height={20} width={20} />
            Company Wiki
            <Link
              className=" text-blue-400 flex place-items-center hover:underline"
              href="/"
            >
              Get Template <ArrowRight />
            </Link>
            <div className="grow flex flex-col justify-end place-items-end mt-20">
              <Image
                src={CompanyTemplate}
                alt="company-template"
                className=" -mr-5 -mb-5 rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-3 col-start-1 grid gap-4">
          <div className=" row-span-8 bg-neutral-100 rounded-xl p-6 cursor-pointer hover:bg-neutral-200">
            <div className=" flex flex-col place-items-start gap-4">
              <Image src={FlagIcon} alt="home-icon" height={20} width={20} />
              Product Roadmap
              <Link
                className=" text-blue-400 flex place-items-center hover:underline"
                href="/"
              >
                Get Template <ArrowRight />
              </Link>
            </div>
          </div>
          <div className=" row-span-8 bg-neutral-100 rounded-xl p-6 cursor-pointer hover:bg-neutral-200">
            <div className=" flex flex-col place-items-start gap-4">
              <Image
                src={WaypointIcon}
                alt="home-icon"
                height={20}
                width={20}
              />
              OKRs
              <Link
                className=" text-blue-400 flex place-items-center hover:underline"
                href="/"
              >
                Get Template <ArrowRight />
              </Link>
            </div>
          </div>
          <div className=" row-span-8 bg-neutral-100 rounded-xl p-6 cursor-pointer hover:bg-neutral-200">
            <div className=" flex flex-col place-items-start gap-4">
              <Image
                src={MeetingNotesIcon}
                alt="home-icon"
                height={20}
                width={20}
              />
              Meeting Notes
              <Link
                className=" text-blue-400 flex place-items-center hover:underline"
                href="/"
              >
                Get Template <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-3 col-start-1 grid gap-4">
          <div className=" row-span-8 bg-neutral-100 rounded-xl p-6 cursor-pointer hover:bg-neutral-200">
            <div className=" flex flex-col place-items-start gap-4">
              <Image src={PlaneIcon} alt="home-icon" height={20} width={20} />
              Vacation Planner
              <Link
                className=" text-blue-400 flex place-items-center hover:underline"
                href="/"
              >
                Get Template <ArrowRight />
              </Link>
            </div>
          </div>
          <div className=" row-span-8 bg-neutral-100 rounded-xl p-6 cursor-pointer hover:bg-neutral-200">
            <div className=" flex flex-col place-items-start gap-4">
              <Image src={Calendar} alt="home-icon" height={20} width={20} />
              Editorial Calendar
              <Link
                className=" text-blue-400 flex place-items-center hover:underline"
                href="/"
              >
                Get Template <ArrowRight />
              </Link>
            </div>
          </div>
          <div className=" row-span-8 bg-neutral-100 rounded-xl p-6 cursor-pointer hover:bg-neutral-200">
            <div className=" flex flex-col place-items-start gap-4">
              <Image src={HabitIcon} alt="home-icon" height={20} width={20} />
              Habit Tracker
              <Link
                className=" text-blue-400 flex place-items-center hover:underline"
                href="/"
              >
                Get Template <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplatesBento;
