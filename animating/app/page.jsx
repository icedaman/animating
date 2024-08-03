import ImageSlider1 from "@/components/ImageSlider1";
import ImageSlider2 from "@/components/ImageSlider2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <ImageSlider1 />
      <ImageSlider2 />
    </main>
  );
}
