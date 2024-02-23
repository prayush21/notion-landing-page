import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Slide1 from "../../public/slides/community-slide-01.webp";
import Slide2 from "../../public/slides/community-slide-02.webp";
import Slide3 from "../../public/slides/community-slide-03.webp";
import Slide4 from "../../public/slides/community-slide-04.webp";

function BentoCarousel() {
  const slidesArray = [
    { src: Slide1, caption: "Community meet-up in Tokyo" },
    { src: Slide2, caption: "Notion ambassador event in New York" },
    { src: Slide3, caption: "Sharing Notion setups in San Francisco" },
    { src: Slide4, caption: "Coffee pop-up in London" },
  ];
  return (
    <Carousel opts={{ loop: true, align: "center" }} className="w-full ">
      <CarouselContent className="flex flex-row place-items-center">
        {slidesArray.map((slideObj, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <figure className="flex flex-col place-items-center w-5/6 aspect-square text-center p-1">
              <Image
                width={500}
                height={500}
                src={slideObj.src}
                alt="Trulli"
                className="w-full"
              />
              <figcaption className="mt-3">{slideObj.caption}</figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default BentoCarousel;
