"use client";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SparklesIcon from "../../public/sparkles2.svg";

export default function ProductListItem(props: {
  selected: number;
  title: string;
  desc: string;
  color: string;
  index: number;
  onMouseEnter: () => void;
}) {
  return (
    <div
      className={clsx(
        ` min-w-48 sm:aspect-square p-4 rounded-xl flex flex-col justify-between
        align-baseline border-4 border-neutral-100 group bg-neutral-100 hover:bg-white hover:text-neutral-950 tranisition-all cursor-pointer`,
        props.selected == props.index && "bg-white text-neutral-950"
      )}
      {...props}
    >
      <div className="text-xl font-bold flex flex-col justify-between h-34">
        <Image src={SparklesIcon} alt="sparles" />
        {props.title}
      </div>
      <div className="text-sm text-wrap flex-wrap text-start">{props.desc}</div>
      <div className="h-5">
        <div
          className={`hidden group-hover:flex flex-row place-items-center gap-2 text-sm font-semibold text-${props.color}-600 transition-all`}
        >
          Learn More <ArrowRight size="0.875rem" />
        </div>
      </div>
    </div>
  );
}
