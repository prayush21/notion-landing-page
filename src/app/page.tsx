import BuildingBlocks from "@/components/BuildingBlocks";
import Community from "@/components/Community";
import CommunityBento from "@/components/CommunityBento";
import Customers from "@/components/Customers";
import EveryTeams from "@/components/EveryTeams";
import HeroComponent from "@/components/HeroComponent";
import LastHero from "@/components/LastHero";
import Products from "@/components/Products";
import TemplatesBento from "@/components/TemplatesBento";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="flex mx-auto max-w-screen-xl min-h-screen flex-col items-center justify-between p-2 sm:p-24">
      <HeroComponent />
      <Products />
      <Customers />
      <BuildingBlocks />
      <Testimonial />
      <EveryTeams />
      <Community />
      <CommunityBento />
      <TemplatesBento />
      <LastHero />
    </main>
  );
}
