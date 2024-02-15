import Image from "next/image";
import React from "react";
import BlockHeaderIcon from "../../public/blockHeader.svg";
import EyeIcon from "../../public/eye.svg";
import PaintPalleteIcon from "../../public/paintPallete.svg";
import CustomizeInfo from "../../public/customize-info.webp";
import BuildAnyPage from "../../public/build-any-page-communicate-any-idea.webp";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import ViewCarousel from "./ViewCarousel";

function BuildingBlocks() {
  return (
    <div className="mt-40 w-full flex flex-col place-items-center justify-center">
      <div className="text-5xl font-semibold text-center mb-10">
        Powerful building blocks
      </div>
      <div className="w-full   flex flex-col justify-between gap-7">
        <div className="flex flex-col p-6 bg-neutral-100 rounded-xl gap-2">
          <Image
            width={26}
            color="#3B82F6"
            src={BlockHeaderIcon}
            alt="block-header-icon"
            className="mt-3 text-blue-500"
          />
          <div className=" text-lg font-bold">
            Visualize, filter & sort any way you want
          </div>
          <div className=" font-normal max-w-lg">
            Show only tasks assigned to you, or items marked as urgent. Break
            down any project in the way that’s most helpful to you.
          </div>
          <ViewCarousel />
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-7">
          <div className="flex flex-col bg-neutral-100 rounded-xl p-6 justify-between gap-2">
            <Image
              width={26}
              color="#3B82F6"
              src={EyeIcon}
              alt="eye-icon"
              className="mt-3 text-blue-500"
            />
            <div className=" text-lg font-bold">
              Customize the info you track
            </div>
            <div className="font-normal max-w-lg">
              Create your own labels, tags, owners, and more, so everyone has
              context and everything stays organized.
            </div>
            <div className="flex justify-end">
              <Image src={CustomizeInfo} alt="customize-info" />
            </div>
          </div>
          <div className="flex flex-col bg-neutral-100 rounded-xl p-6 justify-between gap-2">
            <Image
              width={26}
              color="#3B82F6"
              src={PaintPalleteIcon}
              alt="paint-icon"
              className="mt-3 text-blue-500"
            />
            <div className=" text-lg font-bold">
              Build any page, communicate any idea
            </div>
            <div className="font-normal max-w-lg">
              Everything is drag and drop in Notion — images, toggles, to-do’s,
              even embedded databases.
            </div>
            <div className="flex justify-end">
              <Image src={BuildAnyPage} alt="build-info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildingBlocks;
