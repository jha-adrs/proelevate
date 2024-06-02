import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FilterDialog } from './_components/filter';

interface EventsPageProps {

}

const EventsPage = ({ }: EventsPageProps) => {
    return (
        <main className="flex min-h-screen  w-full flex-col items-center bg-gray-50"> {/* TODO : Change bg*/}
            <div className="flex flex-col w-full h-full p-6 lg:px-64 justify-between bg-gradient-to-tr from-gray-200 via-gray-200 to-orange-50">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full lg:mt-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-6">
                        <h1 className="font-bold text-3xl">
                            Explore the best events around the world
                        </h1>
                        <p className="text-normal">
                            Ready to conquer? Dive into epic events from around the world! Join us for an exhilarating journey through thrilling festivals, grand celebrations, and unforgettable experiences. Uncover the best places to be, witness incredible spectacles, and make memories that will last a lifetime. Adventure awaits!
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center py-8 space-x-2">
                    <Link href={"/"}>
                        <Button variant={"default2"}>Host an event</Button>
                    </Link>
                    <Button variant={"outline2"} className="bg-white">View Events</Button> {/*Add scroll to effect */}
                </div>
            </div>
            <div className="flex flex-col w-full h-full p-6 lg:px-64 items-center justify-between">
                <div className="flex flex-row w-full justify-between">
                <h2 className="font-bold text-xl">
                    Upcoming Events (10)
                </h2>
                <FilterDialog />
                </div>
            </div>
        </main>
    )
}

export default EventsPage;