import Customers from "@/components/Customers";
import HeroComponent from "@/components/HeroComponent";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex mx-auto max-w-screen-xl min-h-screen flex-col items-center justify-between p-24">
      <HeroComponent />
      <Products />
      <Customers />
    </main>
  );
}
