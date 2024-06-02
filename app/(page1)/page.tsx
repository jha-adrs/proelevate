import Image from "next/image";
import { Hero } from "./_components/hero";
import { AddEvent } from "./_components/add-event";

export default function Home() {
  return (
    <main className="flex min-h-screen  w-full flex-col items-center bg-gray-50"> 
      <Hero title="Ready to conquer? Dive into epic events from around the world!"
        description="Ready to conquer? Dive into epic events from around the world! Join us for an exhilarating journey through thrilling festivals, grand celebrations, and unforgettable experiences. Uncover the best places to be, witness incredible spectacles, and make memories that will last a lifetime. Adventure awaits!"
    />
      <AddEvent />
    </main>
  );
}
