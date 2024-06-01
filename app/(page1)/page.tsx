import Image from "next/image";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-200">
      <Hero />
    </main>
  );
}
