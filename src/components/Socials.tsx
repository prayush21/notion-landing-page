import {
  FaceIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { FacebookIcon, YoutubeIcon } from "lucide-react";

function Socials() {
  return (
    <div className="flex space-x-2">
      {" "}
      <Button variant="outline" size="icon" className=" border-0">
        <InstagramLogoIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className=" border-0">
        <TwitterLogoIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className=" border-0">
        <LinkedInLogoIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className=" border-0">
        <YoutubeIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className=" border-0">
        <FacebookIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Socials;
