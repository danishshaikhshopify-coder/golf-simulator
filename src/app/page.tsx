import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/sections/Hero";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Problems from "@/components/sections/Problems";
import Promise from "@/components/sections/Promise";
import Strategy from "@/components/sections/Strategy";
import Partnership from "@/components/sections/Partnership";
import Guarantee from "@/components/sections/Guarantee";
import Decision from "@/components/sections/Decision";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <main>
        <Hero />
        <Problems />
        <WhoWeHelp />
        <Promise />
        <Strategy />
        <Partnership />
        <Guarantee />
        <Decision />
      </main>
    </>
  );
}
