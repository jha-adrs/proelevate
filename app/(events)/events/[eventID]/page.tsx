import { getEventDetails } from '@/actions/get-event-details';
import { BreadCrumb } from '@/components/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { eventSchema, formSchema } from '@/validators/create-event';
import { CalendarCheck, CalendarClockIcon, Loader, LocateFixedIcon, Users2Icon } from 'lucide-react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

interface EventDetailProps {
    params: {
        eventID: string;
    }
}

const EventDetail = async ({ params: { eventID } }: EventDetailProps) => {
    const eventDetails = await getEventDetails(eventID);
    if (!eventDetails) {
        redirect('/404');
    }
    const {
        title,
        description,
        date,
        location,
        image,
        tags,
        instructions,
        deadline,
    } = eventDetails;
    return (
        <div className='flex flex-col w-full h-full p-6 lg:px-32 items-center lg:items-start justify-center lg:justify-between space-y-6'>

            <BreadCrumb path={[
                { label: 'Home', href: '/' },
                { label: 'Events', href: '/events' },
                { label: title, href: `/events/${eventID}` }
            ]} />
            <div className='flex flex-col w-full h-full'>
                <h1 className="font-bold text-3xl">
                    {title}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 p-6 space-y-6 lg:space-y-0 w-full h-full">
                    <div className="col-span-1 lg:order-last max-w-xl space-y-6 ">
                        <div className="bg-gray-100 flex flex-row p-4 space-x-6 rounded-md border">
                            <Image src={image} alt={title} width={100} height={100} />
                            <div className="flex flex-col font-semibold text-md space-y-2">
                                <p className='inline-flex items-center'><CalendarCheck className='w-5 h-5 mr-2' /> {date.toDateString()}</p> {/* Make it in words */}
                                <p className='inline-flex capitalize items-center'><LocateFixedIcon className='w-5 h-5 mr-2' /> {location}</p>
                                <div className="flex flex-col lg:flex-row space-x-2">
                                    <Button variant={"default2"} size={"smRounded"}>
                                        Register Now
                                    </Button>
                                    <Button variant={"outline2"} size={"smRounded"}>
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 flex flex-row p-4 space-x-6 rounded-md border">

                            <div className="flex flex-col font-semibold text-md space-y-2">
                                <p className='inline-flex  items-center justify-start'>
                                    <Users2Icon className='w-5 h-5 mr-2' /> Team Size
                                    <span className="text-muted-foreground ml-5">1-5 members</span>
                                </p>
                                <p className='inline-flex  items-center justify-start'>
                                    <CalendarClockIcon className='w-5 h-5 mr-2' />
                                    Deadline
                                    <span className="text-muted-foreground ml-5">
                                        {deadline.toDateString()}
                                    </span>
                                </p>

                            </div>
                        </div>
                        <div className="flex flex-wrap bg-gray-100 p-4 rounded-md border h-fit">
                            {
                                tags.map((tag, index) => (
                                    <Badge variant={"secondary"} key={index} className=" text-sm rounded-full p-2 m-1">
                                        #{tag}
                                    </Badge>
                                ))
                            }
                        </div>
                    </div>


                    <div className="col-span-1 lg:col-span-2 rounded-md max-w-2xl space-y-4 w-full ">
                        <div className="bg-gray-50 flex flex-row p-6 space-x-6 rounded-md border">

                            <div className="flex flex-col  text-md space-y-6">
                                <p className='inline-flex text-xl font-semibold items-center justify-start'>
                                    Event Description
                                </p>
                                <p className='inline-flex  items-center justify-start'>
                                    {description}
                                </p>
                            </div>

                        </div>
                        <div className="bg-gray-50 flex flex-row p-6 space-x-6 rounded-md border">

                            <div className="flex flex-col  text-md space-y-6">
                                <p className='inline-flex text-xl font-semibold items-center justify-start'>
                                    Instructions
                                </p>
                                <div className=' items-center justify-start'>
                                    {instructions}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;

