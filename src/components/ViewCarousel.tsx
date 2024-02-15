"use client";

import Image from "next/image";
import CalendarView from "../../public/views/calendar.webp";
import GalleryView from "../../public/views/gallery.webp";
import KanbanView from "../../public/views/kanban.webp";
import ListView from "../../public/views/list.webp";
import TableView from "../../public/views/table.webp";
import TimelineView from "../../public/views/timeline.webp";
import { Button } from "./ui/button";
import { useState } from "react";
import clsx from "clsx";

function ViewCarousel() {
  const [active, setActive] = useState("calendar");
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full flex flex-col justify-between place-items-center gap-3">
        <div className="mt-10 max-w-3xl transition-opacity ">
          {active == "board" && (
            <Image
              className={clsx(
                // active == "board" ? "block" : "hidden",
                "rounded-xl border transition-all "
              )}
              src={KanbanView}
              alt="kanban"
            />
          )}
          {active == "table" && (
            <Image
              className={clsx(
                //   active == "table" ? "block" : "hidden",
                "rounded-xl border"
              )}
              src={TableView}
              alt="table"
            />
          )}
          {active == "timeline" && (
            <Image
              className={clsx(
                //  active == "table" ? "block" : "hidden",
                "rounded-xl border"
              )}
              src={TimelineView}
              alt="timeline"
            />
          )}
          {active == "calendar" && (
            <Image
              className={clsx(
                // active == "calendar" ? "block" : "hidden",
                "rounded-xl border"
              )}
              src={CalendarView}
              alt="calendar"
            />
          )}
          {active == "gallery" && (
            <Image
              className={clsx(
                // active == "gallery" ? "block" : "hidden",
                "rounded-xl border"
              )}
              src={GalleryView}
              alt="gallery"
            />
          )}
          {active == "list" && (
            <Image
              className={clsx(
                // active == "list" ? "block" : "hidden",
                "rounded-xl border"
              )}
              src={ListView}
              alt="list"
            />
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-sm:max-w-72 max-w-96 hover">
          {" "}
          <Button
            onClick={() => setActive("board")}
            value="board"
            variant="secondary"
            className=" max-h-4 leading-3 text-xs font-normal py-3 px-2 border border-neutral-300 border-solid hover:bg-neutral-200 focus:bg-neutral-200"
          >
            Board
          </Button>
          <Button
            onClick={() => setActive("table")}
            variant="secondary"
            className=" max-h-4 leading-3 text-xs font-normal py-3 px-2 border border-neutral-300 border-solid hover:bg-neutral-200"
          >
            Table
          </Button>
          <Button
            onClick={() => setActive("timeline")}
            variant="secondary"
            className=" max-h-4 leading-3 text-xs font-normal py-3 px-2 border border-neutral-300 border-solid hover:bg-neutral-200"
          >
            Timeline
          </Button>
          <Button
            onClick={() => setActive("calendar")}
            variant="secondary"
            className=" max-h-4 leading-3 text-xs font-normal py-3 px-2 border border-neutral-300 border-solid hover:bg-neutral-200"
          >
            Calendar
          </Button>
          <Button
            onClick={() => setActive("gallery")}
            variant="secondary"
            className=" max-h-4 leading-3 text-xs font-normal py-3 px-2 border border-neutral-300 border-solid hover:bg-neutral-200"
          >
            Gallery
          </Button>
          <Button
            onClick={() => setActive("list")}
            variant="secondary"
            className=" max-h-4 leading-3 text-xs font-normal py-3 px-2 border border-neutral-300 border-solid hover:bg-neutral-200"
          >
            List
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ViewCarousel;
