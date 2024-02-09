import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CaretDownIcon, GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type LanguageObjectType = {
  label: string;
  description: string;
  value: string;
};

function LanguageMenu() {
  const languagesArray: LanguageObjectType[] = [
    {
      label: "English",
      description: "English (US)",
      value: "en-US",
    },
    {
      label: "Français (France)",
      description: "French",
      value: "fr",
    },
    {
      label: "Deutsch",
      description: "German",
      value: "de",
    },
    {
      label: "日本語",
      description: "Japanese",
      value: "ja",
    },
  ];

  return (
    <Select defaultValue="en-US" value="en-US">
      <SelectTrigger className=" max-w-max flex gap-1 place-items-center border-2 rounded-md p-1">
        <GlobeIcon />
        <SelectValue placeholder="Language"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languagesArray.map((item, index) => {
          return <LanguageMenuItem key={index} languageObj={item} />;
        })}
      </SelectContent>
    </Select>
  );
}

function LanguageMenuItem({
  languageObj,
}: {
  languageObj: LanguageObjectType;
}) {
  return (
    <Link href={languageObj.value} className="flex flex-col">
      <SelectItem value={languageObj.value}>
        <div className="text-base">{languageObj.label}</div>
        <div className="text-sm">{languageObj.description}</div>
      </SelectItem>
    </Link>
  );
}

export default LanguageMenu;
