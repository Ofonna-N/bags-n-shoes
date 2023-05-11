import Link from "next/link";
import Container from "./components/containers/Container";
import HeroSection from "./components/layout/HeroSection";
import FeaturedSection from "./components/layout/FeaturedSection";
import BackInStockSection from "./components/layout/BackInStockSection";
import { FaPlay } from "react-icons/fa";
import VideoSection from "./components/layout/VideoSection";
import TextPromoSection from "./components/layout/TextPromoSection";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      {/* @ts-ignore-error Server Component*/}
      <FeaturedSection />
      {/* @ts-ignore-error Server Component*/}
      <BackInStockSection />
      <VideoSection />
      <TextPromoSection />
    </main>
  );
}
