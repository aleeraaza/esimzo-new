import Hero from "@/components/sections/Hero";
import CountriesSection from "@/components/sections/CountriesSection";
import RegionsSection from "@/components/sections/RegionsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <CountriesSection />
        <RegionsSection />
      </main>
    </div>
  );
}
