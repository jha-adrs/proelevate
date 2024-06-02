import Image from "next/image";
import { Hero } from "./_components/hero";
import { AddEvent } from "./_components/add-event";

export default function Home() {
  return (
    <main className="flex min-h-screen  w-full flex-col items-center bg-gray-700"> {/* TODO : Change bg*/}
      <Hero />
      <AddEvent />
    </main>
  );
}
