import React from "react";
import AvatarsImg from "../../public/avatars.webp";
import Image from "next/image";
import CommunityIconsImg from "../../public/community-icons-V2.webp";
import WelcomeLangImages from "../../public/welcome-to-notion.webp";
import AndreAv from "../../public/twitter-avatar-andre.png";
import OliverAv from "../../public/twitter-avatar-oliver.png";
import DebAv from "../../public/twitter-avatar-deborah.avif";
import { Carousel } from "./ui/carousel";
import BentoCarousel from "./BentoCarousel";

function CommunityBento() {
  return (
    <div className="grid grid-cols-12 gap-5 auto-rows-min gap-y-6">
      <div className=" col-span-full">
        <div
          style={{ marginLeft: "50%" }}
          className="transform -translate-x-1/2 w-max"
        >
          <Image
            width={1024}
            alt="avatars"
            src={AvatarsImg}
            className=" overflow-clip"
          />
        </div>
      </div>
      <div className="flex flex-col col-span-full rounded-lg sm:col-span-4 bg-neutral-100 p-5">
        <div className="text-blue-500 text-5xl font-bold">1M+</div>
        <div className="font-semibold text-sm">commnunity members</div>
      </div>
      <div className="flex flex-col col-span-full rounded-lg sm:col-span-4 bg-neutral-100 p-5">
        <div className="text-blue-500 text-5xl font-bold">150+</div>
        <div className="font-semibold text-sm">commnunity groups</div>
      </div>
      <div className="flex flex-col col-span-full rounded-lg sm:col-span-4 bg-neutral-100 p-5">
        <div className="text-blue-500 text-5xl font-bold">50+</div>
        <div className="font-semibold text-sm">countries represented</div>
      </div>
      <div className="flex flex-col col-span-full rounded-lg sm:col-span-6 bg-neutral-100 p-5">
        <div className="font-semibold text-lg">
          An always-on support network
        </div>
        <div className="text-base max-w-sm">
          Swap setups and share tips in over 149 online communities.
        </div>
        <div className="grow flex flex-col justify-center place-items-start ">
          <Image
            src={CommunityIconsImg}
            alt="commnity icons"
            width={288}
            height={273}
          />
        </div>
      </div>
      <div className="flex flex-col col-span-full rounded-lg sm:col-span-6 bg-neutral-100 p-5">
        <div className="font-semibold text-lg">Choose your language</div>
        <div className="text-base max-w-sm">
          Notion currently supports English, Korean, Japanese, French, German,
          Spanish, and Portuguese. With more to come!
        </div>
        <div className="grow flex flex-col justify-end place-items-end mt-20">
          <Image
            src={WelcomeLangImages}
            alt="commnity icons"
            width={934}
            height={472}
            className=" -mr-5 -mb-5 rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col col-span-full rounded-lg sm:col-span-8 bg-neutral-100 p-5">
        <div className="flex flex-col gap-2 row-span-4 rounded-lg sm:col-span-2 bg-neutral-100">
          <BentoCarousel />
        </div>
      </div>
      <div className="flex flex-col col-span-full rounded-lg sm:col-span-4 gap-6">
        <div className="flex flex-col gap-2 row-span-4 rounded-lg sm:col-span-4 bg-neutral-100 p-5">
          <div className="flex flex-row gap-2">
            <Image width={48} height={48} src={OliverAv} alt="deb-image" />

            <div className="flex flex-col">
              <div className=" font-bold">Deborah Mecca</div>
              <div className="  text-gray-500">@DebMecca</div>
            </div>
          </div>
          <div>
            <div className=" leading-6 font-light">
              I used to HATE documenting things. And then I started using
              @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
              that it wasn&apos;t that I hated documenting, I just hated Google
              Docs.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 row-span-4 rounded-lg sm:col-span-4 bg-neutral-100 p-5">
          <div className="flex flex-row gap-2">
            <Image width={48} height={48} src={AndreAv} alt="deb-image" />

            <div className="flex flex-col">
              <div className=" font-bold">André Blackman</div>
              <div className="  text-gray-500">@@mindofandre</div>
            </div>
          </div>
          <div>
            <div className=" leading-6 font-light">
              One of the most incredible things about @NotionHQ is the dynamic
              community being built - creating and sharing at its best.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 row-span-4 rounded-lg sm:col-span-4 bg-neutral-100 p-5">
          <div className="flex flex-row gap-2">
            <Image width={48} height={48} src={OliverAv} alt="deb-image" />

            <div className="flex flex-col">
              <div className=" font-bold">Oliver Peyre</div>
              <div className="  text-gray-500">@opeyre</div>
            </div>
          </div>
          <div>
            <div className=" leading-6 font-light">
              @NotionHQ Truly impressed by the velocity and quality of your
              work. Making using Notion even more fun week after week!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityBento;
