import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FilterDialog } from './_components/filter';
import { siteConfig } from '@/config/siteConfig';
import { EventCard } from './_components/event-card';
import { SearchBar } from './_components/search-bar';
import { FilterField } from './_components/filter-field';
import { EventType } from '@/types/event';

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
            <div className="flex flex-col w-full h-full p-6 lg:px-36 items-center justify-between space-y-8">
                <div className="flex flex-row w-full justify-between">
                    <h2 className="font-bold text-xl">
                        Upcoming Events (10)
                    </h2>
                    <div className='flex flex-row space-x-4 items-center relative lg:hidden'>
                        <SearchBar />
                        <FilterDialog />
                    </div>
                    <div className="hidden lg:flex">
                        <SearchBar className="max-w-2xl" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className=" flex-col h-full space-y-4 max-w-md hidden lg:flex col-span-0 lg:col-span-2 ">

                        {
                            siteConfig.eventFilters.map((filter) => (
                                <FilterField key={filter.label} label={filter.label} options={filter.options} selectConstraint={filter.selectConstraint} disabled={filter.disabled} />
                            ))
                        }
                    </div>
                    <div className="flex flex-col w-full h-full max-w-3xl space-y-6 col-span-1 lg:col-span-3">
                        {
                            siteConfig.sampleEvents.map((event) => (
                                <EventCard key={event.id} event={event as EventType} />
                            ))
                        }
                    </div>
                </div>
                <p className="text-muted-foreground">
                    That&apos;s all for now! Check back soon for more events.
                </p>
            </div>
        </main>
    )
}

export default EventsPage;