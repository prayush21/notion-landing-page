"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AskAI from "../../public/askAI.webp";
import Docs from "../../public/Docs.webp";
import Wikis from "../../public/Wiki.webp";
import Projects from "../../public/projects.webp";
import Calendar from "../../public/Calendar-Home.webp";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React, { useState } from "react";
import clsx from "clsx";
import ProductListItem from "./ProductListItem";

function Products() {
  const ProductsArray = [
    {
      imgSrc: AskAI,
      key: "AI",
      color: "purple",
      desc: "Ask literally anything. Notion will answer",
    },
    {
      imgSrc: Docs,
      key: "Docs",
      color: "yellow",
      desc: "Simple, powerful, beautiful. Next-gen notes & docs",
    },
    {
      imgSrc: Wikis,
      key: "Wikis",
      color: "red",
      desc: "Centralize your knowledge. No more hunting for answers.",
    },
    {
      imgSrc: Projects,
      key: "Projects",
      color: "blue",
      desc: "Manage complex projects without the chaos.",
    },
    {
      imgSrc: Calendar,
      key: "Calendar",
      color: "orange",
      desc: "Manage your time and projects, together.",
    },
  ];
  const [selectedImage, setSelectedImage] = React.useState<number>(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;
    setSelectedImage(api.selectedScrollSnap());
    api?.on("select", () => {
      setSelectedImage(api.selectedScrollSnap());
    });
  }, [api]);

  function handleMouseEnter(index: number) {
    api?.scrollTo(index);
  }

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto rounded-xl max-w-full sm:flex gap-2 sm:gap-4">
        {ProductsArray.map(({ key, color, desc }, index) => {
          return (
            <ProductListItem
              selected={selectedImage}
              onMouseEnter={() => handleMouseEnter(index)}
              index={index}
              key={key}
              title={key}
              color={color}
              desc={desc}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-between rounded-xl max-w-full">
        <Carousel
          opts={{
            skipSnaps: true,
            slides: null,
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnMouseEnter: true,
              stopOnInteraction: true,
            }),
          ]}
          setApi={setApi}
          className="p-4"
        >
          <CarouselContent className="">
            {ProductsArray.map(({ imgSrc, key }) => {
              return (
                <CarouselItem key={key} className="shadow-md rounded-xl">
                  <AspectRatio ratio={16 / 10}>
                    <Image
                      src={imgSrc}
                      alt="Image"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Products;
