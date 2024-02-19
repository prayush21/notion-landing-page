import BuildingBlocks from "@/components/BuildingBlocks";
import Customers from "@/components/Customers";
import HeroComponent from "@/components/HeroComponent";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="flex mx-auto max-w-screen-xl min-h-screen flex-col items-center justify-between p-2 sm:p-24">
      <HeroComponent />
      <Products />
      <Customers />
      <BuildingBlocks />
      <Testimonial />
    </main>
  );
}
